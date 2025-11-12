import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NeuralBackground from "@/components/NeuralBackground";
import { ExternalLink, ChevronDown, Play } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import AudioPlayer from "@/components/AudioPlayer";
import { tracks, Track } from "@/data/tracks";

const Science = () => {
  const location = useLocation();
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const scienceData = [
    {
      id: "focus",
      title: "Deep Focus",
      icon: "🎯",
      description: "Focus music uses ~10 Hz amplitude modulation (alpha–beta boundary) and 108 BPM tempo to synchronize brain activity for sustained attention.",
      research: [
        {
          citation: "Zoefel & VanRullen (2020), Trends in Cognitive Sciences",
          description: "Rhythmic auditory stimulation can entrain attentional oscillations.",
          link: "https://doi.org/10.1016/j.tics.2020.03.006"
        },
        {
          citation: "Klimesch (2012), Brain Research Reviews",
          description: "Alpha oscillations govern top-down control and selective attention.",
          link: "https://doi.org/10.1016/j.brainresrev.2011.12.002"
        },
        {
          citation: "MIT News (2019): Controlling attention with brain waves",
          description: "Research on how brain waves control attention mechanisms.",
          link: "https://news.mit.edu/2019/controlling-attention-brain-waves-1204"
        }
      ]
    },
    {
      id: "relax",
      title: "Relaxing (Stress Relief)",
      icon: "🌿",
      description: "Built around 8 Hz low-alpha rhythms and 62 BPM pulse, aligning with relaxed breathing and HRV coherence. Reduces cortisol and stabilizes parasympathetic response.",
      research: [
        {
          citation: "Foxe & Snyder (2011), Frontiers in Psychology",
          description: "Alpha rhythms reduce distraction by suppressing sensory input.",
          link: "https://www.frontiersin.org/articles/10.3389/fpsyg.2011.00154/full"
        },
        {
          citation: "Lee et al. (2019), Scientific Reports",
          description: "Slow tempo music regulates heart rate and anxiety.",
          link: "https://www.nature.com/articles/s41598-019-48975-8"
        },
        {
          citation: "The Scientist (2023): From Soundwaves to Brainwaves",
          description: "How sound influences brain activity and relaxation.",
          link: "https://www.the-scientist.com/from-soundwaves-to-brainwaves-the-transformative-power-of-music-73341"
        }
      ]
    },
    {
      id: "sleep",
      title: "Deep Sleep",
      icon: "🌙",
      description: "Uses ~5 Hz theta-range modulation and 48 BPM tempo with long reverb tails and no percussion to support slow-wave sleep onset. Mimics early-sleep neural synchronization and reduces orienting responses.",
      research: [
        {
          citation: "Cox et al. (2014), Frontiers in Human Neuroscience",
          description: "Theta activity increases during sleep transitions.",
          link: "https://doi.org/10.3389/fnhum.2014.00197"
        },
        {
          citation: "Alamia & VanRullen (2023), eLife",
          description: "Brainwave directionality differs in sleep vs. wake states.",
          link: "https://elifesciences.org/articles/85035"
        },
        {
          citation: "Zaatar et al. (2023), PMC review",
          description: "How music affects sleep quality and brain states.",
          link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10765015/"
        }
      ]
    },
    {
      id: "motivation",
      title: "Motivation for Work",
      icon: "⚡",
      description: "Tempo: 120 BPM; frequency emphasis around 12–14 Hz beta rhythm for alertness and dopamine engagement. Encourages motivation, focus, and mild physiological arousal without anxiety.",
      research: [
        {
          citation: "Ferreri et al. (2019), Nature Neuroscience",
          description: "Dopamine modulates reward response to music.",
          link: "https://doi.org/10.1038/s41593-019-0561-0"
        },
        {
          citation: "Fiveash et al. (2023), Neuroscience & Biobehavioral Reviews",
          description: "Rhythmic predictability enhances motivation and cognitive drive.",
          link: "https://www.sciencedirect.com/science/article/pii/S0149763423001227"
        },
        {
          citation: "Salimpoor et al. (2013), Nature Neuroscience",
          description: "How rhythmic patterns influence reward systems and focus.",
          link: "https://doi.org/10.1038/nn.3360"
        }
      ]
    }
  ];

  return (
    <div className="relative">
      <NeuralBackground />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            The Science Behind NeuroRhythms
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every track is backed by peer-reviewed neuroscience research. 
            Explore the scientific foundations of brainwave entrainment and functional music.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {scienceData.map((section) => {
            const track = tracks.find(t => t.id === section.id);
            return (
              <div
                key={section.id}
                id={section.id}
                className="bg-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 scroll-mt-24 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{section.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-3">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {section.description}
                    </p>
                    {track && (
                      <Button
                        onClick={() => setCurrentTrack(track)}
                        className="gap-2 bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20"
                      >
                        <Play className="w-4 h-4" />
                        Listen Now
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Research Citations
                  </h3>
                  
                  {section.research.map((paper, index) => (
                    <div key={index} className="bg-background/40 rounded-lg border border-border/40 p-4">
                      <p className="font-semibold mb-2">{paper.citation}</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {paper.description}
                      </p>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Read Full Study
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <AudioPlayer 
        track={currentTrack} 
        onClose={() => setCurrentTrack(null)} 
        onTrackChange={setCurrentTrack}
      />
    </div>
  );
};

export default Science;
