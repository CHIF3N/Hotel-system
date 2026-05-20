import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
