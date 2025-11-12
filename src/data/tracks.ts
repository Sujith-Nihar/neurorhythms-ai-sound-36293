export interface Track {
  id: string;
  title: string;
  description: string;
  bpm: number;
  frequency: string;
  brainState: string;
  audioUrl: string;
  color: string;
}

export const tracks: Track[] = [
  {
    id: "focus",
    title: "Deep Focus",
    description: "Synchronize brain activity for sustained attention with alpha-beta boundary modulation",
    bpm: 108,
    frequency: "10 Hz (Alpha-Beta)",
    brainState: "Focused Attention",
    audioUrl: "/audio/deep_focus.mp3",
    color: "neural-teal"
  },
  {
    id: "relax",
    title: "Relaxing",
    description: "Reduce stress and stabilize parasympathetic response with low-alpha rhythms",
    bpm: 62,
    frequency: "8 Hz (Low Alpha)",
    brainState: "Calm & Relaxed",
    audioUrl: "/audio/relaxing.mp3",
    color: "neural-cyan"
  },
  {
    id: "sleep",
    title: "Deep Sleep",
    description: "Support slow-wave sleep onset with theta-range modulation and ambient soundscapes",
    bpm: 48,
    frequency: "5 Hz (Theta)",
    brainState: "Deep Sleep",
    audioUrl: "/audio/deep_sleep.mp3",
    color: "neural-violet"
  },
  {
    id: "motivation",
    title: "Motivation for Work",
    description: "Enhance alertness and dopamine engagement with beta rhythm emphasis",
    bpm: 120,
    frequency: "12-14 Hz (Beta)",
    brainState: "Motivated & Alert",
    audioUrl: "/audio/motivation.mp3",
    color: "neural-purple"
  }
];
