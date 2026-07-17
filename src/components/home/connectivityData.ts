import { Map, Hotel, Briefcase, GraduationCap, TreePine, PlusSquare, ShoppingBag } from "lucide-react";

export const connectivityData = [
  {
    title: "Connectivity",
    icon: Map,
    sections: [
      {
        subtitle: "Major Transport Modes",
        items: [
          { name: "Mumbai-Pune Highway", distance: "5.3 km", time: "20 min" },
          { name: "Pune Railway Station", distance: "22 km", time: "60 min" },
          { name: "Lohegaon Airport", distance: "27 km", time: "60 min" },
          { name: "Missing Link Expressway", distance: "50 km", time: "65 min" },
        ]
      },
      {
        subtitle: "Major Junctions",
        items: [
          { name: "Infosys Circle", distance: "2.2 km", time: "7 min" },
          { name: "Hinjawadi Shivaji Chowk", distance: "4.6 km", time: "13 min" },
          { name: "Wipro Circle", distance: "5 km", time: "16 min" },
          { name: "Bhumkar Chowk", distance: "5.2 km", time: "16 min" },
          { name: "Wakad Junction", distance: "6.1 km", time: "17 min" },
        ]
      }
    ]
  },
  {
    title: "Hotels",
    icon: Hotel,
    sections: [
      {
        subtitle: "Key Hospitality Chains",
        items: [
          { name: "Hyatt Place", distance: "2.7 km", time: "8 min" },
          { name: "Lemon Tree", distance: "2.8 km", time: "8 min" },
          { name: "Radisson Blu", distance: "3.2 km", time: "11 min" },
          { name: "Courtyard by Marriott", distance: "4.5 km", time: "12 min" },
          { name: "Vivanta by Taj", distance: "4.8 km", time: "13 min" },
          { name: "Ibis", distance: "4.8 km", time: "15 min" },
          { name: "Ginger Hotel (Wakad)", distance: "6.2 km", time: "18 min" },
          { name: "Sayaji", distance: "6.7 km", time: "22 min" },
          { name: "Orchid Hotel", distance: "7.4 km", time: "24 min" },
        ]
      }
    ]
  },
  {
    title: "IT Parks and SEZ",
    icon: Briefcase,
    sections: [
      {
        subtitle: "IT/ITES & SEZ - A Grade",
        items: [
          { name: "Persistent Systems", distance: "2.0 km", time: "9 min" },
          { name: "HCL Technologies", distance: "2.3 km", time: "9 min" },
          { name: "Dassault", distance: "2.2 km", time: "10 min" },
          { name: "CRISIL Ltd.", distance: "2.4 km", time: "10 min" },
          { name: "Accenture", distance: "3.6 km", time: "12 min" },
          { name: "Wipro", distance: "5 km", time: "16 min" },
          { name: "Tech Mahindra", distance: "5.3 km", time: "16 min" },
          { name: "Infosys", distance: "5.2 km", time: "15 min" },
          { name: "TCS", distance: "5.3 km", time: "16 min" },
          { name: "Cognizant CDC", distance: "5.9 km", time: "18 min" },
          { name: "Capgemini", distance: "6.2 km", time: "18 min" },
          { name: "IBM", distance: "6.2 km", time: "18 min" },
        ]
      }
    ]
  },
  {
    title: "Education",
    icon: GraduationCap,
    sections: [
      {
        subtitle: "Institutions",
        items: [
          { name: "MIS International School", distance: "450 m", time: "2 min" },
          { name: "Riya International", distance: "2.2 km", time: "5 min" },
          { name: "Symbiosis Institute of Int. Business", distance: "2.0 km", time: "6 min" },
          { name: "Diba International", distance: "2.0 km", time: "6 min" },
          { name: "Mahindra Intl. School", distance: "12 km", time: "23 min" },
          { name: "Delhi Public School", distance: "4.2 km", time: "11 min" },
          { name: "Ryan International", distance: "4.6 km", time: "13 min" },
          { name: "Vibgyor High School", distance: "5.7 km", time: "18 min" },
          { name: "Pawar Public School", distance: "6.0 km", time: "19 min" },
          { name: "Euro Kids Preschool", distance: "6.2 km", time: "20 min" },
          { name: "Indira Institute", distance: "6.3 km", time: "21 min" },
          { name: "Balaji Institute", distance: "6.0 km", time: "23 min" },
          { name: "D.Y. Patil University", distance: "7 km", time: "27 min" },
          { name: "JSPM Institute", distance: "7.8 km", time: "26 min" },
        ]
      }
    ]
  },
  {
    title: "Healthcare",
    icon: PlusSquare,
    sections: [
      {
        subtitle: "Institutions",
        items: [
          { name: "Ruby Hall", distance: "2 km", time: "8 min" },
          { name: "Hinjawadi Super Speciality", distance: "4.1 km", time: "10 min" },
          { name: "Lifepoint Multispeciality", distance: "6.8 km", time: "18 min" },
          { name: "Surya Mother & Child Super Speciality", distance: "7.2 km", time: "20 min" },
          { name: "Aditya Birla Memorial Hospital", distance: "10.2 km", time: "26 min" },
          { name: "Jupiter Hospital", distance: "13.5 km", time: "30 min" },
        ]
      }
    ]
  },
  {
    title: "Retail and Entertainment",
    icon: ShoppingBag,
    sections: [
      {
        subtitle: "Retail",
        items: [
          { name: "Grand Highstreet", distance: "3.5 km", time: "10 min" },
          { name: "D Mart", distance: "4.8 km", time: "13 min" },
          { name: "X-Square Mall", distance: "5.5 km", time: "15 min" },
          { name: "Butterfly Trampoline Park", distance: "5.5 km", time: "15 min" },
          { name: "Phoenix Mall of the Millennium", distance: "7 km", time: "23 min" },
        ]
      },
      {
        subtitle: "Streets",
        items: [
          { name: "Hinjawadi Road", distance: "4.5 km", time: "12 min" },
          { name: "Balewadi High Street", distance: "8.5 km", time: "27 min" },
        ]
      }
    ]
  },
  {
    title: "Sports, Wellness and Nature",
    icon: TreePine,
    sections: [
      {
        subtitle: "Key Locations",
        items: [
          { name: "Cult Fit", distance: "1.4 km", time: "5 min" },
          { name: "Gold's Gym", distance: "4 km", time: "13 min" },
          { name: "Decathlon", distance: "6.4 km", time: "23 min" },
          { name: "Marunji Hills Trek", distance: "12 km", time: "25 min" },
          { name: "Baner Pashan Biodiversity Park", distance: "12 km", time: "30 min" },
          { name: "Kasarsai Dam", distance: "15 km", time: "35 min" },
        ]
      }
    ]
  }
];
