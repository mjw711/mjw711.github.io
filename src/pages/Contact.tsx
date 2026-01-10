import React, { useContext, useEffect, useState } from 'react';
import { MissionContext } from '../App';
import { CALENDLY_LINK, CONTACT_EMAIL, PHONE_NUMBER } from '@/constants';
import { Mail, Calendar, CheckSquare, Square, Volume2, CheckCircle, ShieldCheck } from 'lucide-react';
import { playSonarPing } from '../components/SoundManager';

const Contact: React.FC = () => {
  const { missionObjective } = useContext(MissionContext);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const handleCalendlyClick = () => {
    setLinkClicked(true);
  };

  const handleManualConfirmation = () => {
    playSonarPing();
    setIsConfirmed(true);
    if (missionObjective) {
        console.log(`%c[SECURE TRANSMISSION]`, 'color: #22d3ee; font-weight: bold; font-size: 14px;');
        console.log(`Sending Mission Objectives to HQ (${CONTACT_EMAIL})...`);
        console.log(`PAYLOAD: "${missionObjective}"`);
        console.log(`STATUS: SENT`);
    } else {
        console.log(`%c[SECURE TRANSMISSION]`, 'color: #22d3ee; font-weight: bold; font-size: 14px;');
        console.log(`Booking Confirmed. No text mission parameters attached.`);
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 max-w-5xl mx-auto min-h-screen">
       <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2 tech-font">
                <span className="text-cyan-400">05</span> // ESTABLISH COMMS
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Secure channel open. Schedule your discovery call or transmit mission parameters directly.
            </p>
       </div>

       <div className="glass-panel p-1 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20">
           <div className="bg-slate-900/80 p-8 md:p-12">
               {missionObjective && (
                   <div className="mb-8 p-4 bg-cyan-950/30 border border-cyan-500/30 rounded relative overflow-hidden">
                       <p className="text-xs text-cyan-500 uppercase tracking-widest mb-1">Incoming Mission Parameters:</p>
                       <p className="text-white font-mono text-lg typing-effect break-words">{missionObjective}</p>
                       {isConfirmed && (
                           <div className="absolute top-2 right-2 flex items-center text-green-500 text-xs font-bold border border-green-500 px-2 py-1 rounded bg-green-900/20">
                               <ShieldCheck className="w-3 h-3 mr-1" /> ENCRYPTED & SENT
                           </div>
                       )}
                   </div>
               )}

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-8">
                       <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-4">
                           Direct Uplink
                       </h2>
                       
                       <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Mail className="text-cyan-400 w-6 h-6 mt-1" />
                                <div>
                                    <p className="text-sm text-slate-400 uppercase">Email Frequency</p>
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg text-white hover:text-cyan-300 transition">
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                            </div>

                             <div className="flex items-start gap-4">
                                <Volume2 className="text-cyan-400 w-6 h-6 mt-1" />
                                <div>
                                    <p className="text-sm text-slate-400 uppercase">Voice Comms</p>
                                    <a href={`tel:${PHONE_NUMBER}`} className="text-lg text-white hover:text-cyan-300 transition">
                                        {PHONE_NUMBER}
                                    </a>
                                </div>
                            </div>
                       </div>

                       <div className="bg-slate-800/50 p-6 rounded border border-slate-700 mt-8">
                           <h3 className="text-white font-bold mb-4">Communication Preferences</h3>
                           
                           <label className="flex items-start gap-3 cursor-pointer group mb-4">
                               <div className="relative">
                                   <input 
                                     type="checkbox" 
                                     className="peer sr-only"
                                     checked={smsOptIn}
                                     onChange={() => setSmsOptIn(!smsOptIn)}
                                   />
                                   <div className="w-5 h-5 border-2 border-slate-500 rounded peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-colors"></div>
                                   <CheckSquare className="w-5 h-5 text-white absolute top-0 left-0 opacity-0 peer-checked:opacity-100" />
                               </div>
                               <span className="text-slate-300 text-sm leading-tight group-hover:text-white">
                                   <strong>Grant Permission:</strong> I agree to receive mission updates and scheduling confirmations via SMS. (Standard rates apply).
                               </span>
                           </label>

                           <label className="flex items-start gap-3 cursor-pointer group">
                               <div className="relative">
                                   <input 
                                     type="checkbox" 
                                     className="peer sr-only"
                                     checked={!smsOptIn}
                                     onChange={() => setSmsOptIn(!smsOptIn)}
                                   />
                                    <div className="w-5 h-5 border-2 border-slate-500 rounded peer-checked:bg-slate-600 peer-checked:border-slate-500 transition-colors"></div>
                               </div>
                               <span className="text-slate-400 text-sm leading-tight group-hover:text-slate-200">
                                   <strong>Opt-Out:</strong> Do not send SMS. I prefer email communications only.
                               </span>
                           </label>
                       </div>
                   </div>

                   <div className="flex flex-col justify-center items-center text-center space-y-6 bg-gradient-to-b from-slate-800/30 to-transparent p-6 rounded-xl border border-dashed border-slate-600">
                        <div className="w-20 h-20 bg-cyan-900/50 rounded-full flex items-center justify-center animate-pulse">
                            <Calendar className="w-10 h-10 text-cyan-400" />
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Discovery Call</h3>
                            <p className="text-slate-400 mb-6">30 Minute Strategy Session</p>
                        </div>

                        {!isConfirmed ? (
                            <>
                                <a 
                                    href={CALENDLY_LINK} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={handleCalendlyClick}
                                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-6 rounded shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2 sonar-link"
                                >
                                    BOOK SECTOR NOW
                                </a>
                                
                                {linkClicked && (
                                    <div className="animate-fade-in-up w-full mt-4 p-4 bg-slate-800/80 rounded border border-yellow-500/50">
                                        <p className="text-yellow-400 text-sm mb-3">
                                            Awaiting confirmation... Did you successfully book your time slot?
                                        </p>
                                        <button 
                                            onClick={handleManualConfirmation}
                                            className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded border border-green-500 flex items-center justify-center gap-2 transition-all"
                                        >
                                            <CheckCircle className="w-4 h-4" /> YES, CONFIRM DEPLOYMENT
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="w-full p-6 bg-green-900/20 border border-green-500/50 rounded-lg animate-pulse">
                                <div className="text-green-400 font-bold text-xl mb-2 flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-6 h-6" /> TRANSMISSION SECURE
                                </div>
                                <p className="text-slate-300 text-sm">
                                    Your booking has been logged in the ship's computer. 
                                    {missionObjective && " Mission objectives transmitted to command."}
                                    <br/>Stand by for contact.
                                </p>
                            </div>
                        )}
                        
                        <p className="text-xs text-slate-500 mt-4 max-w-xs">
                            Secure connection via Calendly. Selecting a time slot will automatically notify Captain Walters.
                        </p>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};
export default Contact;