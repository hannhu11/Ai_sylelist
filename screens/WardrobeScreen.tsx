import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Filter } from 'lucide-react';
import { Category } from '../types';

const CATEGORIES: ('All' | Category)[] = ['All', 'Top', 'Bottom', 'Shoes', 'Outerwear', 'Accessories'];

export const WardrobeScreen = () => {
  const { wardrobe } = useApp();
  const [activeFilter, setActiveFilter] = useState<'All' | Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWardrobe = wardrobe.filter(item => {
    const matchesCategory = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) || 
                          item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] pt-12 pb-28 px-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary">My Wardrobe</h1>
          <p className="text-gray-400 text-xs font-medium mt-1">{wardrobe.length} Items • SmartStyle AI Active</p>
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
           <Filter size={18} className="text-gray-600" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search 'wool', 'summer'..." 
          className="w-full bg-white h-12 pl-12 pr-4 rounded-xl border border-gray-100 text-sm focus:outline-none focus:border-primary/20 transition-colors shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 mb-4">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === cat 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-gray-500 border border-gray-100 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
        <div className="columns-2 gap-4 space-y-4">
          {filteredWardrobe.map(item => (
            <div key={item.id} className="break-inside-avoid relative group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-soft transition-transform active:scale-[0.98]">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-auto object-cover"
                  style={{ minHeight: item.category === 'Bottom' ? '180px' : '140px' }} 
                />
                <div className="p-3">
                  <p className="font-bold text-xs text-primary truncate">{item.name}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{item.category}</p>
                </div>
              </div>
              
              {/* Tag Overlay */}
              <div className="absolute top-2 right-2 flex flex-wrap justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="bg-black/70 text-white text-[8px] px-2 py-0.5 rounded-full backdrop-blur-md">
                          {tag}
                      </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredWardrobe.length === 0 && (
            <div className="flex flex-col items-center justify-center pt-20 text-gray-400">
                <Search size={48} className="mb-4 opacity-20" />
                <p className="text-sm font-medium">No items found.</p>
            </div>
        )}
      </div>
    </div>
  );
};