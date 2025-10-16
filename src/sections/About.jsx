import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const About = ({ myRef }) => {
  const services = ["Vlogs Editing", "Reels Editing", "CashCow Editing", "Logo Animation"];
  const containerRef = useRef();
  const animationBoxRef = useRef();

  useEffect(() => {
    const elements = containerRef.current.children;
    const boxWidth = animationBoxRef.current.offsetWidth;
    
    // Duplicate the elements to create seamless loop
    const duplicatedElements = [...elements];
    duplicatedElements.forEach(el => {
      const clone = el.cloneNode(true);
      containerRef.current.appendChild(clone);
    });

    const allElements = containerRef.current.children;
    const contentWidth = containerRef.current.scrollWidth / 2; // Since we duplicated
    
    // Calculate how far we need to move to scroll completely
    const distance = contentWidth;
    
    // GSAP horizontal loop animation
    const tl = gsap.timeline({repeat: -1});
    
    tl.to(allElements, {
      x: -distance,
      duration: 20,
      ease: "linear",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % distance)
      }
    });
  }, []);

  return (
    <div ref={myRef} className="w-full pt-[10%] px-6 text-white">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-orbitron">ABOUT ME</h1>
        <hr className="mt-2 w-[150px] sm:w-[250px] md:w-[350px] lg:w-[450px] mx-auto border-2 border-blue-500" />
      </div>

      <p className="font-poppins mt-6 w-full sm:w-[85%] md:w-[75%] mx-auto text-center text-base sm:text-lg leading-relaxed">
        "Welcome To The Cinematic Realm Of Jimmy, Where Creativity Meets Technology To Craft Visually Stunning Narratives.
        With A Passion For Storytelling And A Keen Eye For Detail, I Embark On A Journey To Transform Ordinary Footage Into
        Extraordinary Visual Experiences."
      </p>

      {/* Animation Container */}
      <div 
        ref={animationBoxRef}
        className="mt-8 mx-auto w-full max-w-4xl overflow-hidden bg-gray-800/30 rounded-lg border border-gray-700 p-4"
      >
        <div 
          ref={containerRef} 
          className="flex flex-nowrap gap-8 whitespace-nowrap"
        >
          {services.map((item, index) => (
            <div 
              key={index} 
              className="text-base sm:text-lg md:text-xl flex items-center bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg shadow-lg flex-shrink-0"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;