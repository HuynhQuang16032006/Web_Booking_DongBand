import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Thành viên', href: '#members' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Thư viện', href: '#media' },
    { name: 'Lịch diễn', href: '#schedule' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          ĐỌNG <span className="text-accent">BAND</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm font-medium">
              {link.name}
            </a>
          ))}
          <a href="#booking" className="bg-accent hover:bg-accentHover text-dark font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Book Lịch Ngay
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-lg border-t border-gray-800 flex flex-col items-center py-6 space-y-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-accent transition-colors text-lg font-medium">
              {link.name}
            </a>
          ))}
          <a href="#booking" onClick={() => setIsOpen(false)} className="bg-accent text-dark font-semibold py-3 px-8 rounded-full">
            Book Lịch Ngay
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
