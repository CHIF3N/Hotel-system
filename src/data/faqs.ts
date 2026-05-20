export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What time is check-in and check-out?',
    answer: 'Standard check-in time is 3:00 PM and check-out is 12:00 PM (noon). Early check-in and late check-out can often be arranged subject to availability — please contact our front desk team in advance. Guests of LODR Signature and Sunlight Terrace Villa receive flexible check-in times as a standard benefit.',
    category: 'Stay',
  },
  {
    id: '2',
    question: 'Is breakfast included in the room rate?',
    answer: 'Breakfast is available as an optional add-on to all room rates and can be added at the time of booking or at the hotel. We offer a sumptuous breakfast buffet featuring both local specialties and international favorites, served daily from 7:00 AM to 10:30 AM. Guests of the LODR Signature suite receive daily breakfast as a complimentary benefit.',
    category: 'Dining',
  },
  {
    id: '3',
    question: 'Do you have a pool, and when is it open?',
    answer: 'Yes — our stunning infinity pool is one of our most celebrated features. The pool is open daily from 7:00 AM to 10:00 PM. Poolside service including food, drinks, towels, and sunscreen is available from 8:00 AM to 9:00 PM. Private poolside cabanas can be reserved in advance for an exclusive experience.',
    category: 'Facilities',
  },
  {
    id: '4',
    question: 'Is parking available at the hotel?',
    answer: 'Yes, we offer secure covered parking with 24/7 security surveillance. Valet parking is available from the main entrance. Self-parking and valet options are both available. EV charging stations are also provided. Parking fees apply and can be added to your room account.',
    category: 'Facilities',
  },
  {
    id: '5',
    question: 'Are pets allowed?',
    answer: 'We welcome well-behaved pets in selected room types. A pet fee applies per night, and we ask that all guests with pets inform us at the time of booking. We provide pet beds, bowls, and a welcome treat for our four-legged guests. Please note that pets are not permitted in restaurant or spa areas.',
    category: 'Stay',
  },
  {
    id: '6',
    question: 'What is your cancellation policy?',
    answer: 'Our standard cancellation policy allows free cancellation up to 48 hours before your arrival date. Cancellations within 48 hours of arrival may be subject to a one-night cancellation fee. For bookings made during special event periods or with non-refundable rates, different terms apply. Please check your booking confirmation for the specific terms applicable to your reservation.',
    category: 'Booking',
  },
  {
    id: '7',
    question: 'Do you offer airport transfers?',
    answer: 'Yes, we offer seamless luxury airport transfer services. Our professional chauffeurs will meet you at the arrivals hall with a personalized sign and assist with your luggage. Transfers can be arranged for arrivals and departures. Please book your transfer at least 24 hours in advance through our concierge team or the transfers page on our website.',
    category: 'Transport',
  },
  {
    id: '8',
    question: 'Is Wi-Fi available?',
    answer: 'Complimentary high-speed Wi-Fi is available throughout all areas of the hotel, including guest rooms, restaurants, spa, pool area, and meeting rooms. Our network provides speeds suitable for video streaming and remote work. Simply ask at reception for the current Wi-Fi credentials upon check-in.',
    category: 'Facilities',
  },
  {
    id: '9',
    question: 'Can you accommodate dietary requirements?',
    answer: 'Absolutely. Our culinary team is experienced in accommodating all dietary requirements including vegetarian, vegan, gluten-free, nut-free, and other allergies and intolerances. We ask guests to inform us of any dietary requirements at the time of booking or at least 24 hours before dining with us, so our kitchen team can ensure the best possible experience.',
    category: 'Dining',
  },
  {
    id: '10',
    question: 'What spa treatments do you offer?',
    answer: 'Our award-winning spa offers a comprehensive menu of treatments including massages, facials, body wraps, hydrotherapy, and our exclusive LODR signature treatments inspired by ancient healing traditions. We also offer wellness programs that combine multiple treatments over your stay. Private spa suites can be reserved for couples. Full details are available on our spa menu, and reservations can be made through the concierge.',
    category: 'Spa',
  },
  {
    id: '11',
    question: 'Are there facilities for children?',
    answer: 'LODR is a family-friendly hotel and we warmly welcome guests of all ages. Our Kids Room offers supervised activities for children aged 3-12, operated daily from 8:00 AM to 8:00 PM. The pool has a dedicated shallow area for younger children. Our culinary team prepares a special kids menu for all dining venues, and child-friendly room setups including cribs and extra beds can be arranged upon request.',
    category: 'Family',
  },
  {
    id: '12',
    question: 'Do you host weddings and private events?',
    answer: 'We would be delighted to host your special occasion at LODR. Our events team can coordinate everything from intimate dinners for 10 to grand celebrations for 300 guests. We have several stunning event spaces including a ballroom, garden terrace, and private dining rooms. Please contact our events team for a personalized consultation and to receive our events brochure.',
    category: 'Events',
  },
];

export const faqCategories = ['All', 'Stay', 'Dining', 'Facilities', 'Booking', 'Transport', 'Spa', 'Family', 'Events'];
