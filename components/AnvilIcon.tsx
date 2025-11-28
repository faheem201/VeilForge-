
import React from 'react';

export const AnvilIcon = () => (
  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* --- SHIELD OUTLINE --- */}
    <path 
      d="M256 492
         C380 430 450 320 450 130
         L430 90
         L256 40
         L82 90
         L62 130
         C62 320 132 430 256 492Z" 
      stroke="#DC2626" 
      strokeWidth="20" 
      fill="none"
      strokeLinejoin="round"
    />

    {/* --- FLAME --- */}
    {/* Main Flame Body */}
    <path 
      d="M256 100
         C220 150 160 220 160 290
         C160 330 180 350 200 360
         H312
         C332 350 352 330 352 290
         C352 220 292 150 256 100Z"
      fill="#DC2626"
    />
    
    {/* Inner Flame Details (Darker Red for depth) */}
    <path 
      d="M256 150
         C235 200 210 240 210 280
         C210 300 220 310 230 310
         H282
         C292 310 302 300 302 280
         C302 240 277 200 256 150Z"
      fill="#991B1B"
    />
    
    {/* Side Licks */}
    <path 
      d="M200 220 C180 250 180 280 190 300 L200 310 L210 280 C210 260 220 240 200 220Z"
      fill="#EF4444"
    />
    <path 
      d="M312 220 C332 250 332 280 322 300 L312 310 L302 280 C302 260 292 240 312 220Z"
      fill="#EF4444"
    />

    {/* --- BASE / TORCH BOWL --- */}
    <path 
      d="M140 370 H372" 
      stroke="#DC2626" 
      strokeWidth="24" 
      strokeLinecap="round"
    />
    <path 
      d="M170 385
         Q170 430 256 430
         Q342 430 342 385"
       stroke="#DC2626"
       strokeWidth="20"
       fill="none"
       strokeLinecap="round"
    />
  </svg>
);
