import { FiFacebook, FiInstagram, FiYoutube, FiMusic } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-bold tracking-tighter text-white mb-6 block">
              ĐỌNG <span className="text-accent">BAND</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Mang âm nhạc chân thật đến mọi không gian sự kiện. Chuyên biểu diễn Acoustic, Event Trường học, Tiệc Cưới, Sự kiện doanh nghiệp chuyên nghiệp.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bannhacdong" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-dark transition-colors">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-dark transition-colors">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-dark transition-colors">
                <FiYoutube />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-dark transition-colors">
                <FiMusic />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Liên kết</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-accent transition-colors">Về chúng tôi</a></li>
              <li><a href="#members" className="hover:text-accent transition-colors">Thành viên</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Dịch vụ & Báo giá</a></li>
              <li><a href="#media" className="hover:text-accent transition-colors">Thư viện</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Liên hệ</h4>
            <ul className="space-y-3 text-gray-400">
              <li>0937 943 380 (Booking)</li>
              <li>[dongband2025@gmail.com]</li>
              <li>331 Hồng Lạc, Phường Bảy Hiền, TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Đọng Band. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-6 z-50">
        {/* Messenger Button */}
        <a href="https://m.me/bannhacdong" target="_blank" rel="noreferrer" className="relative w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transition-transform animate-bounce">
          <span className="font-bold text-xs absolute -bottom-5 text-gray-300">Mess</span>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.81c52.27-23.31 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path></svg>
        </a>
        
        {/* Zalo Button */}
        <a href="https://zalo.me/0937943380" target="_blank" rel="noreferrer" className="relative w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform animate-bounce">
          <span className="font-bold text-xs absolute -bottom-5 text-gray-300">Zalo</span>
          Z
        </a>
      </div>
    </footer>
  );
};

export default Footer;
