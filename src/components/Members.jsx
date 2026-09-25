import { motion } from 'framer-motion';
import QuỳnhAnh from '../assets/Quỳnh Anh.png'
import HuỳnhQuang from '../assets/Huỳnh Quang.png'
import HuyKhải from '../assets/Huy Khải.png'
import NgọcSang from '../assets/Ngọc Sang.png'
import TuệSan from '../assets/Tuệ San.png'
import HoàngPhương from '../assets/Hoàng Phương.png'
import MaiThành from '../assets/Mai Thành.png'
import VănAn from '../assets/Văn An.png'
import TuấnHưng from '../assets/Tuấn Hưng.png'
import joke from '../assets/joke.jpg'


const Members = () => {
  const members = [
    {
      id: 1,
      name: 'Quỳnh Anh',
      role: '🎤 Main Vocalist',
      image: QuỳnhAnh,
      desc: 'Giọng ca đầy nội lực, truyền cảm mang đến màu sắc riêng cho từng ca khúc.'
    },
    {
      id: 2,
      name: 'Huỳnh Quang',
      role: '🥁 Drummer/Cajon',
      image: HuỳnhQuang,
      desc: 'Người giữ nhịp cho mọi cảm xúc. Đánh trống không chỉ là tempo, mà là cách kể chuyện bằng nhịp.'
    },
    {
      id: 3,
      name: 'Huy Khải',
      role: '🎹 Keyboardist/Bassist',
      image: HuyKhải,
      desc: 'Người thêm màu sắc hiện đại cho band, giúp âm nhạc của Đọng không chỉ mộc mà còn có chiều sâu.'
    },
    {
      id: 4,
      name: 'Ngọc Sang',
      role: '🎸 Guitarist',
      image: NgọcSang,
      desc: 'Nhẹ nhàng nhưng có chiều sâu. Những đoạn lead và riff luôn là thứ khiến người nghe phải “dừng lại một chút”'
    },
    {
      id: 5,
      name: 'Hoàng Phương',
      role: '🎸 Guitarist',
      image: HoàngPhương,
      desc: 'Những giai điệu bay bổng, những cú riff đầy cảm xúc và một chút “cháy” rất riêng trên sân khấu.'
    },
    {
      id: 6,
      name: 'Tuệ San',
      role: '🎸 Bassist',
      image: TuệSan,
      desc: 'Bass là phần nền khiến mọi thứ trở nên đầy đặn và có hồn.'
    },
    {
      id: 7,
      name: 'Mai Thành',
      role: '🎹 Pianist',
      image: MaiThành,
      desc: 'Chất liệu tạo nên không gian. Từ chill acoustic đến build up cảm xúc, tất cả đều nằm trong từng phím đàn.'
    },
    {
      id: 8,
      name: 'Văn An',
      role: '🎤 Vocalist',
      image: VănAn,
      desc: 'Năng lượng bùng nổ, phong thái tự tin, luôn biết cách khuấy động sân khấu.'
    },
    {
      id: 9,
      name: 'Xuân Anh',
      role: '🎤 Main Vocalist',
      image: joke,
      desc: 'Giọng hát ấm áp, cuốn hút, càng hát càng khiến người nghe muốn đắm chìm.'
    },
    {
      id: 10,
      name: 'Tuấn Hưng',
      role: '🎤 Vocalist',
      image: TuấnHưng,
      desc: 'Chất giọng cá tính, linh hoạt, mang đến một màu sắc rất riêng.'
    }
  ];

  return (
    <section id="members" className="py-24 bg-darker">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm text-accent uppercase tracking-widest font-semibold mb-2">Đội Hình</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Các Thành Viên Của <span className="italic font-light">Band</span></h3>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-0 opacity-100 md:grayscale md:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 md:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-accent text-sm font-semibold mb-1 uppercase tracking-wider">{member.role}</p>
                  <h4 className="text-2xl font-bold text-white">{member.name}</h4>
                </div>
              </div>
              <p className="text-gray-400 px-2 group-hover:text-gray-300 transition-colors">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
