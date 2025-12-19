import React from 'react';
import { Home, Shirt, ScanLine, User, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const TabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="absolute bottom-6 left-0 right-0 px-6 z-50">
      <div className="bg-[#1A1A1A] text-white rounded-[2rem] h-[72px] shadow-float flex items-center justify-between px-2 relative">
        
        {/* Left Actions */}
        <div className="flex flex-1 justify-around pl-2">
          <button 
            onClick={() => navigate('/')}
            className={`flex flex-col items-center gap-1 p-2 transition-all ${isActive('/') ? 'text-white' : 'text-gray-500'}`}
          >
            <Home size={24} strokeWidth={isActive('/') ? 2.5 : 2} />
            {isActive('/') && <span className="text-[10px] font-medium">Home</span>}
          </button>
          
          <button 
             onClick={() => navigate('/wardrobe')}
             className={`flex flex-col items-center gap-1 p-2 transition-all ${isActive('/wardrobe') ? 'text-white' : 'text-gray-500'}`}
          >
            <Shirt size={24} strokeWidth={isActive('/wardrobe') ? 2.5 : 2} />
            {isActive('/wardrobe') && <span className="text-[10px] font-medium">Closet</span>}
          </button>
        </div>

        {/* Center Floating Action Button (Visually detached but integrated) */}
        <div className="relative -top-8 mx-2">
          <button 
            onClick={() => navigate('/scan')}
            className="w-16 h-16 bg-[#212121] rounded-full border-[4px] border-[#FAFAFA] flex items-center justify-center shadow-lg transform active:scale-95 transition-transform"
          >
            <ScanLine size={28} color="white" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex flex-1 justify-around pr-2">
          <button className="flex flex-col items-center gap-1 p-2 text-gray-500">
            <Heart size={24} />
          </button>
          
          <button className="flex flex-col items-center gap-1 p-2 text-gray-500">
            <User size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};