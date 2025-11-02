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
        <div className="relative bg-[url('/dg3.webp')] bg-cover bg-center bg-no-repeat h-140 min-h-screen w-full transition-all duration-500">
            <div className="absolute bottom-30 left-15 flex flex-col items-start justify-start gap-6">
                <p className="text-xs text-neutral-200 font-thin tracking-widest font-dg">WOMEN&apos;S COLLECTION FW25</p>
                <p className="font-dg text-[0.5rem] text-neutral-200 tracking-widest">Dynamic, Contemporary, and glamourous a style that catches the eye.</p>
                <p className="text-xs text-neutral-200  underline underline-offset-4 decoration-1 font-dg">DISCOVER MORE</p>
            </div>
        </div>
      ) : (
        <div className="relative bg-[url('/dg1.webp')] bg-cover bg-center bg-no-repeat  h-140 min-h-screen w-full transition-all duration-500">
            <div className="absolute bottom-30 left-15 flex flex-col items-start justify-start gap-6">
                <p className="text-xs text-neutral-200 font-thin tracking-widest font-dg">MEN&apos;S COLLECTION FW25</p>
                <p className="font-dg text-[0.5rem] text-neutral-200 tracking-widest">A sophisticated wardrode full of refined details and unique accessories</p>
                <p className="text-xs text-neutral-200  underline underline-offset-4 decoration-1 font-dg">DISCOVER MORE</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default MobileHero;
