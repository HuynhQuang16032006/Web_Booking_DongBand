import { motion } from 'framer-motion';
import backImage from '../assets/back.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backImage}
          alt="Band performing live"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darker/60 via-darker/80 to-darker"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Mang âm nhạc <span className="text-accent italic">chân thật</span><br />đến mọi không gian
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light"
        >
          Trải nghiệm âm nhạc live đẳng cấp với Đọng Band. Từ những đêm nhạc Acoustic nhẹ nhàng đến các sự kiện doanh nghiệp hoành tráng.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#booking" className="bg-accent hover:bg-accentHover text-dark px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(207,166,99,0.3)] hover:shadow-[0_0_30px_rgba(207,166,99,0.5)]">
            Liên hệ Book Lịch
          </a>
          <a href="#services" className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
            Xem Dịch Vụ & Bảng Giá
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-gray-400 hover:text-accent transition-colors flex flex-col items-center">
          <span className="text-sm font-medium mb-2 tracking-widest uppercase">Khám phá</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
