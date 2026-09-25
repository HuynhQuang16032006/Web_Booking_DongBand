import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Services from './components/Services';
import Media from './components/Media';
import Schedule from './components/Schedule';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-darker min-h-screen text-gray-200">
      <Navbar />
      <Hero />
      <About />
      <Members />
      <Services />
      <Media />
      <Schedule />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
