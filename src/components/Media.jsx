import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import CKP_RiseUp_2026 from '../assets/CKP_RiseUp_2026.jpg';
import Band_RiseUp from '../assets/Band_RiseUp.jpg';
import ĐLTT_2026 from '../assets/ĐLTT_2026.JPG';
import UEH_22_4 from '../assets/UEH_22-4.JPG';
import Vocal_DLTT from '../assets/Vocal_DLTT.JPG';
import Solo_Guitar from '../assets/Solo_Guitar.JPG';
const Media = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [playingVideo, setPlayingVideo] = useState(null);

  const photos = [
    CKP_RiseUp_2026,
    Band_RiseUp,
    ĐLTT_2026,
    UEH_22_4,
    Vocal_DLTT,
    Solo_Guitar,
  ];

  const videos = [
    { id: '1', title: 'Chiếc Khăn Piêu', youtubeId: 'lmehbj2FkNQ' },
    { id: '2', title: 'Soạn', youtubeId: '-l-OxiAns7Y' }
  ];

  return (
    <section id="media" className="py-24 bg-darker">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-sm text-accent uppercase tracking-widest font-semibold mb-2">Thư Viện</h2>
          <h3 className="text-4xl font-bold text-white mb-8">Khoảnh Khắc <span className="italic font-light">Tuyệt Vời</span></h3>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'photos' ? 'bg-accent text-dark' : 'bg-transparent text-gray-400 border border-gray-700 hover:text-white hover:border-gray-500'}`}
            >
              Hình Ảnh
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'videos' ? 'bg-accent text-dark' : 'bg-transparent text-gray-400 border border-gray-700 hover:text-white hover:border-gray-500'}`}
            >
              Videos
            </button>
          </div>
        </div>

        {activeTab === 'photos' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {photos.map((photo, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl h-64 cursor-pointer">
                <img
                  src={photo}
                  alt="Band Media"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'videos' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {videos.map((video, i) => {
              const isPlaying = playingVideo === video.id;
              return (
                <div key={i} className="group relative overflow-hidden rounded-xl h-64 border border-gray-800 bg-black">
                  {isPlaying ? (
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                        onError={(e) => { 
                          e.target.onerror = null; 
                          e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`; 
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                      />
                      <div 
                        className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                        onClick={() => setPlayingVideo(video.id)}
                      >
                        <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center text-dark text-2xl group-hover:scale-110 transition-transform duration-300 mb-4 shadow-[0_0_20px_rgba(207,166,99,0.4)]">
                          <FiPlay className="ml-1" />
                        </div>
                        <h4 className="text-white font-semibold text-lg">{video.title}</h4>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Media;
