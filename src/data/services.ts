export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  hours: string;
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Swimming Pool',
    slug: 'swimming-pool',
    icon: '🏊',
    tagline: 'Dive into pure luxury',
    description: 'Our resort-style infinity pool offers breathtaking views and a serene aquatic experience for all guests.',
    longDescription: `Our stunning infinity pool stretches to meet the horizon, creating an unforgettable aquatic sanctuary. Whether you're looking to swim laps, lounge poolside, or simply soak in the spectacular views, our swimming pool facility delivers an experience that goes far beyond the ordinary.\n\nThe main pool features temperature-controlled water, underwater lighting for evening swims, and a separate shallow area perfect for relaxation. Adjacent sun loungers, private cabanas, and a poolside bar complete the picture of poolside perfection.\n\nOur pool is serviced by attentive staff who ensure towels, refreshments, and anything else you need are always within reach. For those seeking extra privacy, exclusive pool-side cabanas can be reserved in advance.`,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1614267119077-51bdcbe5e9c6?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=1200&q=80',
    ],
    features: ['Infinity Pool', 'Private Cabanas', 'Poolside Bar', 'Temperature Controlled', 'Underwater Lighting', 'Towel Service'],
    hours: 'Daily 7:00 AM – 10:00 PM',
  },
  {
    id: '2',
    name: 'Game Center',
    slug: 'game-center',
    icon: '🎮',
    tagline: 'Entertainment for everyone',
    description: 'State-of-the-art gaming and entertainment facilities for guests of all ages.',
    longDescription: `Our Game Center is a world-class entertainment hub designed to delight guests of all ages. From high-end gaming consoles and virtual reality experiences to classic board games and billiards, there's something for everyone in this vibrant social space.\n\nThe center features the latest gaming technology, including VR headsets, racing simulators, and a full arcade section. For those who prefer more traditional entertainment, we offer billiards, table tennis, foosball, and a carefully curated selection of board games and card games.\n\nThe Game Center is also home to our private screening room, which can be booked for exclusive movie nights, sports viewing events, or private presentations. With comfortable seating, premium audio-visual equipment, and complimentary snacks available, every visit is a special occasion.`,
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80',
    ],
    features: ['VR Experiences', 'Gaming Consoles', 'Billiards', 'Table Tennis', 'Arcade Games', 'Private Screening Room'],
    hours: 'Daily 10:00 AM – Midnight',
  },
  {
    id: '3',
    name: 'Fitness Area',
    slug: 'fitness-area',
    icon: '💪',
    tagline: 'Stay fit in style',
    description: 'A premium fitness facility equipped with cutting-edge equipment and personal training services.',
    longDescription: `Maintain your fitness routine without compromise at our state-of-the-art Fitness Area. Equipped with the latest cardio and strength training equipment, our facility rivals the best gyms in the world, all available exclusively to LODR guests.\n\nThe fitness area features treadmills, elliptical machines, stationary bikes, and a full range of free weights and resistance machines. A dedicated stretching and yoga studio provides space for mat-based workouts, meditation, and flexibility training.\n\nPersonal training sessions can be arranged with our certified fitness professionals who will tailor a workout program to your goals. For those who prefer group activities, we offer daily fitness classes including yoga, Pilates, and high-intensity interval training.`,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=1200&q=80',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=1200&q=80',
    ],
    features: ['Cardio Equipment', 'Free Weights', 'Yoga Studio', 'Personal Training', 'Group Classes', 'Sauna & Steam Room'],
    hours: 'Daily 5:00 AM – 11:00 PM',
  },
  {
    id: '4',
    name: 'Transfers',
    slug: 'transfers',
    icon: '🚗',
    tagline: 'Travel in comfort and style',
    description: 'Seamless airport and city transfers in luxury vehicles, ensuring a smooth start and end to your stay.',
    longDescription: `Arrive and depart in true luxury with our premium transfer service. Our fleet of meticulously maintained luxury vehicles, driven by professional chauffeurs, ensures that your journey to and from LODR is as comfortable and stylish as your stay itself.\n\nWe offer airport transfers, city tours, shopping excursions, and customized day trips. All vehicles are equipped with climate control, premium sound systems, and complimentary refreshments. Your driver will meet you at the arrivals hall with a personalized sign and assist with your luggage.\n\nFor special occasions, our concierge team can arrange vintage car transfers, helicopter services, or private yacht charters. Simply inform us of your requirements at least 24 hours in advance, and we will handle every detail of your transportation needs.`,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80',
    ],
    features: ['Airport Pickup', 'Luxury Fleet', 'Professional Chauffeurs', 'City Tours', '24h Availability', 'Flight Tracking'],
    hours: '24/7 Available',
  },
  {
    id: '5',
    name: 'Parking Space',
    slug: 'parking-space',
    icon: '🅿️',
    tagline: 'Secure and convenient parking',
    description: 'Secure, covered parking with valet service available for all hotel guests.',
    longDescription: `We understand that convenience is paramount, which is why LODR provides state-of-the-art parking facilities designed for total peace of mind. Our secure, covered parking structure is monitored 24/7 by our security team and equipped with advanced surveillance systems.\n\nValet parking is available at the main entrance, allowing you to simply hand over your keys and walk directly into the hotel. Our team will park your vehicle safely and return it whenever you need it, typically within 10 minutes of your request.\n\nFor electric vehicle owners, we offer dedicated EV charging stations. Our parking facility accommodates all vehicle types, from compact cars to large SUVs and luxury vehicles. Self-parking and valet options are both available, and special rates apply for extended stays.`,
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&q=80',
      'https://images.unsplash.com/photo-1473042904451-00171c69419d?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=1200&q=80',
    ],
    features: ['Valet Service', 'EV Charging', 'CCTV Security', 'Covered Facility', 'Self Parking', '24h Access'],
    hours: '24/7 Available',
  },
  {
    id: '6',
    name: 'Kids Room',
    slug: 'kids-room',
    icon: '🧒',
    tagline: 'A magical world for little ones',
    description: 'A dedicated, supervised play area where children can explore, create, and make friends.',
    longDescription: `At LODR, we believe every member of your family deserves to be pampered. Our dedicated Kids Room is a vibrant, safe, and imaginative space where children can explore, play, and create memorable experiences of their own while parents relax and enjoy the hotel facilities.\n\nThe Kids Room is staffed by trained childcare professionals who provide supervision, organized activities, and creative workshops for children aged 3-12. The space features age-appropriate toys, art supplies, a mini cinema, interactive learning stations, and a soft play area for younger children.\n\nDaily activity schedules include storytelling sessions, arts and crafts, cooking classes, and outdoor adventures. Our childcare team ensures every child feels safe, engaged, and excited throughout their stay. Parents can enjoy peace of mind knowing their children are in expert hands.`,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&q=80',
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1200&q=80',
      'https://images.unsplash.com/photo-1582456891045-7a2b0b93d5d3?w=1200&q=80',
    ],
    features: ['Trained Childcare Staff', 'Art & Crafts', 'Mini Cinema', 'Soft Play Area', 'Outdoor Activities', 'Age 3-12'],
    hours: 'Daily 8:00 AM – 8:00 PM',
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug);
