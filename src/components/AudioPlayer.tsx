import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Track } from "@/data/tracks";

interface AudioPlayerProps {
  track: Track | null;
  onClose: () => void;
}

const AudioPlayer = ({ track, onClose }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && track) {
      audioRef.current.src = track.audioUrl;
      audioRef.current.volume = volume;
    }
  }, [track]);

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
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
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

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/40 p-4 z-40">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="container mx-auto flex items-center gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className={`w-12 h-12 rounded-lg bg-${track.color}/20 flex items-center justify-center border border-${track.color}/40`}>
            <div className="w-6 h-6 rounded-full bg-gradient-neural" />
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-sm">{track.title}</h4>
            <p className="text-xs text-muted-foreground">{track.frequency} • {track.bpm} BPM</p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-center">
          <Button
            onClick={togglePlay}
            size="icon"
            variant="ghost"
            className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          
          <div className="flex items-center gap-2 flex-1 max-w-md">
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
            />
            <span className="text-xs text-muted-foreground w-12">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-1 justify-end">
          <Button
            onClick={toggleMute}
            size="icon"
            variant="ghost"
            className="w-8 h-8"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.01}
            className="w-24"
            onValueChange={handleVolumeChange}
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
