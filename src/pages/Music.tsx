import { useState } from "react";
import TrackCard from "@/components/TrackCard";
import AudioPlayer from "@/components/AudioPlayer";
import NeuralBackground from "@/components/NeuralBackground";
import { tracks, Track } from "@/data/tracks";

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative pb-32">
      <NeuralBackground />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-neural bg-clip-text text-transparent">
            Music Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your neural state. Each track is precisely engineered to guide your brain into the optimal state.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              onPlay={(track) => {
                setCurrentTrack(track);
                setIsPlaying(true);
              }}
              isPlaying={currentTrack?.id === track.id && isPlaying}
            />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-primary">💡 How to Listen</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use headphones for the best experience</li>
              <li>• Set volume to a comfortable level (around 50-70%)</li>
              <li>• No autoplay — tracks start only when you press play</li>
              <li>• Use loop mode for extended sessions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <AudioPlayer 
        track={currentTrack} 
        onClose={() => setCurrentTrack(null)} 
        onTrackChange={setCurrentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default Music;
