import React, { useState } from 'react';
import { Anchor, Heart, Shield, User, RefreshCw } from 'lucide-react';

const About: React.FC = () => {
  const [imgSources] = useState([
    'profile.jpg',
    'Profile.jpg',
    'profile.jpeg',
    'profile.png',
    '/profile.jpg',
    './profile.jpg'
  ]);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (currentSrcIndex < imgSources.length - 1) {
        setCurrentSrcIndex(prev => prev + 1);
    } else {
        setHasError(true);
    }
  };

  const handleRetry = () => {
      setHasError(false);
      setCurrentSrcIndex(0);
  };

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <div className="glass-panel p-8 md:p-12 rounded-xl border-t border-cyan-500/30">
        <h1 className="text-4xl font-bold text-white mb-8 tech-font border-b border-cyan-900 pb-4">
          <span className="text-cyan-400">02</span> // SHIP'S LOG
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 relative group">
            <div className="relative rounded-lg overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)] bg-slate-900 min-h-[300px] flex items-center justify-center">
               {!hasError ? (
                   <img 
                     src={imgSources[currentSrcIndex]}
                     alt="Michael J. Walters - Captain & CEO" 
                     className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                     onError={handleError}
                   />
               ) : (
                   <div className="flex flex-col items-center justify-center p-8 text-slate-500 bg-slate-800 w-full h-full min-h-[400px] relative overflow-hidden">
                       <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
                       <div className="scan-line"></div>
                       
                       <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mb-4 border-2 border-slate-600 relative z-10">
                            <User className="w-12 h-12 text-slate-400" />
                       </div>
                       
                       <h3 className="text-white font-bold text-lg mb-1 relative z-10">IMAGE DATA NOT FOUND</h3>
                       <p className="text-xs font-mono text-cyan-500 text-center max-w-[200px] mb-6 relative z-10">
                           UNABLE TO RETRIEVE 'profile.jpg'. FILE MAY BE MISSING OR CORRUPTED.
                       </p>

                       <button 
                         onClick={handleRetry}
                         className="flex items-center gap-2 px-4 py-2 bg-cyan-900/50 hover:bg-cyan-800/50 border border-cyan-500/30 rounded text-cyan-400 text-xs transition-colors relative z-10"
                       >
                         <RefreshCw className="w-3 h-3" /> RETRY LINK
                       </button>
                   </div>
               )}
               
               <div className="absolute bottom-0 w-full bg-slate-900/90 p-4 border-t border-cyan-500 z-20">
                 <h3 className="text-xl font-bold text-white">Michael J. Walters</h3>
                 <p className="text-cyan-400 text-sm tracking-widest">CAPTAIN & CEO</p>
               </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-3 rounded text-center border border-slate-700">
                    <Shield className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <span className="text-xs text-slate-400 uppercase">US Sub Force</span>
                    <p className="text-white font-bold">VETERAN</p>
                </div>
                 <div className="bg-slate-800/50 p-3 rounded text-center border border-slate-700">
                    <Heart className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <span className="text-xs text-slate-400 uppercase">Survivor</span>
                    <p className="text-white font-bold">RESILIENT</p>
                </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white">One Ping Consulting</strong> is locally owned and operated by a US Submarine Force veteran. But my journey to the helm of this company wasn't a straight line—it was a dive into the deep and a fight to resurface.
            </p>
            <p>
              Four years ago, I died in a car accident. 
            </p>
            <div className="border-l-4 border-cyan-500 pl-6 py-2 my-6 bg-cyan-900/10 italic text-cyan-100">
              "30 fractures. A Traumatic Brain Injury. I had to learn how to walk again."
            </div>
            <p>
              Coming back from the darkness gave me a new mission. I realized that life, like a submarine patrol, requires a dedicated crew and a clear objective. I wanted to help small businesses in my community navigate their own treacherous waters.
            </p>
            <p>
              As the saying goes, <span className="text-cyan-400 font-bold">"it takes a village."</span> We are that village. We need to look out for each other.
            </p>
            <p>
              I am a father, and I have a dog and a cat that mean the world to me. I bring that same protective, loyal, and disciplined energy to my clients. Whether we are deploying AI Marketing strategies, profiling behavior for better team cohesion, or engaging in deep-dive professional coaching, I am committed to your surfacing successfully.
            </p>
            <div className="mt-8 flex items-center gap-4">
               <Anchor className="text-cyan-500 w-8 h-8" />
               <span className="text-sm font-mono text-slate-500">END TRANSMISSION // LOG 02</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;