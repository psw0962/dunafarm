import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Facility from './components/Facility';
import Strength from './components/Strength';
import Process from './components/Process';
import Quality from './components/Quality';
import Product from './components/Product';
import Business from './components/Business';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Facility />
      <Strength />
      <Process />
      <Quality />
      <Product />
      <Business />
      <Contact />
    </>
  );
}

export default App;
