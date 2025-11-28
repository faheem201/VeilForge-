import React from 'react';

export const VeilLogo = () => (
  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="veilRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:'#DC143C', stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:'#8B0000', stopOpacity:1}} />
      </linearGradient>
      <linearGradient id="veilFlame" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style={{stopColor:'#FF4500', stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:'#DC143C', stopOpacity:1}} />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* --- FLAMES TOP --- */}
    <g filter="url(#glow)">
        {/* Central Flame */}
        <path 
            d="M256 20
               C230 80 210 120 230 180
               L256 210
               L282 180
               C302 120 282 80 256 20Z" 
            fill="url(#veilFlame)" 
        />
        {/* Left Lick */}
        <path d="M210 80 C190 120 195 150 210 180" stroke="url(#veilFlame)" strokeWidth="8" strokeLinecap="round" />
        {/* Right Lick */}
        <path d="M302 80 C322 120 317 150 302 180" stroke="url(#veilFlame)" strokeWidth="8" strokeLinecap="round" />
    </g>

    {/* --- MASK V SHAPE --- */}
    <path 
      d="M256 480
         L90 160
         L160 140
         L256 400
         L352 140
         L422 160
         L256 480Z"
      fill="url(#veilRed)"
      stroke="#111"
      strokeWidth="6"
    />

    {/* --- EYES / SILVER ACCENTS --- */}
    <path 
        d="M190 200 L240 230 L190 250 L160 220 Z" 
        fill="#C7C7C7"
    />
    <path 
        d="M322 200 L272 230 L322 250 L352 220 Z" 
        fill="#C7C7C7"
    />
    
    {/* --- CENTER GEM/DETAIL --- */}
    <path d="M256 240 L266 260 L256 280 L246 260 Z" fill="#111" />
  </svg>
);