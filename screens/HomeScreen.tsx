import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sun, RotateCw, Check, Sparkles } from 'lucide-react';

export const HomeScreen = () => {
  const { todaysOutfit, generateOutfit, isLoading, saveOutfitToHistory } = useApp();
  const [showToast, setShowToast] = useState(false);

  const handleWearThis = () => {
    saveOutfitToHistory();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const { top, bottom, shoes } = todaysOutfit;

  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] pt-12 pb-28 px-6 overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Sun size={18} className="text-orange-400 fill-orange-400" />
            <span className="text-sm font-medium">Sunny, 28°C</span>
          </div>
          <h1 className="text-3xl font-extrabold text-primary leading-tight">
            Morning,<br />Sarah
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* AI Badge */}
      <div className="flex justify-center mb-6">
        <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-gray-100">
          <Sparkles size={16} className="text-indigo-500 fill-indigo-100" />
          <span className="text-xs font-bold text-gray-600 tracking-wide uppercase">AI Recommendation</span>
        </div>
      </div>

      {/* Outfit Card - Collage Style */}
      <div className="flex-1 min-h-[400px] bg-white rounded-[2rem] shadow-soft p-2 flex flex-col relative overflow-hidden group">
        
        {isLoading && (
          <div className="absolute inset-0 bg-white/80 z-20 backdrop-blur-sm flex items-center justify-center">
            <RotateCw className="animate-spin text-primary" size={32} />
          </div>
        )}

        {/* Top Section */}
        <div className="h-[55%] w-full rounded-t-[1.5rem] overflow-hidden mb-2 relative bg-gray-50">
          {top ? (
            <img src={top.imageUrl} alt={top.name} className="w-full h-full object-cover" />
          ) : (
             <div className="w-full h-full flex items-center justify-center text-gray-300">No Top</div>
          )}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Top</span>
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="h-[45%] w-full flex gap-2">
          {/* Bottom Left */}
          <div className="w-1/2 h-full rounded-bl-[1.5rem] overflow-hidden relative bg-gray-50">
            {bottom ? (
              <img src={bottom.imageUrl} alt={bottom.name} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">No Bottom</div>
            )}
             <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Bottom</span>
            </div>
          </div>
          
          {/* Bottom Right (Shoes) */}
          <div className="w-1/2 h-full rounded-br-[1.5rem] overflow-hidden relative bg-gray-50">
            {shoes ? (
              <img src={shoes.imageUrl} alt={shoes.name} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">No Shoes</div>
            )}
             <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Shoes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <button 
          onClick={() => generateOutfit()}
          disabled={isLoading}
          className="flex-1 bg-white border border-gray-200 h-14 rounded-2xl flex items-center justify-center gap-2 font-semibold text-primary shadow-sm active:scale-95 transition-transform"
        >
          <RotateCw size={18} />
          Shuffle
        </button>
        <button 
          onClick={handleWearThis}
          className="flex-[1.5] bg-primary h-14 rounded-2xl flex items-center justify-center gap-2 font-semibold text-white shadow-lg active:scale-95 transition-transform"
        >
          <Check size={18} />
          Wear This
        </button>
      </div>

      {/* Toast Notification */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 pointer-events-none z-50 flex items-center gap-2 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <Check size={16} className="text-green-400" />
        <span className="font-medium text-sm">Great choice! Saved to history.</span>
      </div>
    </div>
  );
};