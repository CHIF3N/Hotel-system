import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/ui/FadeIn';

const contactInfo = [
  {
    Icon: MapPin,
    label: 'Address',
    value: '123 Luxury Boulevard, Paradise Bay, Mediterranean Coast',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-8900',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'hello@lodrhotel.com',
  },
  {
    Icon: Clock,
    label: 'Reception Hours',
    value: '24 hours a day, 7 days a week',
  },
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: '',
  });

  useEffect(() => {
    document.title = 'Contact Us — LODR Hotel';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our team and let us help craft your perfect LODR experience."
        eyebrow="Get in Touch"
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
        height="md"
      />

      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Column */}
            <div>
              <FadeIn>
                <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">
                  We'd Love to Hear From You
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white mt-5 leading-tight">
                  Let's Plan Your
                  <br />
                  <em className="italic text-[#C9A87C]">Perfect Stay</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-[#A0A0A0] text-sm leading-8">
                  Whether you'd like to make a reservation, ask about our services, or simply want to know more about what makes LODR special, our team is here to help — every hour of every day.
                </p>
              </FadeIn>

              <div className="mt-12 flex flex-col gap-6">
                {contactInfo.map(({ Icon, label, value }, i) => (
                  <FadeIn key={label} delay={0.25 + i * 0.08}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1E1E1E] border border-[#282828] flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-[#C9A87C]" />
                      </div>
                      <div>
                        <div className="text-[#555] text-xs tracking-[0.15em] uppercase mb-1">{label}</div>
                        <div className="text-[#A0A0A0] text-sm">{value}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Map placeholder */}
              <FadeIn delay={0.5} className="mt-12">
                <div className="w-full h-64 bg-[#141414] border border-[#282828] flex items-center justify-center overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=60"
                    alt="LODR Location"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#C9A87C] p-3">
                      <MapPin size={20} className="text-[#0A0A0A]" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form Column */}
            <FadeIn delay={0.1} direction="left">
              <div className="bg-[#141414] border border-[#282828] p-8 lg:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 bg-[#C9A87C] flex items-center justify-center mx-auto mb-6">
                      <Check size={28} className="text-[#0A0A0A]" />
                    </div>
                    <h3 className="font-display text-2xl text-white font-light">Message Sent!</h3>
                    <p className="mt-4 text-[#A0A0A0] text-sm leading-7">
                      Thank you for reaching out. A member of our team will be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 border border-[#C9A87C] text-[#C9A87C] px-6 py-3 text-xs tracking-wider uppercase hover:bg-[#C9A87C] hover:text-[#0A0A0A] transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <span className="text-[#C9A87C] text-xs tracking-[0.2em] uppercase block mb-5">
                        Booking Enquiry
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#555] text-xs tracking-wider uppercase mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full bg-[#0A0A0A] border border-[#282828] px-4 py-3.5 text-sm text-white placeholder-[#383838] focus:outline-none focus:border-[#C9A87C] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#555] text-xs tracking-wider uppercase mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full bg-[#0A0A0A] border border-[#282828] px-4 py-3.5 text-sm text-white placeholder-[#383838] focus:outline-none focus:border-[#C9A87C] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#555] text-xs tracking-wider uppercase mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="w-full bg-[#0A0A0A] border border-[#282828] px-4 py-3.5 text-sm text-white placeholder-[#383838] focus:outline-none focus:border-[#C9A87C] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#555] text-xs tracking-wider uppercase mb-2">Subject</label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-[#282828] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C9A87C] transition-colors appearance-none"
                        >
                          <option value="">Select subject</option>
                          <option value="reservation">Room Reservation</option>
                          <option value="event">Private Event</option>
                          <option value="spa">Spa Booking</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#555] text-xs tracking-wider uppercase mb-2">Check-in</label>
                        <input
                          type="date"
                          name="checkIn"
                          value={form.checkIn}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-[#282828] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C9A87C] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#555] text-xs tracking-wider uppercase mb-2">Check-out</label>
                        <input
                          type="date"
                          name="checkOut"
                          value={form.checkOut}
                          onChange={handleChange}
                          className="w-full bg-[#0A0A0A] border border-[#282828] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C9A87C] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#555] text-xs tracking-wider uppercase mb-2">Number of Guests</label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-[#282828] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C9A87C] transition-colors appearance-none"
                      >
                        {[1,2,3,4,5,6].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#555] text-xs tracking-wider uppercase mb-2">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your perfect stay..."
                        className="w-full bg-[#0A0A0A] border border-[#282828] px-4 py-3.5 text-sm text-white placeholder-[#383838] focus:outline-none focus:border-[#C9A87C] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#C9A87C] text-[#0A0A0A] py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#E0CBB0] transition-colors"
                    >
                      Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};
