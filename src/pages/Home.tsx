import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crosshair, AlertTriangle } from 'lucide-react';
import { MissionContext } from '../App';
import SubLogo from '../components/SubLogo';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);
  
  const primarySubImage = "https://upload.wikimedia.org/wikipedia/commons/2/23/USS_Seawolf_%28SSN_21%29_underway_JPC.jpg";

  const handleImageError = () => {
    setImageLoadError(true);
  };

  const navigate = useNavigate();
  const { setMissionObjective } = useContext(MissionContext);

  const handleLaunch = () => {
    if (inputValue.trim()) {
      setMissionObjective(inputValue);
      navigate('/contact');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
       // handleLaunch();
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden flex items-center justify-center bg-slate-900 border-b-4 border-cyan-900">
        
        {!imageLoadError ? (
            <div className="absolute inset-0 z-0 bg-slate-900">
                <img 
                    src={primarySubImage}
                    alt="US Navy Submarine" 
                    className="w-full h-full object-cover opacity-90"
                    style={{ objectPosition: 'center center' }}
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-cyan-900/40 mix-blend-multiply z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-cyan-900/10 to-slate-950/30 z-10 pointer-events-none"></div>
            </div>
        ) : (
            <div className="absolute inset-0 z-0 bg-slate-950 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 opacity-20" 
                    style={{
                        backgroundImage: `linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.2),transparent_70%)]"></div>
                <div className="relative w-[120%] max-w-5xl opacity-80 animate-pulse-slow">
                    <SubLogo className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                    <div className="absolute top-10 left-10 h-px w-32 bg-cyan-500/50"></div>
                    <div className="absolute top-10 left-10 v-px h-32 w-px bg-cyan-500/50"></div>
                    <div className="absolute top-10 left-44 text-xs font-mono text-cyan-500">SSN-CLASS // SEAWOLF</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-[20%] w-full animate-scan-down"></div>
            </div>
        )}

        <div className="relative z-30 text-center px-4 max-w-6xl mx-auto mt-16 w-full flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl md:text-9xl font-bold text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-tighter tech-font shadow-black text-stroke-sm">
                ONE PING ONLY
            </h1>
            
            <div className="inline-block relative mb-8">
                <div className="absolute -inset-1 bg-cyan-950/80 blur-md rounded-full"></div>
                <p className="relative text-xl md:text-2xl text-cyan-50 font-medium tracking-wide bg-slate-900/90 px-8 py-3 rounded-full border border-cyan-500/40 shadow-xl backdrop-blur-md">
                    Targeted AI Marketing. Strategic Profiling. Executive Command.
                </p>
            </div>

            <div className="mb-6 relative z-40 transform hover:scale-105 transition-transform duration-300 cursor-pointer group -translate-x-12 -translate-y-4">
                <div className="inline-block relative bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 border border-slate-500 rounded shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-slate-400 shadow-[inset_0_1px_1px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.2)]"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-slate-400 shadow-[inset_0_1px_1px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.2)]"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-slate-400 shadow-[inset_0_1px_1px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.2)]"></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-slate-400 shadow-[inset_0_1px_1px_rgba(0,0,0,1),0_1px_0_rgba(255,255,255,0.2)]"></div>
                    
                    <div className="px-5 py-1.5 flex items-center justify-center">
                        <span className="text-slate-200 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] drop-shadow-md font-mono opacity-90 group-hover:text-cyan-200 transition-colors" style={{textShadow: '-1px -1px 0 rgba(0,0,0,0.5)'}}>
                            ADVERTISE HERE
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto w-full perspective-[2000px]">
                <div className="bg-slate-900/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl border-2 border-slate-600 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-visible transform rotate-x-[5deg] transition-transform hover:rotate-x-[0deg] duration-500 group border-t-cyan-500/50">
                    <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-slate-500 shadow-[inset_0_1px_1px_rgba(0,0,0,1)]"></div>
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-slate-500 shadow-[inset_0_1px_1px_rgba(0,0,0,1)]"></div>
                    <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-slate-500 shadow-[inset_0_1px_1px_rgba(0,0,0,1)]"></div>
                    <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-slate-500 shadow-[inset_0_1px_1px_rgba(0,0,0,1)]"></div>

                    <div className="flex flex-col md:flex-row gap-8 items-end justify-center">
                        
                        <div className="relative flex-grow w-full text-left">
                             <div className="flex justify-between items-end mb-2">
                                <label className="flex items-center text-cyan-400 text-xs font-bold tech-font tracking-[0.2em] pl-1 drop-shadow-md gap-2">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                                    INPUT MISSION OBJECTIVES
                                </label>
                                {isFocused && (
                                    <span className="text-[10px] text-yellow-500 font-bold animate-pulse tracking-widest uppercase border border-yellow-500 px-1 rounded bg-yellow-950/50">Targeting Active</span>
                                )}
                             </div>
                            
                            <div className="relative group/input">
                                <input 
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="ENTER COORDINATES OR TARGET..."
                                    className={`w-full bg-black/70 text-white p-5 pl-12 rounded-lg border-2 outline-none transition-all duration-300 tech-font font-bold text-lg tracking-wide
                                        placeholder:text-slate-600 placeholder:font-normal
                                        ${isFocused ? 'border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.3)] bg-black/90' : 'border-slate-700 hover:border-cyan-500/50'}
                                        ${inputValue.length > 0 && !isFocused ? 'border-green-500 text-green-400' : ''}
                                    `}
                                />
                                
                                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-yellow-500' : 'text-slate-600'}`}>
                                    <Crosshair className={`w-6 h-6 ${isFocused ? 'animate-spin-slow' : ''}`} />
                                </div>

                                <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 pointer-events-none transition-colors duration-300 ${isFocused ? 'border-yellow-500' : 'border-cyan-500/30'}`}></div>
                                <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 pointer-events-none transition-colors duration-300 ${isFocused ? 'border-yellow-500' : 'border-cyan-500/30'}`}></div>
                                <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 pointer-events-none transition-colors duration-300 ${isFocused ? 'border-yellow-500' : 'border-cyan-500/30'}`}></div>
                                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 pointer-events-none transition-colors duration-300 ${isFocused ? 'border-yellow-500' : 'border-cyan-500/30'}`}></div>
                            </div>
                             
                             <div className={`absolute right-0 -top-12 transition-all duration-300 transform origin-bottom ${isFocused ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}>
                                <div className="bg-red-950/90 text-red-500 border border-red-600 px-4 py-1 text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.5)] clip-path-polygon backdrop-blur-md">
                                    <AlertTriangle className="w-3 h-3" /> LAUNCH CONTROLS UNLOCKED
                                </div>
                             </div>
                        </div>
                        
                        <div className="relative group/btn w-32 h-32 flex-shrink-0 z-50 flex items-center justify-center">
                            
                            <button 
                                onClick={handleLaunch}
                                tabIndex={isCoverOpen ? 0 : -1} 
                                className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 border-4 border-red-950 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_5px_rgba(255,255,255,0.3)] z-10 flex flex-col items-center justify-center active:scale-95 transition-all cursor-pointer overflow-hidden
                                    ${inputValue ? 'animate-pulse hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]' : 'grayscale-[0.8] opacity-80 cursor-not-allowed'}
                                `}
                                disabled={!inputValue}
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]"></div>
                                <span className="text-white font-black uppercase tracking-wider text-[10px] mb-1 drop-shadow-md relative z-10">FIRE</span>
                                <Crosshair className="w-8 h-8 text-white drop-shadow-md relative z-10" strokeWidth={3} />
                            </button>

                            <div 
                                onClick={(e) => {
                                    if (!isCoverOpen) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsCoverOpen(true);
                                    }
                                }}
                                className={`absolute top-[-15px] left-1/2 -translate-x-1/2 w-28 h-36 origin-top transition-transform duration-500 ease-out z-40
                                ${isCoverOpen ? 'rotate-x-[160deg] pointer-events-none' : 'pointer-events-auto cursor-pointer'}
                            `}>
                                <div className="absolute inset-0 bg-transparent z-10"></div>

                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-600 rounded-t-sm border border-slate-900 z-20 flex items-center justify-center gap-4">
                                     <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                     <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                </div>
                                
                                <div className={`w-full h-28 bg-gradient-to-br from-slate-500/20 to-slate-600/20 rounded-b-3xl border-x-2 border-b-2 shadow-xl flex items-end justify-center pb-4 backdrop-blur-sm transition-colors duration-300 relative z-0
                                    ${'border-slate-400/60 group-hover/btn:border-red-600'}
                                `}>
                                    <div className="w-full h-full absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] rounded-b-3xl"></div>
                                    <div className="bg-yellow-500/90 text-black px-3 py-1 text-[10px] font-black rounded border border-yellow-600 shadow-lg uppercase tracking-wider relative z-10">
                                        SAFETY ON
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <div className="fixed w-full h-full pointer-events-none z-50 opacity-10 mix-blend-screen pointer-events-none">
          <div className="scan-line"></div>
      </div>

      <style>{`
        .text-stroke-sm { -webkit-text-stroke: 1.5px black; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .rotate-x-\\[160deg\\] { transform: rotateX(160deg); }
        .animate-spin-slow { animation: spin 3s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes scan-down { 0% { top: 0%; opacity: 0; } 10% { opacity: 0.5; } 90% { opacity: 0.5; } 100% { top: 100%; opacity: 0; } }
        .animate-scan-down { animation: scan-down 3s linear infinite; }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.8; } 50% { opacity: 0.4; } }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        @keyframes shine { 100% { transform: translateX(100%) skewX(-12deg); } }
        .group-hover\\:animate-shine:hover { animation: shine 1.5s infinite; }
      `}</style>
    </div>
  );
};

export default Home;