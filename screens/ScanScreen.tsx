import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { X, Zap, Camera, Image as ImageIcon, Loader2 } from 'lucide-react';
import { MOCK_NEW_ITEM } from '../constants';

export const ScanScreen = () => {
  const navigate = useNavigate();
  const { addToWardrobe } = useApp();
  const [isScanning, setIsScanning] = useState(false);
  const [scanStage, setScanStage] = useState(0); // 0: Idle, 1: Scanning, 2: Success

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isScanning) {
      // Stage 1: Analyze
      setScanStage(1);
      timer = setTimeout(() => {
        // Stage 2: Complete
        setScanStage(2);
        
        // Add item and redirect
        setTimeout(() => {
            addToWardrobe(MOCK_NEW_ITEM);
            navigate('/wardrobe');
        }, 1000);

      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isScanning, addToWardrobe, navigate]);

  return (
    <div className="relative h-full w-full bg-black text-white flex flex-col overflow-hidden">
      
      {/* Fake Camera Feed Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
        style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1551488852-0801751ac367?auto=format&fit=crop&w=1000&q=80')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0" />

      {/* Top Controls */}
      <div className="relative z-20 pt-12 px-6 flex justify-between items-center">
        <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10"
        >
          <X size={20} />
        </button>
        <span className="font-semibold text-sm tracking-wide bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">Scan Mode</span>
        <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
          <Zap size={20} className={isScanning ? "text-yellow-400 fill-yellow-400" : ""} />
        </button>
      </div>

      {/* Main Viewfinder Area */}
      <div className="relative flex-1 flex flex-col items-center justify-center z-10">
        
        {/* Scanner Box */}
        <div className="relative w-64 h-80 rounded-[2rem] border border-white/50 overflow-hidden shadow-2xl">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl"></div>

            {/* Scanning Laser Line */}
            {isScanning && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent shadow-[0_0_20px_rgba(224,231,255,0.8)] animate-scan opacity-80"></div>
            )}
            
            {/* Success Overlay */}
            {scanStage === 2 && (
                <div className="absolute inset-0 bg-accent/20 flex items-center justify-center backdrop-blur-sm transition-all">
                    <div className="bg-white text-primary px-4 py-2 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
                        <Loader2 className="animate-spin" size={16} />
                        Processing...
                    </div>
                </div>
            )}
        </div>
        
        {/* Tip */}
        <p className="mt-8 text-sm font-medium text-white/80 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            {isScanning ? "Analyzing garment details..." : "Align garment within the frame"}
        </p>

      </div>

      {/* Bottom Controls */}
      <div className="relative z-20 pb-16 pt-8 px-6 flex flex-col items-center gap-6">
        
        <button 
          onClick={() => setIsScanning(true)}
          disabled={isScanning}
          className={`group relative flex w-full max-w-[300px] h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-white text-primary shadow-xl transition-all active:scale-[0.98] ${isScanning ? 'opacity-90 cursor-wait' : ''}`}
        >
          {isScanning ? (
              <Loader2 className="animate-spin text-primary" size={24} />
          ) : (
             <>
                <Camera size={24} className="group-hover:scale-110 transition-transform" />
                <span className="text-base font-bold tracking-wide">Snap & Analyze</span>
             </>
          )}
        </button>

        <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
            <ImageIcon size={18} />
            <span>Select from Gallery</span>
        </button>
      </div>

    </div>
  );
};