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
    description: "10 Hz alpha–beta modulation • 108 BPM • streamlined texture",
    bpm: 108,
    frequency: "10 Hz (Alpha-Beta)",
    brainState: "Focused Attention",
    audioUrl: "/audio/Deep_Focus.mp3",
    color: "neural-cyan"
  },
  {
    id: "relax",
    title: "Relaxing (Stress Relief)",
    description: "8 Hz low-alpha • 62 BPM (6/8) • calm alertness",
    bpm: 62,
    frequency: "8 Hz (Low Alpha)",
    brainState: "Calm & Relaxed",
    audioUrl: "/audio/Stress_Relief.mp3",
    color: "neural-violet"
  },
  {
    id: "sleep",
    title: "Deep Sleep",
    description: "5 Hz theta • 48 BPM (3/4) • long tails, no sharp transients",
    bpm: 48,
    frequency: "5 Hz (Theta)",
    brainState: "Deep Sleep",
    audioUrl: "/audio/Deep_Sleep.mp3",
    color: "neural-emerald"
  },
  {
    id: "motivation",
    title: "Motivation for Work",
    description: "12–14 Hz beta • ~120 BPM • energetic yet clean",
    bpm: 120,
    frequency: "12-14 Hz (Beta)",
    brainState: "Motivated & Alert",
    audioUrl: "/audio/Motivation_1.mp3",
    color: "neural-violet"
  }
];
