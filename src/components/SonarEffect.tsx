import React from 'react';

const SonarEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
            backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="absolute -bottom-64 -right-64 w-[800px] h-[800px] opacity-20 hidden md:block">
        <div className="w-full h-full border rounded-full border-cyan-500/30 relative flex items-center justify-center">
             <div className="absolute inset-0 radar-sweep rounded-full"></div>
             <div className="w-[80%] h-[80%] border rounded-full border-cyan-500/20"></div>
             <div className="w-[60%] h-[60%] border rounded-full border-cyan-500/20"></div>
             <div className="w-[40%] h-[40%] border rounded-full border-cyan-500/20"></div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default SonarEffect;