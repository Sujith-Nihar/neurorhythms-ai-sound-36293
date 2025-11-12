import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, Repeat, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Track } from "@/data/tracks";
import { tracks } from "@/data/tracks";

interface AudioPlayerProps {
  track: Track | null;
  onClose: () => void;
  onTrackChange?: (track: Track) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const AudioPlayer = ({ track, onClose, onTrackChange, isPlaying, setIsPlaying }: AudioPlayerProps) => {
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && track) {
      const savedTime = sessionStorage.getItem(`track-${track.id}-time`);
      audioRef.current.src = track.audioUrl;
      audioRef.current.volume = volume;
      if (savedTime) {
        audioRef.current.currentTime = parseFloat(savedTime);
      }
    }
  }, [track, volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && track) {
      setCurrentTime(audioRef.current.currentTime);
      sessionStorage.setItem(`track-${track.id}-time`, audioRef.current.currentTime.toString());
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    if (!track) return;
    const currentIndex = tracks.findIndex(t => t.id === track.id);
    const nextTrack = tracks[(currentIndex + 1) % tracks.length];
    onTrackChange?.(nextTrack);
  };

  const handlePrevious = () => {
    if (!track) return;
    const currentIndex = tracks.findIndex(t => t.id === track.id);
    const prevTrack = tracks[(currentIndex - 1 + tracks.length) % tracks.length];
    onTrackChange?.(prevTrack);
  };

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping(!isLooping);
    }
  };

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/40 p-4 z-40 animate-slide-in-bottom shadow-2xl">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="container mx-auto flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-card flex items-center justify-center border border-primary/40 flex-shrink-0">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-neural animate-pulse-glow" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-xs md:text-sm truncate">{track.title}</h4>
            <p className="text-xs text-muted-foreground truncate">{track.frequency} • {track.bpm} BPM</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 flex-[2] justify-center">
          <Button
            onClick={handlePrevious}
            size="icon"
            variant="ghost"
            className="w-8 h-8 md:w-9 md:h-9 hidden md:flex"
            aria-label="Previous track"
          >
            <SkipBack className="w-4 h-4" />
          </Button>
          
          <Button
            onClick={togglePlay}
            size="icon"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5" />}
          </Button>
          
          <Button
            onClick={handleNext}
            size="icon"
            variant="ghost"
            className="w-8 h-8 md:w-9 md:h-9 hidden md:flex"
            aria-label="Next track"
          >
            <SkipForward className="w-4 h-4" />
          </Button>
          
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
            <span className="text-xs text-muted-foreground w-12 text-right">
              {formatTime(currentTime)}
            </span>
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              className="flex-1"
              onValueChange={(value) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = value[0];
                }
              }}
              aria-label="Seek"
            />
            <span className="text-xs text-muted-foreground w-12">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2 flex-1 justify-end">
          <Button
            onClick={toggleLoop}
            size="icon"
            variant="ghost"
            className={`w-7 h-7 md:w-8 md:h-8 hidden md:flex ${isLooping ? 'text-primary' : ''}`}
            aria-label="Toggle loop"
          >
            <Repeat className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
          <a 
            href={track.audioUrl} 
            download 
            className="hidden md:block"
            aria-label="Download track"
          >
            <Button
              size="icon"
              variant="ghost"
              className="w-7 h-7 md:w-8 md:h-8"
            >
              <Download className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </a>
          <Button
            onClick={toggleMute}
            size="icon"
            variant="ghost"
            className="w-7 h-7 md:w-8 md:h-8"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-3 h-3 md:w-4 md:h-4" /> : <Volume2 className="w-3 h-3 md:w-4 md:h-4" />}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.01}
            className="w-16 md:w-24 hidden sm:block"
            onValueChange={handleVolumeChange}
            aria-label="Volume"
          />
        </div>
      </div>
      
      {/* Waveform visualization */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-wave opacity-30 overflow-hidden">
        {isPlaying && (
          <div className="h-full w-full bg-gradient-wave animate-wave" />
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
