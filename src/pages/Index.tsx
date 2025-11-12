import NeuralBackground from "@/components/NeuralBackground";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <NeuralBackground />
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-5xl font-bold bg-gradient-neural bg-clip-text text-transparent">
          NeuroRhythms
        </h1>
        <p className="text-xl text-muted-foreground mb-8">Music Backed by Neuroscience</p>
        <Link to="/home">
          <Button size="lg" className="gap-2 shadow-glow">
            <Music className="w-5 h-5" />
            Enter
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
