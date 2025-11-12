import { Play, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Track } from "@/data/tracks";
import { Link } from "react-router-dom";

interface TrackCardProps {
  track: Track;
  onPlay: (track: Track) => void;
}

const TrackCard = ({ track, onPlay }: TrackCardProps) => {
  return (
    <div className="group relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-6 hover:shadow-glow transition-all duration-300 overflow-hidden">
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-${track.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-xl bg-${track.color}/20 flex items-center justify-center border border-${track.color}/40`}>
            <div className="w-8 h-8 rounded-full bg-gradient-neural animate-pulse-glow" />
          </div>
          <Button
            onClick={() => onPlay(track)}
            size="icon"
            className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-glow"
          >
            <Play className="w-5 h-5" />
          </Button>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{track.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{track.description}</p>
        
        <div className="space-y-2 mb-4">
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
            className="w-full gap-2"
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
