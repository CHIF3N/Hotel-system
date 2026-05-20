import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, Users, Maximize2, BedDouble, Eye, ArrowRight } from 'lucide-react';
import { getRoomBySlug, rooms } from '../data/rooms';
import { FadeIn } from '../components/ui/FadeIn';
import { RoomCard } from '../components/ui/RoomCard';
import { CTASection } from '../components/sections/CTASection';

export const RoomDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const room = getRoomBySlug(slug || '');
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (room) document.title = `${room.name} — LODR Hotel`;
    setActiveImg(0);
  }, [room, slug]);

  if (!room) return <Navigate to="/rooms" replace />;

  const others = rooms.filter(r => r.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Gallery Hero */}
      <section className="pt-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
          <FadeIn>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-[#707070] text-xs tracking-wider uppercase hover:text-[#C9A87C] transition-colors mb-8"
            >
              <ArrowLeft size={12} />
              All Rooms
            </Link>
          </FadeIn>
        </div>

        {/* Main Image */}
        <div className="relative overflow-hidden h-[60vh] min-h-[400px]">
          <img
            src={room.gallery[activeImg] || room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

          {/* Bottom info */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="max-w-7xl mx-auto">
              <span className="text-[#C9A87C] text-xs tracking-[0.3em] uppercase">
                From {room.priceDisplay} / night
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white mt-2">
                {room.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {room.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`flex-shrink-0 w-20 h-14 overflow-hidden border-2 transition-all ${
                  activeImg === i ? 'border-[#C9A87C]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${room.name} ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              {/* Quick stats */}
              <FadeIn>
                <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-[#1E1E1E]">
                  {[
                    { Icon: Maximize2, label: 'Room Size', value: room.size },
                    { Icon: Users, label: 'Guests', value: `Up to ${room.capacity}` },
                    { Icon: BedDouble, label: 'Bed Type', value: room.beds },
                    { Icon: Eye, label: 'View', value: room.view },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <Icon size={15} className="text-[#C9A87C]" />
                      <div>
                        <div className="text-[#555] text-xs">{label}</div>
                        <div className="text-white text-sm mt-0.5">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="font-display text-2xl text-white font-light mb-6">About This Room</h2>
              </FadeIn>

              <div className="flex flex-col gap-5">
                {room.longDescription.split('\n\n').map((para, i) => (
                  <FadeIn key={i} delay={0.1 + i * 0.08}>
                    <p className="text-[#A0A0A0] text-sm leading-8">{para}</p>
                  </FadeIn>
                ))}
              </div>

              {/* Amenities */}
              <FadeIn delay={0.3}>
                <div className="mt-12">
                  <h3 className="font-display text-xl text-white font-light mb-6">Room Amenities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {room.amenities.map(a => (
                      <div key={a} className="flex items-center gap-3 py-2">
                        <span className="w-4 h-4 bg-[#C9A87C]/15 flex items-center justify-center flex-shrink-0">
                          <Check size={9} className="text-[#C9A87C]" />
                        </span>
                        <span className="text-[#A0A0A0] text-sm">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn direction="left">
                <div className="border border-[#282828] p-7 sticky top-28">
                  <div className="mb-6 pb-6 border-b border-[#1E1E1E]">
                    <span className="text-[#555] text-xs tracking-wider uppercase">Starting from</span>
                    <div className="font-display text-4xl text-white font-light mt-2">
                      {room.priceDisplay}
                      <span className="text-[#707070] text-base ml-2">/night</span>
                    </div>
                  </div>

                  <div className="text-[#C9A87C] text-xs mb-4">{room.tagline}</div>

                  <Link
                    to="/contact-us"
                    className="flex items-center justify-center gap-3 bg-[#C9A87C] text-[#0A0A0A] py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#E0CBB0] transition-colors w-full mb-3"
                  >
                    Book This Room
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    to="/contact-us"
                    className="flex items-center justify-center gap-3 border border-[#282828] text-[#A0A0A0] py-4 text-xs tracking-[0.2em] uppercase hover:border-[#C9A87C] hover:text-[#C9A87C] transition-all w-full"
                  >
                    Send Enquiry
                  </Link>

                  <p className="mt-5 text-[#555] text-xs text-center leading-5">
                    Free cancellation up to 48h before check-in
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl text-white font-light mb-10">Other Rooms You May Like</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((r, i) => (
              <RoomCard key={r.id} room={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
