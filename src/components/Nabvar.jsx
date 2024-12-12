import React, { useState, useEffect } from 'react';
import { Home, Info, Archive, User } from 'lucide-react';

const Navbar = ({ scrollToSection, activeItem }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigationItems = [
    {
      icon: <Home className="w-8 h-8" />,
      label: 'Home'
    },
    {
      icon: <Info className="w-8 h-8" />,
      label: 'Info'
    },
    {
      icon: <Archive className="w-8 h-8" />,
      label: 'Projects'
    },
    {
      icon: <User className="w-8 h-8" />,
      label: 'Profile'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Visible when scrolling up or at the top of the page
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-28  transition-transform duration-300 ${
      visible ? 'transform-none' : '-translate-y-full'
    }`}>
      <div className="max-w-[1550px] h-full mx-auto flex items-center gap-4 px-4">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.label)}
            className={`relative group transition-all duration-200
              ${activeItem === item.label
                ? 'px-8 py-2 md:px-14 md:py-2 bg-[#FFDDAE]'
                : 'p-2 bg-orange-100 hover:bg-[#FFDDAE]'
              } rounded-full flex items-center gap-2`}
          >
            {item.icon}
            {activeItem === item.label && (
              <span className="font-bold text-xl text-black">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;