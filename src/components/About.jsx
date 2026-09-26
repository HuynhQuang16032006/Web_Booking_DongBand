import { motion } from 'framer-motion';
import { FiMusic, FiUsers, FiStar, FiCalendar } from 'react-icons/fi';
import aboutImage from '../assets/Main.jpg';

const About = () => {
  const stats = [
    { id: 1, icon: <FiCalendar className="w-6 h-6 text-accent" />, value: '1+', label: 'Năm hoạt động' },
    { id: 2, icon: <FiStar className="w-6 h-6 text-accent" />, value: '50+', label: 'Shows đã diễn' },
    { id: 3, icon: <FiUsers className="w-6 h-6 text-accent" />, value: '10', label: 'Thành viên' },
    { id: 4, icon: <FiMusic className="w-6 h-6 text-accent" />, value: '20+', label: 'Đối tác sự kiện' },
  ];

  return (
    <section id="about" className="py-24 bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="Đọng Band performing"
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -inset-4 border border-accent/30 rounded-2xl z-0 transform translate-x-6 translate-y-6"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-accent uppercase tracking-widest font-semibold mb-2">Về Chúng Tôi</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Câu chuyện của<br /><span className="italic font-light">Đọng Band</span></h3>

            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Được thành lập từ niềm đam mê âm nhạc mãnh liệt, Đọng Band không chỉ là một ban nhạc cover. Chúng tôi là những người kể chuyện qua từng giai điệu, mang đến cảm xúc chân thực và sự kết nối tuyệt vời cho mọi sự kiện.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Phong cách âm nhạc chủ đạo của chúng tôi đa dạng từ <strong className="text-gray-200">Acoustic mộc mạc, Pop Ballad sâu lắng</strong> đến những bản <strong className="text-gray-200">Indie, Rock</strong> đầy lôi cuốn.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map(stat => (
                <div key={stat.id} className="flex flex-col items-start">
                  <div className="bg-darker p-3 rounded-xl mb-3 shadow-inner border border-gray-800">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
