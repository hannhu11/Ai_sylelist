import React, { createContext, useContext, useState, useEffect, ReactNode, PropsWithChildren } from 'react';
import { ClothingItem, Outfit } from '../types';
import { INITIAL_WARDROBE } from '../constants';

interface AppContextType {
  wardrobe: ClothingItem[];
  todaysOutfit: Outfit;
  generateOutfit: () => Promise<void>;
  addToWardrobe: (item: ClothingItem) => void;
  isLoading: boolean;
  history: Outfit[];
  saveOutfitToHistory: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [wardrobe, setWardrobe] = useState<ClothingItem[]>(INITIAL_WARDROBE);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Outfit[]>([]);
  const [todaysOutfit, setTodaysOutfit] = useState<Outfit>({
    top: null,
    bottom: null,
    shoes: null,
  });

  // Initial load
  useEffect(() => {
    generateOutfit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateOutfit = async () => {
    setIsLoading(true);
    
    // Simulate API delay / Thinking
    await new Promise(resolve => setTimeout(resolve, 800));

    const tops = wardrobe.filter(i => i.category === 'Top');
    const bottoms = wardrobe.filter(i => i.category === 'Bottom');
    const shoes = wardrobe.filter(i => i.category === 'Shoes');

    const randomTop = tops[Math.floor(Math.random() * tops.length)];
    const randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
    const randomShoes = shoes[Math.floor(Math.random() * shoes.length)];

    setTodaysOutfit({
      top: randomTop || null,
      bottom: randomBottom || null,
      shoes: randomShoes || null,
    });
    setIsLoading(false);
  };

  const addToWardrobe = (item: ClothingItem) => {
    setWardrobe(prev => [item, ...prev]);
  };

  const saveOutfitToHistory = () => {
    setHistory(prev => [todaysOutfit, ...prev]);
    console.log("Outfit saved to history:", todaysOutfit);
  };

  return (
    <AppContext.Provider value={{
      wardrobe,
      todaysOutfit,
      generateOutfit,
      addToWardrobe,
      isLoading,
      history,
      saveOutfitToHistory
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};