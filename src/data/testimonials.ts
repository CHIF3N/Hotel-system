export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  date: string;
  stayType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Charlotte Williams',
    location: 'London, UK',
    rating: 5,
    text: 'An absolutely flawless experience from start to finish. The staff anticipated every need before we even expressed it. The Serenity Suite was breathtaking — we never wanted to leave. LODR has set a new standard for what luxury hospitality should look and feel like.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    date: 'March 2024',
    stayType: 'Serenity Suite',
  },
  {
    id: '2',
    name: 'James Thornton',
    location: 'New York, USA',
    rating: 5,
    text: 'I travel extensively for work and have stayed at luxury hotels on every continent. LODR is genuinely one of the finest I have ever experienced. The attention to detail, the quality of the food, and above all the warmth of every team member made this stay unforgettable.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    date: 'February 2024',
    stayType: 'Deluxe Room',
  },
  {
    id: '3',
    name: 'Isabelle Moreau',
    location: 'Paris, France',
    rating: 5,
    text: 'We celebrated our 10th anniversary at LODR and the team made it truly magical. The surprise turndown service with rose petals and champagne was a wonderful touch. The Sunlight Terrace Villa exceeded every expectation. We are already planning our return.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    date: 'January 2024',
    stayType: 'Sunlight Terrace Villa',
  },
  {
    id: '4',
    name: 'Marco Bianchi',
    location: 'Milan, Italy',
    rating: 5,
    text: 'The culinary experience alone is worth making this hotel your destination. Chef James Carter is a true genius — every meal was a revelation. Combined with the extraordinary spa and the genuine warmth of the entire team, LODR is simply exceptional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    date: 'December 2023',
    stayType: 'Tropical Zen Retreat',
  },
  {
    id: '5',
    name: 'Sakura Tanaka',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'LODR perfectly balances Eastern philosophy with Western luxury in a way that feels completely authentic. The Tropical Zen Retreat was a sanctuary I have not been able to stop thinking about since returning home. The spa treatments were the finest I have ever experienced.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
    date: 'November 2023',
    stayType: 'Tropical Zen Retreat',
  },
  {
    id: '6',
    name: 'David & Sarah O\'Brien',
    location: 'Dublin, Ireland',
    rating: 5,
    text: 'From the moment Leo at the concierge desk greeted us by name to the warm farewell as we departed, every interaction at LODR felt genuinely caring and personal. This is what hospitality at its finest looks like. We have already booked our return visit.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&q=80',
    date: 'October 2023',
    stayType: 'LODR Signature',
  },
];
