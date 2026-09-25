import { motion } from 'framer-motion';
import { FiSend, FiPhoneCall } from 'react-icons/fi';

const BookingForm = () => {
  return (
    <section id="booking" className="py-24 bg-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm text-accent uppercase tracking-widest font-semibold mb-2">Liên Hệ Đặt Lịch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Bạn Cần Âm Nhạc Cho <br /><span className="italic font-light">Sự Kiện Sắp Tới?</span></h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Hãy để lại thông tin, quản lý của Đọng Band sẽ liên hệ tư vấn kịch bản âm nhạc và báo giá chi tiết phù hợp nhất với không gian của bạn.
            </p>

            <div className="bg-dark p-8 rounded-2xl border border-gray-800 flex items-center space-x-6 mb-8">
              <div className="bg-accent/20 p-4 rounded-full text-accent">
                <FiPhoneCall className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Hotline / Zalo hỗ trợ nhanh 24/7</p>
                <a href="tel:+84937943380" className="text-2xl font-bold text-white hover:text-accent transition-colors">
                  0937 943 380
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Tên của bạn / Tổ chức *</label>
                  <input type="text" className="w-full bg-darker border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Nhập tên..." required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Số điện thoại / Zalo *</label>
                  <input type="tel" className="w-full bg-darker border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Nhập số điện thoại..." required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Loại sự kiện *</label>
                <select className="w-full bg-darker border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option value="">Chọn loại sự kiện</option>
                  <option value="cafe">Acoustic Cafe / Pub</option>
                  <option value="wedding">Event / Show Trường học</option>
                  <option value="corporate">Sự Kiện Doanh Nghiệp / Year End</option>
                  <option value="private">Private Party / Sinh nhật</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Ngày dự kiến</label>
                  <input type="date" className="w-full bg-darker border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Địa điểm diễn ra</label>
                  <input type="text" className="w-full bg-darker border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Quận/Huyện, Thành phố..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Yêu cầu thêm (nếu có)</label>
                <textarea rows="4" className="w-full bg-darker border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Yêu cầu bài hát, dòng nhạc, màu sắc ban nhạc..."></textarea>
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-accentHover text-dark font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-[0_10px_20px_rgba(207,166,99,0.2)]">
                <span>Gửi Yêu Cầu</span>
                <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
