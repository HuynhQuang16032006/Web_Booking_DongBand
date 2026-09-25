import { motion } from 'framer-motion';
import { FiCoffee, FiHeart, FiBriefcase } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FiCoffee className="w-10 h-10" />,
      title: 'Acoustic Cafe',
      desc: 'Biểu diễn định kỳ hàng tuần tại các quán Cafe. Không gian âm nhạc thư giãn, gần gũi.',
      features: ['Thời lượng: 2 - 3 tiếng', 'Đội hình: 5 - 7 thành viên', 'Nhạc nhẹ nhàng, tương tác khán giả']
    },
    {
      id: 2,
      icon: <FiHeart className="w-10 h-10" />,
      title: 'Event Các Trường Đại Học',
      desc: 'Góp phần làm cho sự kiện thêm sôi nổi, khuấy động không khí chương trình.',
      features: ['Thời lượng: Theo sự kiện', 'Đội hình: 7 - 9 thành viên', 'List nhạc theo yêu cầu riêng']
    },
    {
      id: 3,
      icon: <FiBriefcase className="w-10 h-10" />,
      title: 'Sự Kiện Doanh Nghiệp',
      desc: 'Year End Party, Gala Dinner, Khai trương. Âm nhạc bùng nổ, chuyên nghiệp, tạo dấu ấn thương hiệu.',
      features: ['Thời lượng: Theo kịch bản', 'Đội hình: Full band', 'Âm thanh, ánh sáng chuyên nghiệp']
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm text-accent uppercase tracking-widest font-semibold mb-2">Dịch Vụ & Bảng Giá</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Các Gói <span className="italic font-light">Booking</span></h3>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-darker border border-gray-800 hover:border-accent/50 p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(207,166,99,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 text-accent transform scale-150 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <div className="text-accent mb-6">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-6 min-h-[80px]">{service.desc}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feat, i) => (
                  <li key={i} className="text-gray-300 flex items-center text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a href="#booking" className="inline-block w-full text-center border border-gray-700 hover:border-accent text-white hover:text-accent font-medium py-3 rounded-xl transition-colors">
                Nhận báo giá
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
