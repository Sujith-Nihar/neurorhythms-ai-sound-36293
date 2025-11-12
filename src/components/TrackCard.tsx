import { Play, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Track } from "@/data/tracks";
import { Link } from "react-router-dom";

interface TrackCardProps {
  track: Track;
  onPlay: (track: Track) => void;
  isPlaying?: boolean;
}

const TrackCard = ({ track, onPlay, isPlaying }: TrackCardProps) => {
  return (
    <div className="group relative bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 overflow-hidden">
      {/* Aurora gradient overlay */}
      <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 ${isPlaying ? 'animate-pulse-glow' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-gradient-neural" />
          </div>
          <Button
            onClick={() => onPlay(track)}
            size="icon"
            className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105"
            aria-label={`Play ${track.title}`}
          >
            <Play className="w-5 h-5 fill-current" />
          </Button>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{track.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{track.description}</p>
        
        <div className="space-y-2 mb-4 bg-background/30 rounded-lg p-3 border border-border/30">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">BPM</span>
            <span className="font-semibold text-primary">{track.bpm}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Frequency</span>
            <span className="font-semibold text-primary">{track.frequency}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Brain State</span>
            <span className="font-semibold text-primary">{track.brainState}</span>
          </div>
        </div>
        
        <Link to={`/science#${track.id}`}>
          <Button
            variant="outline"
            className="w-full gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <Info className="w-4 h-4" />
            Learn the Science
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TrackCard;
