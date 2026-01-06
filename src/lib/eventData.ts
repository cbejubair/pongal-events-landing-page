export interface PongalEvent {
  id: number;
  name: string;
  day: 1 | 2 | 3;
  category: string;
  description: string;
  icon: string;
  isTeamEvent: boolean;
  formUrl?: string;
}

export const pongalEvents: PongalEvent[] = [
  // Day 1 – Language & Creativity
  {
    id: 1,
    name: "Rangoli Competition",
    day: 1,
    category: "Language & Creativity",
    description: "Showcase your artistic skills by creating beautiful traditional kolam designs using colorful powders.",
    icon: "🎨",
    isTeamEvent: false,
    formUrl: "https://forms.gle/t7CMbgJeV52WAjHq9",
  },
  {
    id: 3,
    name: "Tamil Kavidhai Sollum Potti",
    day: 1,
    category: "Language & Creativity",
    description: "Compose and recite Tamil poetry on a topic given on the spot. Test your spontaneous creativity!",
    icon: "✍️",
    isTeamEvent: false,
    formUrl: "https://forms.gle/vBWQp6BovoakFtho7",
  },
  {
    id: 4,
    name: "Tamil kadhai Sollum poti",
    day: 1,
    category: "Language & Creativity",
    description: "Tell a short Tamil story on a given theme—original spoken storytelling competition.",
    icon: "📚",
    isTeamEvent: false,
  },

  // Day 2 – Expression & Performance
  {
    id: 5,
    name: "GEN Z Thirukkural",
    day: 2,
    category: "Expression & Performance",
    description: "Write your own modern Thirukkural! Create meaningful couplets relevant to today's generation.",
    icon: "💡",
    isTeamEvent: false,
    formUrl: "https://forms.gle/7y7AVMbsvjEbTW7i6",
  },
  {
    id: 6,
    name: "Debate (Tamil Only)",
    day: 2,
    category: "Expression & Performance",
    description: "Engage in thought-provoking debates conducted entirely in Tamil. Express your views eloquently!",
    icon: "🎤",
    isTeamEvent: false,
    formUrl: "https://forms.gle/J9nuYh5vEykLurmBA",
  },
  {
    id: 7,
    name: "Therukoothu (Skit)",
    day: 2,
    category: "Expression & Performance",
    description: "Perform traditional street theatre showcasing Tamil culture, mythology, and social themes.",
    icon: "🎭",
    isTeamEvent: true,
    formUrl: "https://forms.gle/jX1t8Y2FVdqbfC438",
  },
  // (Tamil Kavidhai Competition removed per request)

  // Day 3 – Games & Grand Finale
  // Manpanai Painting moved to Day 2 per request (see id 9 below)
  {
    id: 10,
    name: "Sack Race",
    day: 3,
    category: "Games & Grand Finale",
    description: "Jump your way to victory in this classic fun-filled race. Speed and balance matter!",
    icon: "🏃",
    isTeamEvent: false,
    formUrl: "https://forms.gle/vBWQp6BovoakFtho7",
  },
  {
    id: 11,
    name: "Tug of War",
    day: 3,
    category: "Games & Grand Finale",
    description: "Team up and pull together! Show your strength and teamwork in this exciting competition.",
    icon: "💪",
    isTeamEvent: true,
    formUrl: "https://forms.gle/kCq7X6XiqRpXTp158",
  },
  {
    id: 12,
    name: "Uriadi",
    day: 3,
    category: "Games & Grand Finale",
    description: "The traditional pot-breaking blindfolded game. A festive favorite filled with laughter!",
    icon: "🎯",
    isTeamEvent: false,
    formUrl: "https://forms.gle/3fprDHD686dNMiBGA",
  },
  {
    id: 9,
    name: "Manpanai Painting",
    day: 2,
    category: "Expression & Performance",
    description: "Decorate traditional clay pots with vibrant colors and designs. Celebrate Pongal artistry!",
    icon: "🏺",
    isTeamEvent: false,
    formUrl: "https://forms.gle/GorQPA6gh5QdfEX17",
  },
];

export const dayInfo = {
  1: {
    title: "Day 1",
    subtitle: "Language & Creativity",
    color: "primary",
  },
  2: {
    title: "Day 2",
    subtitle: "Expression & Performance",
    color: "accent",
  },
  3: {
    title: "Day 3",
    subtitle: "Games & Grand Finale",
    color: "secondary",
  },
};

export const departments = [
  "CSE",
  "ECE",
  "EEE",
  "ME",
  "CE",
  "IT",
  "AI & DS",
  "Cyber Sec",
  "Other",
];

export const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
