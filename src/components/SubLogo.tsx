import React from 'react';

const SubLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="-10 0 135 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="animate-pulse">
        <path d="M5 25H2" className="stroke-cyan-500" strokeWidth="2" />
        <path d="M2 18V32" className="stroke-cyan-500" strokeWidth="2" />
        <path d="M2 18L-2 15" className="stroke-cyan-500/50" strokeWidth="1" />
        <path d="M2 32L-2 35" className="stroke-cyan-500/50" strokeWidth="1" />
      </g>
      <path 
        d="M10 25C10 15 25 15 45 15H55C75 15 85 20 85 25C85 30 75 35 55 35H45C25 35 10 35 10 25Z" 
        className="fill-cyan-950 stroke-cyan-500" 
        strokeWidth="2"
      />
      <path 
        d="M50 15V8H60V15" 
        className="fill-cyan-950 stroke-cyan-500" 
        strokeWidth="2"
      />
      <path d="M54 8V4M58 8V2" className="stroke-cyan-400" strokeWidth="2"/>
      <path d="M15 25H5" className="stroke-cyan-500" strokeWidth="2"/>
      <path d="M52 20H58" className="stroke-cyan-500" strokeWidth="1"/>
      <path d="M90 25L90 25" className="stroke-green-500" strokeWidth="2" strokeLinecap="round"/>
      <path d="M92 20C94 21.5 95 23 95 25C95 27 94 28.5 92 30" className="stroke-green-500" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <path d="M96 16C100 19 101 22 101 25C101 28 100 31 96 34" className="stroke-green-500" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <path d="M100 12C105 16 107 20 107 25C107 30 105 34 100 38" className="stroke-green-500" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <path d="M106 8C111 13 114 19 114 25C114 31 111 37 106 42" className="stroke-green-500" strokeWidth="2" strokeLinecap="round" opacity="0.2"/>
    </svg>
  );
};
export default SubLogo;