export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    id: '1',
    value: 25,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Over 25 years delivering unparalleled luxury hospitality',
  },
  {
    id: '2',
    value: 50,
    suffix: '+',
    label: 'Luxury Rooms',
    description: 'From cozy deluxe rooms to our extraordinary signature suites',
  },
  {
    id: '3',
    value: 15000,
    suffix: '+',
    label: 'Happy Guests',
    description: 'Guests from around the world who have made LODR their home away from home',
  },
  {
    id: '4',
    value: 18,
    suffix: '+',
    label: 'Industry Awards',
    description: 'Recognized globally for excellence in luxury hospitality',
  },
];
