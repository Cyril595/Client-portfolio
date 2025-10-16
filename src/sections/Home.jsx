import React from 'react';

const Home = ({ myRef }) => {
  return (
    <div
      ref={myRef}
      className="mt-[10%] flex flex-col-reverse md:flex-row items-center justify-center text-white px-10 md:px-15 relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(/Images/1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* LEFT SECTION */}
      <div className="text-center md:text-left md:w-1/2 z-10 relative">
        <div className="inline-block">
          <h1 className="text-lg md:text-xl font-poppins">ABHIGHYAN SAWANT</h1>
           <hr className="mt-1 h-[2px] w-full border-0 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500" />
        </div>
        <h2 className="mt-3 font-poppins text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-100">
          PROFESSIONAL <br /> VIDEO EDITOR
        </h2>
        <h1 className="mt-4 text-base md:text-lg lg:text-xl">
          Making Your Videos Look More Cool
        </h1>
        <button className="mt-6 font-orbitron border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-black cursor-pointer text-lg md:text-xl transition duration-300">
          LET'S TALK
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0 z-10 relative text-yellow-500">
        <img
          src="/Images/2.svg"
          alt="My image"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Home;