import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from '../ui/SocialIcons';

const quickLinks = [
  { label: 'About Us', path: '/about-us' },
  { label: 'Our Rooms', path: '/rooms' },
  { label: 'Our Services', path: '/our-services' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact-us' },
];

const roomLinks = [
  { label: 'Serenity Suite', path: '/rooms/serenity-suite' },
  { label: 'Sunlight Terrace Villa', path: '/rooms/sunlight-terrace-villa' },
  { label: 'Tropical Zen Retreat', path: '/rooms/tropical-zen-retreat' },
  { label: 'LODR Signature', path: '/rooms/lodr-signature' },
  { label: 'Terrace Room', path: '/rooms/terrace-room' },
  { label: 'Deluxe Room', path: '/rooms/deluxe-room' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-display text-3xl font-bold tracking-[0.3em] text-white hover:text-[#C9A87C] transition-colors"
            >
              LODR
            </Link>
            <p className="mt-5 text-[#A0A0A0] text-sm leading-7 max-w-xs">
              Where luxury meets authenticity. Experience the pinnacle of hospitality in an environment crafted for your absolute comfort and delight.
            </p>
            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              {[
                { Icon: InstagramIcon, href: '#', label: 'Instagram' },
                { Icon: FacebookIcon, href: '#', label: 'Facebook' },
                { Icon: TwitterIcon, href: '#', label: 'Twitter' },
                { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-[#282828] flex items-center justify-center text-[#A0A0A0] hover:border-[#C9A87C] hover:text-[#C9A87C] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#A0A0A0] text-sm hover:text-[#C9A87C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h3 className="font-display text-lg font-medium text-white mb-6">Our Rooms</h3>
            <ul className="flex flex-col gap-3">
              {roomLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#A0A0A0] text-sm hover:text-[#C9A87C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-medium text-white mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C9A87C] mt-0.5 flex-shrink-0" />
                <span className="text-[#A0A0A0] text-sm leading-6">
                  123 Luxury Boulevard<br />
                  Paradise Bay, PB 10001<br />
                  Mediterranean Coast
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C9A87C] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-[#A0A0A0] text-sm hover:text-[#C9A87C] transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C9A87C] flex-shrink-0" />
                <a href="mailto:hello@lodrhotel.com" className="text-[#A0A0A0] text-sm hover:text-[#C9A87C] transition-colors">
                  hello@lodrhotel.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</p>
              <form className="flex gap-0" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-[#141414] border border-[#282828] px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C9A87C] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#C9A87C] text-[#0A0A0A] px-5 py-3 text-xs font-bold tracking-wider uppercase hover:bg-[#E0CBB0] transition-colors flex-shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs tracking-wider">
            © {new Date().getFullYear()} LODR Hotel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a
                key={item}
                href="#"
                className="text-[#555] text-xs tracking-wider hover:text-[#C9A87C] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
