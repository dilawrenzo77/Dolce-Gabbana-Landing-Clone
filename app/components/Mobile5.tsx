"use client"
import React, { useState, useEffect } from 'react';

const MobileHero = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 9000); // 2000ms = 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-100dvw flex sm:hidden transition-all duration-500">
      {showFirst ? (
        <div className="relative bg-[url('/dg9b.webp')] bg-cover bg-center bg-no-repeat h-140 min-h-screen w-full">
            <div className="absolute bottom-10 left-15 flex flex-col items-start justify-start gap-6">
                <p className="text-xs text-neutral-200 font-thin tracking-widest font-dg">CAMPAIGN COLLECTION</p>
                <p className="text-[0.6rem] text-neutral-200  underline underline-offset-4 decoration-1 font-dg">SHOP GIRL</p>
            </div>
        </div>
      ) : (
        <div className="relative bg-[url('/dg9c.webp')] bg-cover bg-center bg-no-repeat  h-140 min-h-screen w-full">
            <div className="absolute bottom-10 left-15 flex flex-col items-start justify-start gap-6">
                <p className="text-xs text-neutral-200 font-thin tracking-widest font-dg">EXPLORER COLLECTION</p>
                <p className="text-[0.6rem] text-neutral-200  underline underline-offset-4 decoration-1 font-dg">SHOP BOY</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default MobileHero;