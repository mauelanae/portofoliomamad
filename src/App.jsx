import React, { useState, useRef, useEffect } from 'react';
import Homesection from './components/Homesection';
import Navbar from './components/Nabvar';
import Aboutsection from './components/Aboutsection';
import Projectsection from './components/Projectsection';
import Contactsection from './components/Contactsection';

const App = () => {
  const [activeItem, setActiveItem] = useState('Home');
  
  const homeRef = useRef(null);
  const infoRef = useRef(null);
  const projectsRef = useRef(null);
  const profileRef = useRef(null);

  const refs = {
    homeRef,
    infoRef,
    projectsRef,
    profileRef
  };

  const scrollToSection = (label) => {
    setActiveItem(label);
    const refMapping = {
      Home: homeRef,
      Info: infoRef,
      Projects: projectsRef,
      Profile: profileRef
    };

    const element = refMapping[label].current;
    if (element) {
      // Gunakan scrollIntoView dengan offset
      const headerOffset = 0 // Tinggi navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Mendeteksi scroll untuk mengupdate activeItem
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerOffset = 80; // Tinggi navbar

      const sections = {
        Home: homeRef.current?.offsetTop - headerOffset,
        Info: infoRef.current?.offsetTop - headerOffset,
        Projects: projectsRef.current?.offsetTop - headerOffset,
        Profile: profileRef.current?.offsetTop - headerOffset
      };

      let currentSection = 'Home';
      for (const [key, value] of Object.entries(sections)) {
        if (scrollPosition >= value) {
          currentSection = key;
        }
      }

      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div>
      <Navbar scrollToSection={scrollToSection} activeItem={activeItem}/>
      <Homesection ref={refs} onButtonClick={handleScrollToProjects}/>
      <Aboutsection ref={refs} />
      <Projectsection ref={refs} />
      <Contactsection ref={refs} />
    </div>
  );
};

export default App;