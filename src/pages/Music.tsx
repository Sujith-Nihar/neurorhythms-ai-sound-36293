import { useState } from "react";
import TrackCard from "@/components/TrackCard";
import AudioPlayer from "@/components/AudioPlayer";
import NeuralBackground from "@/components/NeuralBackground";
import { tracks, Track } from "@/data/tracks";

const Music = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  return (
    <div className="relative pb-32">
      <NeuralBackground />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
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
              onPlay={setCurrentTrack}
            />
          ))}
        </div>
      </div>
      
      <AudioPlayer track={currentTrack} onClose={() => setCurrentTrack(null)} />
    </div>
  );
};

export default Music;
