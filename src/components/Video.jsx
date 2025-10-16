const Video = ({ video, onClose }) => {
  // Convert youtu.be/xxx to embed URL with modest branding
  const videoId = video.split('/').pop(); // Extract video ID from youtu.be/xxx
  const embedUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&showinfo=0`;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full h-full max-w-3xl max-h-[80vh]">
        <button 
          className="absolute -top-10 right-0 text-white text-3xl cursor-pointer z-50 bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center" 
          onClick={onClose}>
          X
        </button>
        
        <iframe
          src={embedUrl}
          title="Video player"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;