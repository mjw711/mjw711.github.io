import React from 'react';
import { CONTACT_EMAIL } from '@/constants';
import { Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-cyan-900/50 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <Anchor className="text-cyan-800 w-12 h-12 mb-4" />
            <h3 className="text-white text-lg font-bold tracking-widest tech-font mb-2">ONE PING CONSULTING</h3>
            <p className="text-slate-500 text-sm text-center max-w-md mb-6">
                Navigating the depths of modern business with military precision and human insight.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-500 hover:text-cyan-300 transition-colors mb-8">
                {CONTACT_EMAIL}
            </a>
            
            <div className="w-full h-px bg-slate-900 mb-6"></div>
            
            <p className="text-slate-700 text-xs">
                © {new Date().getFullYear()} One Ping Consulting. All Rights Reserved. US Navy Veteran Owned.
            </p>
        </div>
    </footer>
  );
};

export default Footer;