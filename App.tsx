import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { TabBar } from './components/TabBar';
import { HomeScreen } from './screens/HomeScreen';
import { WardrobeScreen } from './screens/WardrobeScreen';
import { ScanScreen } from './screens/ScanScreen';

// Layout component to handle conditional rendering of TabBar
const MainLayout = () => {
  const location = useLocation();
  const hideTabBar = location.pathname === '/scan';

  return (
    <div className="relative w-full h-full bg-white shadow-2xl overflow-hidden flex flex-col">
       <div className="flex-1 overflow-hidden relative">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/wardrobe" element={<WardrobeScreen />} />
          <Route path="/scan" element={<ScanScreen />} />
        </Routes>
       </div>
       {!hideTabBar && <TabBar />}
    </div>
  );
};

export default function App() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#eef0f2]">
      {/* Mobile Device Simulation Container */}
      <div className="w-full h-full max-w-[430px] max-h-[932px] bg-white relative shadow-2xl overflow-hidden sm:rounded-[2.5rem] sm:border-[8px] sm:border-gray-900">
        <AppProvider>
          <HashRouter>
            <MainLayout />
          </HashRouter>
        </AppProvider>
        
        {/* iOS Home Indicator Bar Simulation (only visible on "device" container) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-[60] pointer-events-none hidden sm:block"></div>
      </div>
    </div>
  );
}