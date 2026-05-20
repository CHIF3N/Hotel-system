export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  priceNote: string;
  featured: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Essentials',
    tagline: 'Perfect for short stays',
    price: 220,
    priceNote: 'per night',
    featured: false,
    features: [
      'Deluxe Room accommodation',
      'Complimentary Wi-Fi',
      'Access to swimming pool',
      'Fitness area access',
      'Room service (7AM–11PM)',
      'Daily housekeeping',
      'Welcome drink on arrival',
      'City map & concierge tips',
    ],
    ctaText: 'Book Essentials',
  },
  {
    id: '2',
    name: 'Signature',
    tagline: 'Our most popular package',
    price: 380,
    priceNote: 'per night',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Serenity Suite or Terrace Room',
      'Daily breakfast for two',
      'Complimentary Wi-Fi',
      'Full access to all facilities',
      'One spa treatment per person',
      '24-hour room service',
      'Daily housekeeping',
      'Welcome amenity on arrival',
      'Early check-in / Late check-out',
      'Complimentary minibar refresh',
    ],
    ctaText: 'Book Signature',
  },
  {
    id: '3',
    name: 'Prestige',
    tagline: 'The ultimate LODR experience',
    price: 650,
    priceNote: 'per night',
    featured: false,
    features: [
      'LODR Signature or Villa accommodation',
      'Full board (breakfast, lunch & dinner)',
      'Unlimited spa access',
      'Private butler service',
      'Airport transfer (round trip)',
      'Personal concierge service',
      'Daily in-room cocktail hour',
      'Exclusive experiences & excursions',
      'LODR gift set on arrival',
      'VIP late checkout guaranteed',
    ],
    ctaText: 'Book Prestige',
  },
];

export const seasonalRates = [
  { season: 'Low Season', period: 'Jan 1 – Mar 31 & Nov 1 – Dec 14', modifier: 0, label: 'Standard Rate' },
  { season: 'Shoulder Season', period: 'Apr 1 – May 31 & Sep 1 – Oct 31', modifier: 15, label: '+15%' },
  { season: 'High Season', period: 'Jun 1 – Aug 31 & Dec 15 – Dec 31', modifier: 35, label: '+35%' },
];
