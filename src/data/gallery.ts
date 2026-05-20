export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', alt: 'Infinity pool at sunset', category: 'Pool', width: 800, height: 600 },
  { id: '2', src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', alt: 'Luxury suite bedroom', category: 'Rooms', width: 800, height: 600 },
  { id: '3', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Fine dining experience', category: 'Dining', width: 800, height: 600 },
  { id: '4', src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', alt: 'Hotel exterior and gardens', category: 'Exterior', width: 800, height: 600 },
  { id: '5', src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', alt: 'Terrace villa lounge', category: 'Rooms', width: 800, height: 600 },
  { id: '6', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: 'Restaurant interior', category: 'Dining', width: 800, height: 600 },
  { id: '7', src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80', alt: 'Zen room with garden view', category: 'Rooms', width: 800, height: 600 },
  { id: '8', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', alt: 'Spa and wellness area', category: 'Spa', width: 800, height: 600 },
  { id: '9', src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80', alt: 'Hotel lobby and reception', category: 'Interior', width: 800, height: 600 },
  { id: '10', src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Signature suite living area', category: 'Rooms', width: 800, height: 600 },
  { id: '11', src: 'https://images.unsplash.com/photo-1482349212652-744925551cc2?w=800&q=80', alt: 'Tropical garden at dusk', category: 'Exterior', width: 800, height: 600 },
  { id: '12', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', alt: 'Fitness center', category: 'Facilities', width: 800, height: 600 },
  { id: '13', src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80', alt: 'LODR signature suite', category: 'Rooms', width: 800, height: 600 },
  { id: '14', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Gourmet breakfast spread', category: 'Dining', width: 800, height: 600 },
  { id: '15', src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80', alt: 'Terrace room balcony', category: 'Rooms', width: 800, height: 600 },
  { id: '16', src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80', alt: 'Evening lounge atmosphere', category: 'Interior', width: 800, height: 600 },
];

export const galleryCategories = ['All', 'Rooms', 'Pool', 'Dining', 'Spa', 'Exterior', 'Interior', 'Facilities'];
