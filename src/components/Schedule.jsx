import { motion } from 'framer-motion';
import { FiMapPin, FiClock } from 'react-icons/fi';

const Schedule = () => {
  const events = [
    {
      id: 1,
      date: '20/10',
      title: 'Acoustic Night',
      venue: 'Đại học UEH',
      time: '16:30 - 18:00',
      status: 'Sắp diễn ra'
    }
    /*{
      id: 2,
      date: '31/10',
      title: 'Halloween Party',
      venue: 'Skybar 360, Quận 3',
      time: '20:00 - 23:00',
      status: 'Kín chỗ'
    },
    {
      id: 3,
      date: '05/11',
      title: 'Soft Ballad Evening',
      venue: 'Gác Hoa Cafe, Phú Nhuận',
      time: '19:00 - 21:00',
      status: 'Sắp diễn ra'
    } */
  ];

  return (
    <section id="schedule" className="py-24 bg-dark">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm text-accent uppercase tracking-widest font-semibold mb-2">Lịch Diễn</h2>
            <h3 className="text-4xl font-bold text-white">Sự Kiện <span className="italic font-light">Sắp Tới</span></h3>
          </div>
          <a href="https://www.facebook.com/bannhacdong" className="hidden md:inline-block text-accent hover:text-white transition-colors underline underline-offset-4">
            Theo dõi thêm trên Fanpage
          </a>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-darker border border-gray-800 hover:border-accent p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center transition-all duration-300"
            >
              <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <div className="bg-accent/10 text-accent p-4 rounded-xl min-w-[90px] text-center mr-6 border border-accent/20 group-hover:bg-accent group-hover:text-dark transition-colors">
                  <span className="block text-2xl font-bold">{event.date.split('/')[0]}</span>
                  <span className="block text-sm uppercase">Tháng {event.date.split('/')[1]}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                  <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm text-gray-400">
                    <span className="flex items-center mb-1 sm:mb-0"><FiMapPin className="mr-2" /> {event.venue}</span>
                    <span className="flex items-center"><FiClock className="mr-2" /> {event.time}</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex justify-end">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${event.status === 'Kín chỗ' ? 'border-red-500/30 text-red-400' : 'border-accent/30 text-accent'}`}>
                  {event.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
