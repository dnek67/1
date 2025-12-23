'use client';

import { useState } from 'react';

export const SharedBackground = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]">
      <img
        src="https://loliapi.com/acg/"
        alt="background"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="eager"
        onLoad={() => setBgLoaded(true)}
      />
    </div>
  );
};
