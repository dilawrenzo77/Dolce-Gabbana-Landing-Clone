"use client"
import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <MobileNav /> : <Navbar />;
};

export default Navigation;