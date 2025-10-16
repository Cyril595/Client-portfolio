import React, { useState } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import Video from './Video';

const Card = ({ video, title, cover }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
  };

  const handleClose = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="text-center flex-shrink-0 h-[400px] w-[400px] cursor-pointer group font-poppins">
      <div className="relative">
        {/* Cover Image */}
        <img 
          src={cover} 
          alt={title}
          className="h-[300px] w-[400px] object-cover rounded-lg
                     transition-all duration-300 ease-in-out
                     brightness-50 group-hover:border-4 group-hover:border-blue-600
                      active:border-4 active:border-blue-600"
        />

        {/* Play Button */}
        <FaPlayCircle 
          onClick={handleVideoOpen} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     text-white text-7xl opacity-75 group-hover:opacity-100 active:opacity-100"
        />
      </div>

      {/* Title */}
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>

      {/* Video Modal */}
      {isVideoOpen && <Video video={video} onClose={handleClose} />}
    </div>
  );
}

export default Card;
