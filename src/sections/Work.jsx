import React from 'react';
import Card from '../components/Card';

const Work = ({ myRef }) => {
  const arr = [
    { video: "https://youtu.be/3V241-dPrJs", title: "VLOGS", cover: "/Cover/1.jpg" },
    { video: "https://youtu.be/3V241-dPrJs", title: "REELS", cover: "/Cover/2.jpg" },
    { video: "https://youtu.be/3V241-dPrJs", title: "CASHCOW", cover: "/Cover/3.jpg" }
  ];

  return (
    <div
      ref={myRef}
      className="mt-[10%] pt-[5%] text-white text-3xl sm:text-4xl px-4 sm:px-10"
    >
      {/* Heading */}
      <h1 className="text-center font-bold font-orbitron">MY BEST EDITS</h1>

      {/* Horizontal Scrollable Container */}
      <div className="mt-10 w-full overflow-x-auto overflow-y-hidden">
        <div className="flex space-x-6 px-6 min-w-max text-2xl sm:text-4xl">
          {arr.map((item, index) => (
            <Card
              key={index}
              video={item.video}
              title={item.title}
              cover={item.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
