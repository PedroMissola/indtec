import React, { useState } from 'react';
import { X, Play, Pause } from 'lucide-react';
import { LAB_IMAGE_URL } from '@/data/mockData';

export function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm animate-in fade-in">
      <div className="bg-card border border-border rounded-3xl max-w-3xl w-full p-6 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-5 right-5 z-20 text-muted-foreground hover:text-foreground">
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-xl font-bold text-foreground mb-4">Conheça o Laboratório IND TEC</h3>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
          <img src={LAB_IMAGE_URL} alt="Lab" className={`w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? 'scale-105' : 'scale-100'}`} />
          
          <button onClick={() => setIsPlaying(!isPlaying)} className="absolute z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-xl hover:scale-110 transition-all">
            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
          </button>
        </div>
      </div>
    </div>
  );
}