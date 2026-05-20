export interface Room {
  id: string;
  name: string;
  slug: string;
  price: number;
  priceDisplay: string;
  tagline: string;
  description: string;
  longDescription: string;
  amenities: string[];
  size: string;
  capacity: number;
  image: string;
  gallery: string[];
  featured: boolean;
  beds: string;
  view: string;
}

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Serenity Suite',
    slug: 'serenity-suite',
    price: 350,
    priceDisplay: '$350',
    tagline: 'A sanctuary of calm and sophistication',
    description: 'The Serenity Suite offers a perfect blend of comfort and elegance with panoramic views and a private terrace.',
    longDescription: `Immerse yourself in tranquility within our Serenity Suite, where every detail has been carefully curated to create the ultimate relaxing experience. This spacious suite features floor-to-ceiling windows offering breathtaking panoramic views, a private terrace with outdoor seating, and a luxurious king-size bed adorned with premium linens.\n\nThe suite includes a separate living area with plush seating, a state-of-the-art entertainment system, and a fully stocked minibar. The marble ensuite bathroom features a soaking tub, rain shower, and premium toiletries from our exclusive collection.\n\nWhether you're celebrating a special occasion or simply seeking a peaceful retreat, the Serenity Suite provides an unmatched level of comfort, privacy, and luxury.`,
    amenities: ['King Bed', 'Private Terrace', 'Ocean View', 'Soaking Tub', 'Rain Shower', 'Minibar', '65" Smart TV', 'Air Conditioning', 'Room Service', 'Wi-Fi'],
    size: '65 m²',
    capacity: 2,
    beds: '1 King Bed',
    view: 'Ocean View',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80',
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'Sunlight Terrace Villa',
    slug: 'sunlight-terrace-villa',
    price: 550,
    priceDisplay: '$550',
    tagline: 'Where sunshine meets luxury living',
    description: 'A stunning villa with an expansive terrace overlooking the pool, perfect for those who appreciate the finest details.',
    longDescription: `The Sunlight Terrace Villa is our crown jewel — a magnificent living space that seamlessly blends indoor and outdoor luxury. Featuring an expansive private terrace with sun loungers, an outdoor dining area, and direct pool access, this villa redefines the concept of vacation living.\n\nThe villa's open-plan design maximizes natural light, creating a warm, inviting atmosphere. The master bedroom features a lavish king-size bed, and the living area includes designer furniture and artwork. With two full bathrooms, a fully equipped kitchen, and personalized butler service, this villa offers everything you need for an unforgettable stay.\n\nWake up to golden sunrises from your private terrace and end each day with spectacular sunsets over the pool — the Sunlight Terrace Villa transforms every moment into a cherished memory.`,
    amenities: ['King Bed', 'Private Pool Access', 'Outdoor Terrace', 'Butler Service', 'Full Kitchen', 'Living Room', 'Two Bathrooms', 'Smart Home System', 'Private Dining', 'Wi-Fi'],
    size: '120 m²',
    capacity: 4,
    beds: '1 King Bed + Sofa',
    view: 'Pool & Garden View',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'Tropical Zen Retreat',
    slug: 'tropical-zen-retreat',
    price: 450,
    priceDisplay: '$450',
    tagline: 'Find your inner peace in tropical paradise',
    description: 'Inspired by natural beauty, this retreat combines lush tropical aesthetics with zen-inspired design for ultimate relaxation.',
    longDescription: `Step into a world of natural serenity at our Tropical Zen Retreat. Inspired by the tranquility of Southeast Asian spa resorts, this unique accommodation features organic materials, lush greenery, and a design philosophy centered around mindfulness and relaxation.\n\nThe retreat includes a private bamboo garden with a meditation area, an outdoor rain shower surrounded by tropical plants, and a bedroom designed for restful sleep with blackout curtains and a premium sleep system. The bathroom features a Japanese soaking tub with garden views, making every moment here a journey toward inner peace.\n\nBegin each morning with sunrise yoga on your private deck, breathe in the fresh tropical air, and let the soothing sounds of nature restore your spirit. The Tropical Zen Retreat is more than a room — it's a transformative experience.`,
    amenities: ['King Bed', 'Private Garden', 'Outdoor Shower', 'Japanese Soaking Tub', 'Meditation Area', 'Yoga Mat', 'Smart TV', 'Mini Library', 'Aromatherapy Kit', 'Wi-Fi'],
    size: '80 m²',
    capacity: 2,
    beds: '1 King Bed',
    view: 'Tropical Garden',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80',
      'https://images.unsplash.com/photo-1601565415267-724db8f07e76?w=1200&q=80',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: '4',
    name: 'LODR Signature',
    slug: 'lodr-signature',
    price: 800,
    priceDisplay: '$800',
    tagline: 'The pinnacle of luxury and exclusivity',
    description: 'Our most prestigious accommodation, offering unmatched luxury, exclusivity, and personalized service beyond compare.',
    longDescription: `The LODR Signature suite represents the absolute pinnacle of luxury hospitality. This exclusive residence spans two floors and features dedicated staff, a private rooftop terrace with a personal jacuzzi, and bespoke furnishings curated from around the world.\n\nEvery aspect of the Signature suite has been designed for discerning guests who demand nothing but the absolute best. The suite includes a private chef, 24-hour concierge service, a home cinema room, a wine cellar stocked with premium vintages, and a beauty salon for your personal use.\n\nThe master bathroom is a work of art featuring hand-cut marble mosaic tiles, gold fixtures, and an infrared sauna. Arrive in style with our complimentary luxury transfer service, and allow our dedicated team to fulfill your every desire throughout your stay.`,
    amenities: ['Private Rooftop', 'Jacuzzi', 'Private Chef', '24h Concierge', 'Home Cinema', 'Wine Cellar', 'Beauty Salon', 'Infrared Sauna', 'Luxury Transfer', 'Wi-Fi'],
    size: '250 m²',
    capacity: 6,
    beds: '2 King Beds + Bunk',
    view: 'Panoramic City & Sea',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: '5',
    name: 'Terrace Room',
    slug: 'terrace-room',
    price: 280,
    priceDisplay: '$280',
    tagline: 'Your private outdoor escape awaits',
    description: 'A thoughtfully designed room with a private terrace offering beautiful garden views and serene outdoor space.',
    longDescription: `The Terrace Room offers an intimate connection with the outdoors through its private terrace overlooking our manicured gardens. Perfect for couples or solo travelers seeking a peaceful retreat, this room combines comfort with the joy of outdoor living.\n\nFeaturing a queen-size bed with premium linens, the room is decorated with local artwork and natural materials that reflect the surrounding landscape. The terrace is furnished with comfortable outdoor furniture, making it the perfect spot for morning coffee or evening cocktails.\n\nThe elegant bathroom includes a walk-in shower with rainfall showerhead and luxury bathroom amenities. The Terrace Room offers everything you need to unwind and enjoy the beauty of your surroundings.`,
    amenities: ['Queen Bed', 'Private Terrace', 'Garden View', 'Rain Shower', 'Smart TV', 'Minibar', 'Room Service', 'Air Conditioning', 'Safe', 'Wi-Fi'],
    size: '45 m²',
    capacity: 2,
    beds: '1 Queen Bed',
    view: 'Garden View',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: '6',
    name: 'Deluxe Room',
    slug: 'deluxe-room',
    price: 220,
    priceDisplay: '$220',
    tagline: 'Classic luxury, modern comfort',
    description: 'Our signature Deluxe Room combines timeless elegance with contemporary amenities for a perfect stay.',
    longDescription: `The Deluxe Room is the perfect choice for travelers who appreciate classic luxury with a contemporary touch. Thoughtfully furnished with plush bedding, quality materials, and elegant decor, this room provides everything you need for a comfortable and restful stay.\n\nThe room features a choice of king or twin beds, a workspace with ergonomic seating, and a well-appointed bathroom with premium toiletries. Large windows flood the space with natural light, and the carefully selected artwork adds a touch of sophistication to the warm, welcoming atmosphere.\n\nThe Deluxe Room is ideal for both business and leisure travelers, offering high-speed Wi-Fi, a spacious work desk, and all the amenities of a luxury hotel in a comfortable, elegantly appointed space.`,
    amenities: ['King or Twin Beds', 'Work Desk', 'Smart TV', 'Rain Shower', 'Minibar', 'Room Service', 'Air Conditioning', 'Blackout Curtains', 'Iron & Board', 'Wi-Fi'],
    size: '35 m²',
    capacity: 2,
    beds: '1 King or Twin Beds',
    view: 'City View',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80',
      'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=1200&q=80',
    ],
    featured: false,
  },
];

export const getRoomBySlug = (slug: string): Room | undefined =>
  rooms.find(r => r.slug === slug);
