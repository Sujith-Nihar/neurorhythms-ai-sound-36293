import NeuralBackground from "@/components/NeuralBackground";
import { Brain, Music, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="relative">
      <NeuralBackground />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              About NeuroRhythms
            </h1>
            <p className="text-xl text-muted-foreground">
              Where neuroscience meets music technology
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To merge sound design and neuroscience into everyday tools for focus, motivation, and better rest.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that music is more than entertainment—it's a powerful tool for optimizing mental states. 
              By combining AI technology with neuroscience research, we create functional audio experiences that help you achieve your goals.
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-8 h-8 text-secondary" />
              <h2 className="text-2xl font-bold">How We Create</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All tracks on NeuroRhythms are AI-generated using MusicGPT, a cutting-edge music generation system. 
              Each composition is carefully designed based on brainwave-entrainment principles and tested audio design methodologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We leverage research from leading neuroscience institutions to ensure our music aligns with proven cognitive enhancement techniques.
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold">The Science</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our tracks utilize specific frequencies, tempos, and rhythmic patterns that correspond to different brainwave states:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Alpha waves (8-13 Hz)</strong> for relaxation and stress reduction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Beta waves (12-30 Hz)</strong> for focus and motivation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Theta waves (4-8 Hz)</strong> for deep relaxation and sleep onset</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-neural rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Important Disclaimer</h3>
            <p className="opacity-90">
              NeuroRhythms is designed for educational and entertainment purposes. 
              Our content is not intended as medical advice or treatment for any condition. 
              Please consult healthcare professionals for medical concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
