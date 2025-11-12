import { Button } from "@/components/ui/button";
import { Brain, Music, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import NeuralBackground from "@/components/NeuralBackground";

const Home = () => {
  return (
    <div className="relative">
      <NeuralBackground />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Scientifically Engineered Sound</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Music Backed by{" "}
            <span className="bg-gradient-neural bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Neuroscience
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Scientifically tuned soundscapes to help you focus, relax, and rest. 
            Every track engineered using brainwave entrainment principles.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link to="/music">
              <Button size="lg" className="gap-2 shadow-glow">
                <Music className="w-5 h-5" />
                Listen Now
              </Button>
            </Link>
            <Link to="/science">
              <Button size="lg" variant="outline" className="gap-2">
                <Brain className="w-5 h-5" />
                Explore the Science
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Four States of Mind
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "Deep Focus",
              description: "10 Hz alpha-beta modulation for sustained attention",
              color: "neural-teal"
            },
            {
              icon: Sparkles,
              title: "Relaxation",
              description: "8 Hz low-alpha rhythms to reduce stress",
              color: "neural-cyan"
            },
            {
              icon: Brain,
              title: "Deep Sleep",
              description: "5 Hz theta waves for sleep onset",
              color: "neural-violet"
            },
            {
              icon: Zap,
              title: "Motivation",
              description: "12-14 Hz beta for alertness & drive",
              color: "neural-purple"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}/20 flex items-center justify-center border border-${feature.color}/40 mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative bg-gradient-neural rounded-3xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Mind?</h2>
            <p className="text-lg mb-8 opacity-90">
              Start your journey with scientifically designed music today
            </p>
            <Link to="/music">
              <Button size="lg" variant="secondary" className="shadow-xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
