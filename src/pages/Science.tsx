import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NeuralBackground from "@/components/NeuralBackground";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Science = () => {
  const location = useLocation();
  
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
          link: "https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(19)30268-4"
        },
        {
          citation: "Klimesch (2012), Brain Research Reviews",
          description: "Alpha oscillations govern top-down control and selective attention.",
          link: "https://www.sciencedirect.com/science/article/pii/S0165017311001828"
        },
        {
          citation: "MIT: Controlling attention with brain waves",
          description: "Research on how brain waves control attention mechanisms.",
          link: "https://news.mit.edu/2015/brain-waves-control-attention-1214"
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
          link: "https://www.nature.com/articles/s41598-019-40060-w"
        },
        {
          citation: "The Scientist: From Soundwaves to Brainwaves",
          description: "How sound influences brain activity and relaxation.",
          link: "https://www.the-scientist.com/features/from-soundwaves-to-brainwaves-66128"
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
          link: "https://www.frontiersin.org/articles/10.3389/fnhum.2014.00402/full"
        },
        {
          citation: "Alamia & VanRullen (2023), eLife",
          description: "Brainwave directionality differs in sleep vs. wake states.",
          link: "https://elifesciences.org/articles/78688"
        },
        {
          citation: "PMC: The Transformative Power of Music",
          description: "How music affects sleep quality and brain states.",
          link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8956711/"
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
          link: "https://www.nature.com/articles/s41593-019-0364-y"
        },
        {
          citation: "Fiveash et al. (2023), Neuroscience & Biobehavioral Reviews",
          description: "Rhythmic predictability enhances motivation and cognitive drive.",
          link: "https://www.sciencedirect.com/science/article/pii/S0149763422004547"
        },
        {
          citation: "ScienceDirect: Rhythm-Mediated Reward and Attention",
          description: "How rhythmic patterns influence reward systems and focus.",
          link: "https://www.sciencedirect.com/science/article/pii/S0149763422004547"
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
          {scienceData.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{section.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Research Citations
                </h3>
                
                {section.research.map((paper, index) => (
                  <Collapsible key={index}>
                    <div className="bg-muted/30 rounded-lg border border-border/40 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="font-semibold mb-2">{paper.citation}</p>
                          <p className="text-sm text-muted-foreground mb-3">
                            {paper.description}
                          </p>
                        </div>
                        <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                          <ChevronDown className="w-4 h-4" />
                        </CollapsibleTrigger>
                      </div>
                      
                      <CollapsibleContent>
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          Read Full Study
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Science;
