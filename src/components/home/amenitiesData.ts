import {
  Map, Leaf, Sun, Building2, Navigation,
  Sparkles, HeartPulse, Waves, Flower2, Dumbbell, Shirt,
  BookOpen,
  Film, Mic2, Gamepad2, MonitorPlay, Monitor, Trophy,
  Users2, Baby, Puzzle, BedDouble, Coffee
} from "lucide-react";

export const detailedAmenities = [
  {
    category: "PROJECT HIGHLIGHTS",
    items: [
      { name: "An integrated 25-Acre Development", icon: Map },
      { name: "25,454 sq. ft.(2364.75 sq.m.) Grand Clubhouse", icon: Building2 },
      { name: "Expansive Landscaped Areas", icon: Leaf },
      { name: "Wide Internal Roads", icon: Navigation },
      { name: "Climate-Responsive Living", icon: Sun },
    ]
  },
  {
    category: "WELLNESS & FITNESS",
    items: [
      { name: "Spa & Salon", icon: Sparkles },
      { name: "Yoga Studio", icon: Flower2 },
      { name: "Wellness Clinics", icon: HeartPulse },
      { name: "Fully Equipped Gymnasium", icon: Dumbbell },
      { name: "Swimming Pool", icon: Waves },
      { name: "Changing Rooms & Locker Facilities", icon: Shirt }
    ]
  },
  {
    category: "WORK & LEARNING",
    items: [
      { name: "Library & Co-Working Space", icon: BookOpen }
    ]
  },
  {
    category: "RECREATION & ENTERTAINMENT",
    items: [
      { name: "Mini Theatre", icon: Film },
      { name: "Digital Dome", icon: MonitorPlay },
      { name: "Karaoke Room", icon: Mic2 },
      { name: "Video Games Room", icon: Monitor },
      { name: "Indoor Games Suite", icon: Gamepad2 },
      { name: "Cricket Simulator", icon: Trophy }
    ]
  },
  {
    category: "COMMUNITY SPACES",
    items: [
      { name: "Large Multipurpose Halls", icon: Users2 },
      { name: "Guest Rooms and Lounge Guest Suites", icon: BedDouble },
      { name: "Creche", icon: Baby },
      { name: "Senior Citizens' Zone", icon: Coffee },
      { name: "Indoor Kids' Play Area with Brain Gym", icon: Puzzle },
    ]
  }
];
