import React, { useRef } from 'react'
import Home from './sections/Home'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
const App = () => {
 const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // scroll function
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, workRef, contactRef }}
      />

      {/* Sections */}
      <Home myRef={homeRef} />
      <About myRef={aboutRef} />
      <Work myRef={workRef} />
      <Contact myRef={contactRef} />
    </div>
  )
}

export default App
