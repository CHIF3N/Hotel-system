import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { OurTeam } from './pages/OurTeam';
import { OurServices } from './pages/OurServices';
import { Rooms } from './pages/Rooms';
import { Gallery } from './pages/Gallery';
import { Pricing } from './pages/Pricing';
import { Accomodation } from './pages/Accomodation';
import { Reviews } from './pages/Reviews';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { TeamMemberPage } from './pages/TeamMemberPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { BlogPostPage } from './pages/BlogPostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Team Member Pages */}
          <Route path="/our-team/anna-miller" element={<TeamMemberPage />} />
          <Route path="/our-team/emily-davis" element={<TeamMemberPage />} />
          <Route path="/our-team/james-carter" element={<TeamMemberPage />} />
          <Route path="/our-team/sophie-lee" element={<TeamMemberPage />} />
          <Route path="/our-team/maria-silva" element={<TeamMemberPage />} />
          <Route path="/our-team/leo-dubois" element={<TeamMemberPage />} />
          <Route path="/our-team/daniel-reyes" element={<TeamMemberPage />} />
          <Route path="/our-team/emily-carter" element={<TeamMemberPage />} />

          {/* Service Pages */}
          <Route path="/our-services/swimming-pool" element={<ServiceDetailPage />} />
          <Route path="/our-services/game-center" element={<ServiceDetailPage />} />
          <Route path="/our-services/fitness-area" element={<ServiceDetailPage />} />
          <Route path="/our-services/transfers" element={<ServiceDetailPage />} />
          <Route path="/our-services/parking-space" element={<ServiceDetailPage />} />
          <Route path="/our-services/kids-room" element={<ServiceDetailPage />} />

          {/* Room Pages */}
          <Route path="/rooms/serenity-suite" element={<RoomDetailPage />} />
          <Route path="/rooms/sunlight-terrace-villa" element={<RoomDetailPage />} />
          <Route path="/rooms/tropical-zen-retreat" element={<RoomDetailPage />} />
          <Route path="/rooms/lodr-signature" element={<RoomDetailPage />} />
          <Route path="/rooms/terrace-room" element={<RoomDetailPage />} />
          <Route path="/rooms/deluxe-room" element={<RoomDetailPage />} />

          {/* Blog Post Pages */}
          <Route path="/blog/top-hotel-amenities-you-won-t-miss" element={<BlogPostPage />} />
          <Route path="/blog/how-to-find-budget-friendly-hotels" element={<BlogPostPage />} />
          <Route path="/blog/what-to-pack-for-a-hotel-stay" element={<BlogPostPage />} />
          <Route path="/blog/5-things-to-look-for-in-a-hotel-stay" element={<BlogPostPage />} />
          <Route path="/blog/hotel-room-vs-airbnb-what-s-better" element={<BlogPostPage />} />
          <Route path="/blog/top-tips-for-choosing-the-great-hotel" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
