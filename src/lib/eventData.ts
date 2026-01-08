export interface PongalEvent {
  id: number;
  name: string;
  day: 1 | 2 | 3;
  category: string;
  description: string;
  icon: string;
  isTeamEvent: boolean;
  formUrl?: string;
  rules?: string[];
}

export const pongalEvents: PongalEvent[] = [
  // Day 1 – Language & Creativity
  {
    id: 1,
    name: "Tamil Kavithai Sollum Potti",
    day: 1,
    category: "Language & Creativity",
    description: "Become the VAIRAMUTHU of PPG! Write your kavidhai on the given theme. Materials will be provided. Just bring pen 😁 Neenga vandha mattum podhum 🤗",
    icon: "✍️",
    isTeamEvent: false,
    formUrl: "https://forms.gle/vBWQp6BovoakFtho7",
    rules: [
      "Each participant may submit only one original poem",
      "Topic will be provided on the spot",
      "Complete within the given time limit",
      "A4 sheets provided; bring your own pen",
      "No mobile phones, books, or reference materials",
      "Best 3 selected based on creativity, content & presentation",
    ],
  },
  {
    id: 2,
    name: "Naalaya Iyakkunar",
    day: 1,
    category: "Language & Creativity",
    description: "Want to be a director? Put your Ultimate storytelling talent to a test here. Tell us your story with all emotions covered all under 5 minutes.",
    icon: "🎬",
    isTeamEvent: false,
    formUrl: "https://forms.gle/4jkFr57FidHHV9Wm6",
    rules: [
      "Tell your story within 5 minutes",
      "Cover all emotions in your storytelling",
      "Original content only",
      "Props allowed but not mandatory",
      "Judging based on creativity and presentation",
    ],
  },
  {
    id: 3,
    name: "GEN-Z Thirukkural",
    day: 1,
    category: "Language & Creativity",
    description: "What if Gen-Z writes Thirukkural? Write your own Thirukkural in the exact format on the scenario/theme given on the spot. Must use only proper Tamil words.",
    icon: "💡",
    isTeamEvent: false,
    formUrl: "https://forms.gle/7y7AVMbsvjEbTW7i6",
    rules: [
      "Follow exact Thirukkural format",
      "Use only proper Tamil words",
      "Content must respect Thirukkural values",
      "Submissions must be original and plagiarism-free",
      "Theme given on the spot",
      "Commercial use not allowed without permission",
    ],
  },

  // Day 2 – Expression & Performance (11.01.2025)
  {
    id: 4,
    name: "Debate (Tamil Only)",
    day: 2,
    category: "Expression & Performance",
    description: "The Flagship Event of this year Fest! Everyone has a side—try to defend using your exceptional debating skill. Expect great twists and turns!",
    icon: "🎤",
    isTeamEvent: false,
    formUrl: "https://forms.gle/J9nuYh5vEykLurmBA",
    rules: [
      "Topic given in advance; prepare beforehand",
      "Be respectful to opponents, judges & audience",
      "Speak only when it's your turn",
      "Fixed time limit per speaker",
      "Avoid going off-topic or misleading info",
      "No interrupting other speakers",
      "No harsh or offensive language",
      "Unexpected twist by judges possible!",
    ],
  },
  {
    id: 5,
    name: "Therukoothu (Skit)",
    day: 2,
    category: "Expression & Performance",
    description: "Dive into Tamil culture's vibrant pulse—team-driven folk theatre bursting with epic stories, sharp social satire, and electrifying acts!",
    icon: "🎭",
    isTeamEvent: true,
    formUrl: "https://forms.gle/jX1t8Y2FVdqbfC438",
    rules: [
      "Team event - theme given in advance",
      "Complete within given time limit",
      "Content must be relevant & culturally appropriate",
      "Minimal props allowed",
      "Offensive language/actions prohibited",
      "Judges' decisions are final",
    ],
  },
  {
    id: 6,
    name: "Manpaanai Painting",
    day: 2,
    category: "Expression & Performance",
    description: "Ignite team creativity—haul your clay pot & paints, paint live epics under the clock! Ban pre-work; dominate with fresh vibes!",
    icon: "🏺",
    isTeamEvent: true,
    formUrl: "https://forms.gle/GorQPA6gh5QdfEX17",
    rules: [
      "Team-based competition",
      "Bring your own Manpanai (clay pot) & painting materials",
      "Paint only on the Manpanai",
      "Complete within given time limit",
      "Pre-painted Manpanai NOT allowed",
      "Judged on creativity, neatness & presentation",
    ],
  },
  {
    id: 10,
    name: "Rangoli (Kolam) Competition",
    day: 2,
    category: "Expression & Performance",
    description: "Unleash your creativity and celebrate tradition through the art of Kolam. Participants will create elegant and intricate kolam designs using kolam powder. The competition highlights precision, symmetry, and cultural expression. Judging will be based on creativity, neatness, and overall visual appeal.",
    icon: "🎨",
    isTeamEvent: true,
    formUrl: "https://forms.gle/mnUWaYb7Z8D5N8FL7",
    rules: [
      "Team-based competition",
      "Participants must bring their own rangoli materials (kolam powder, colors, etc.); flowers are not allowed",
      "Each team must bring a sheet (base sheet) to create the rangoli on",
      "No materials will be provided by the organizers",
      "The rangoli design should be created during the competition time only",
      "Pre-made or pre-drawn rangoli designs are not allowed",
      "Participants must maintain cleanliness and discipline in the allotted area",
      "The use of eco-friendly materials is encouraged",
      "Any form of misconduct or rule violation will lead to disqualification",
      "The judges’ decision will be final and binding",
    ],
  },

  // Day 3 – Games & Grand Finale (12.01.2025)
  {
    id: 7,
    name: "Sack Race",
    day: 3,
    category: "Games & Grand Finale",
    description: "Bound into bouncy chaos—hop wildly in sacks to the finish, battling balance, speed, and giggles! Pure fun fuels sportsmanship!",
    icon: "🏃",
    isTeamEvent: false,
    formUrl: "https://forms.gle/vBWQp6BovoakFtho7",
    rules: [
      "Stand inside sack, hold securely at waist",
      "Hop forward toward finish line at signal",
      "No running, walking or removing sack",
      "If you fall, continue from same spot",
      "No assistance allowed",
      "Judges' decision is final",
    ],
  },
  {
    id: 8,
    name: "Tug of War",
    day: 3,
    category: "Games & Grand Finale",
    description: "Grip tight and yank hard—teams clash in a raw battle of muscle, unity, and cunning to drag foes across the line!",
    icon: "💪",
    isTeamEvent: true,
    formUrl: "https://forms.gle/kCq7X6XiqRpXTp158",
    rules: [
      "Equal number of players per team",
      "Hold rope with hands only",
      "No wrapping rope around body",
      "Crossing center line decides winner",
      "Unsportsmanlike conduct = disqualification",
      "Referee's decision is final",
    ],
  },
  {
    id: 9,
    name: "Uriadi",
    day: 3,
    category: "Games & Grand Finale",
    description: "Blindfolded bash-fest—teams guide mates to smash a dangling pot with cheers and cunning! Festive frenzy unleashes laughs & tradition!",
    icon: "🎯",
    isTeamEvent: true,
    formUrl: "https://forms.gle/3fprDHD686dNMiBGA",
    rules: [
      "Team event - follow organizer's instructions",
      "Must be properly blindfolded",
      "Use only the given stick",
      "No removal of blindfold allowed",
      "No rough or unsafe behavior",
      "Fastest team to break pot wins!",
    ],
  },
];

export const dayInfo = {
  1: {
    title: "Day 1",
    subtitle: "Language & Creativity - 09.01.2026",
    color: "primary",
  },
  2: {
    title: "Day 2",
    subtitle: "Expression & Performance - 12.01.2026",
    color: "accent",
  },
  3: {
    title: "Day 3",
    subtitle: "Games & Grand Finale - 13.01.2026",
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
