import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/constants';
import { ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto min-h-screen">
       <h1 className="text-4xl font-bold text-white mb-12 tech-font text-center">
          <span className="text-cyan-400">03</span> // TACTICAL SYSTEMS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
                <Link 
                    to={service.path} 
                    key={service.id}
                    className="group relative block h-full"
                >
                    <div className="glass-panel h-full p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all duration-300 flex flex-col items-center text-center">
                        <span className="absolute top-4 right-4 text-6xl font-black text-white/5 tech-font group-hover:text-cyan-500/10 transition-colors">
                            0{index + 1}
                        </span>

                        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center border-2 border-cyan-500/50 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                            <service.icon className="w-10 h-10 text-cyan-400" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                            {service.title}
                        </h2>
                        
                        <p className="text-slate-300 mb-8 flex-grow">
                            {service.shortDescription}
                        </p>

                        <div className="flex items-center text-cyan-500 font-bold text-sm tracking-widest uppercase">
                            Initialize <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
};
export default Services;