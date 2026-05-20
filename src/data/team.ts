export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  department: string;
  bio: string;
  longBio: string;
  image: string;
  quote: string;
  skills: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Anna Miller',
    slug: 'anna-miller',
    role: 'General Manager',
    department: 'Management',
    bio: 'With over 20 years in luxury hospitality, Anna leads LODR with an unwavering commitment to excellence and guest satisfaction.',
    longBio: `Anna Miller brings over two decades of distinguished leadership in luxury hospitality to her role as General Manager at LODR. Born and raised in Vienna, Austria, Anna developed her passion for hospitality while working summers at her family's boutique hotel in the Austrian Alps.\n\nAfter completing her Master's degree in Hospitality Management from Cornell University, Anna worked her way through some of the world's most prestigious hotel brands, holding senior positions across Europe, Asia, and the Americas. Her philosophy centers on the belief that true luxury is about creating genuine human connections, not just providing opulent surroundings.\n\nUnder Anna's leadership, LODR has received numerous industry accolades and consistently earns the highest guest satisfaction scores in its category. She is particularly passionate about sustainable hospitality practices and has led the hotel's transition to carbon-neutral operations.`,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    quote: 'True luxury is not measured by what we provide, but by how we make our guests feel.',
    skills: ['Strategic Leadership', 'Revenue Management', 'Team Development', 'Sustainable Operations'],
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Emily Davis',
    slug: 'emily-davis',
    role: 'Front Desk Manager',
    department: 'Guest Services',
    bio: 'Emily ensures every guest receives a warm welcome and personalized experience from the moment they arrive.',
    longBio: `Emily Davis is the heartbeat of LODR's front-of-house operations, bringing infectious energy and genuine warmth to every guest interaction. With a background in psychology and hotel management, Emily has an extraordinary ability to anticipate guest needs and create personalized experiences that exceed expectations.\n\nAfter graduating with honors from the École hôtelière de Lausanne, Emily refined her skills at luxury properties in London, Dubai, and Singapore before joining the LODR family five years ago. Her multilingual skills — she speaks five languages fluently — allow her to connect with guests from around the world on a personal level.\n\nEmily has implemented several innovative guest experience programs at LODR, including the personalized welcome amenity system and the pre-arrival preference survey, both of which have significantly elevated guest satisfaction scores.`,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    quote: 'Every guest deserves to feel like they are the most important person in the room.',
    skills: ['Guest Relations', 'Multilingual Communication', 'Problem Solving', 'Team Management'],
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '3',
    name: 'James Carter',
    slug: 'james-carter',
    role: 'Executive Chef',
    department: 'Food & Beverage',
    bio: 'A Michelin-starred chef, James crafts extraordinary culinary experiences that celebrate local ingredients with global technique.',
    longBio: `James Carter is one of the most celebrated chefs in the luxury hotel industry, bringing two Michelin stars and 25 years of culinary mastery to LODR's kitchens. Born in New Orleans, James discovered his passion for cooking at the age of eight while helping his grandmother prepare Sunday dinners for the family.\n\nAfter training under legendary chefs in Paris, Tokyo, and Barcelona, James developed a unique culinary philosophy that honors local ingredients and cultural traditions while incorporating innovative global techniques. His menus change seasonally to reflect the finest available produce, and he maintains direct relationships with local farmers, fishermen, and artisan producers.\n\nAt LODR, James oversees all food and beverage operations, from the signature restaurant and poolside café to in-room dining and private event catering. He also leads regular cooking masterclasses for guests who wish to learn from one of the industry's finest culinary minds.`,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'Great food is not just about ingredients — it is about the love and intention we put into every dish.',
    skills: ['Michelin Cuisine', 'Menu Development', 'Kitchen Management', 'Culinary Innovation'],
    social: { linkedin: '#', instagram: '#', twitter: '#' },
  },
  {
    id: '4',
    name: 'Sophie Lee',
    slug: 'sophie-lee',
    role: 'Spa Director',
    department: 'Wellness',
    bio: "Sophie's holistic approach to wellness has transformed LODR's spa into an award-winning sanctuary of restoration.",
    longBio: `Sophie Lee is a visionary wellness expert who has elevated LODR's spa into one of the most highly regarded wellness destinations in the region. With formal training in traditional Chinese medicine, Ayurveda, and modern therapeutic techniques, Sophie offers a uniquely comprehensive approach to holistic wellbeing.\n\nSophie spent years training at healing centers in Bali, Thailand, India, and Switzerland before establishing herself as a leader in luxury wellness hospitality. She believes that true wellness encompasses the mind, body, and spirit, and this philosophy is reflected in every treatment and program offered at LODR's spa.\n\nUnder Sophie's direction, the spa has earned recognition from prestigious wellness publications and industry bodies. She has developed several signature treatments exclusive to LODR, drawing on ancient healing traditions and the finest natural ingredients sourced from around the world.`,
    image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=400&q=80',
    quote: 'Wellness is not a destination — it is a continuous journey of self-discovery and renewal.',
    skills: ['Holistic Wellness', 'Treatment Development', 'Staff Training', 'Wellness Programming'],
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '5',
    name: 'Maria Silva',
    slug: 'maria-silva',
    role: 'Housekeeping Manager',
    department: 'Housekeeping',
    bio: 'Maria leads our housekeeping team with meticulous attention to detail, ensuring every room is a flawless sanctuary.',
    longBio: `Maria Silva is the guardian of LODR's impeccable standards, overseeing a dedicated team of 45 housekeeping professionals who maintain the highest levels of cleanliness, comfort, and attention to detail throughout the property.\n\nHailing from Porto, Portugal, Maria brings 18 years of experience in luxury hospitality to her role. Her career began at one of Lisbon's most prestigious heritage hotels, where she learned the art of combining tradition with modern efficiency. Her passion for creating perfect spaces stems from her belief that a beautifully maintained room is fundamental to the guest experience.\n\nMaria has implemented several innovative housekeeping programs at LODR, including eco-friendly cleaning protocols, personalized room setup preferences for returning guests, and a comprehensive training program that has won industry recognition. Her team's turndown service, complete with handwritten notes and carefully selected bedtime amenities, is consistently cited by guests as a highlight of their stay.`,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    quote: 'A perfectly prepared room is our first gift to every guest — it sets the tone for the entire stay.',
    skills: ['Operations Management', 'Quality Control', 'Team Leadership', 'Sustainability Practices'],
    social: { linkedin: '#' },
  },
  {
    id: '6',
    name: 'Leo Dubois',
    slug: 'leo-dubois',
    role: 'Head Concierge',
    department: 'Guest Services',
    bio: 'Leo is LODR\'s master of possibilities, with an extraordinary network and talent for fulfilling every guest request.',
    longBio: `Leo Dubois is a legend in the concierge world, renowned for his seemingly impossible ability to make any guest wish a reality. A proud member of Les Clefs d'Or — the prestigious international concierge society — Leo brings 22 years of experience and an encyclopedic knowledge of the region to his role as Head Concierge at LODR.\n\nGrowing up in Lyon, France, Leo was fascinated by the art of hospitality from an early age. After studying hospitality in Paris, he built his career at iconic hotels across Europe before settling at LODR, where he has been a cornerstone of the guest experience for over a decade.\n\nLeo's extraordinary network of connections allows him to secure reservations at fully-booked restaurants, arrange private tours of normally closed attractions, and fulfill requests that others might consider impossible. His dedication to guest satisfaction is legendary — there are countless stories of Leo going above and beyond, from organizing surprise proposals to sourcing rare products from across the globe.`,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'There is no such thing as impossible — there is only a request we have not yet found the right solution for.',
    skills: ['Local Expertise', 'Guest Relations', 'Network Management', 'Problem Solving'],
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '7',
    name: 'Daniel Reyes',
    slug: 'daniel-reyes',
    role: 'Events Coordinator',
    department: 'Events',
    bio: 'Daniel transforms visions into unforgettable events, from intimate gatherings to grand celebrations.',
    longBio: `Daniel Reyes is the creative force behind LODR's celebrated events, bringing imagination, precision, and passion to every occasion he coordinates. Whether orchestrating an intimate birthday dinner or a grand corporate gala for 500 guests, Daniel approaches each event with the same level of dedication and creative energy.\n\nA native of Barcelona, Daniel studied event management and design in Madrid before building his career at some of Europe's most prestigious venues. His eye for design, deep understanding of logistics, and warm client relationships have established him as one of the most sought-after events professionals in the industry.\n\nAt LODR, Daniel manages a full calendar of events including weddings, corporate retreats, product launches, and cultural celebrations. His team has access to an extensive network of preferred vendors, florists, entertainment acts, and specialists who help bring even the most ambitious event visions to life.`,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    quote: 'Every event tells a story — my job is to make sure it is one that will be remembered forever.',
    skills: ['Event Design', 'Vendor Management', 'Client Relations', 'Creative Direction'],
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '8',
    name: 'Emily Carter',
    slug: 'emily-carter',
    role: 'Marketing Director',
    department: 'Marketing',
    bio: 'Emily crafts the LODR brand story, connecting our unique story with guests around the world through compelling campaigns.',
    longBio: `Emily Carter is the storyteller behind the LODR brand, building authentic connections with travelers worldwide through compelling marketing strategies and beautifully crafted content. With a background in luxury brand management and digital marketing, Emily has been instrumental in establishing LODR's position as one of the world's most desirable hotel destinations.\n\nBefore joining LODR, Emily held senior marketing roles at luxury brands in New York, London, and Tokyo, where she developed a deep understanding of what resonates with discerning travelers. She holds a Masters degree in Marketing and Communications from NYU and continues to be a frequent speaker at industry conferences.\n\nUnder Emily's leadership, LODR's social media presence has grown exponentially, and the hotel's brand has received recognition in numerous prestigious travel publications. She is particularly passionate about sustainable luxury marketing and ensuring that LODR's environmental and social initiatives are communicated authentically to the world.`,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    quote: 'Great marketing is not about selling a product — it is about sharing a feeling that people want to be part of.',
    skills: ['Brand Strategy', 'Digital Marketing', 'Content Creation', 'Campaign Management'],
    social: { linkedin: '#', twitter: '#', instagram: '#' },
  },
];

export const getMemberBySlug = (slug: string): TeamMember | undefined =>
  team.find(m => m.slug === slug);
