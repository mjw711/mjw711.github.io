import React, { createContext, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SonarEffect from './components/SonarEffect';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import { MissionContextType } from './types';

export const MissionContext = createContext<MissionContextType>({
  missionObjective: '',
  setMissionObjective: () => {},
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [missionObjective, setMissionObjective] = useState('');

  return (
    <MissionContext.Provider value={{ missionObjective, setMissionObjective }}>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white flex flex-col">
            <SonarEffect />
            <Navbar />
            
            <main className="flex-grow relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Contact />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
    </MissionContext.Provider>
  );
};

export default App;