import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { LAB_VIDEO_URL } from '@/data/mockData'; 

export function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !document.fullscreenElement) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!playerRef.current) return;

    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch((err) => {
        console.error(`Erro ao tentar entrar em tela cheia: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div className="bg-card border border-border rounded-[28px] max-w-4xl w-full p-6 shadow-2xl relative overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted-foreground hover:text-foreground p-2 rounded-xl bg-secondary z-20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Fechar vídeo"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tour Técnico</span>
          <h3 id="video-modal-title" className="text-xl font-bold text-foreground mt-0.5">
            Conheça o Laboratório IND TEC
          </h3>
        </div>

        <div 
          ref={playerRef}
          className={`relative rounded-2xl overflow-hidden bg-black border border-border shadow-inner flex items-center justify-center group ${
            isFullscreen ? 'w-full h-full rounded-none border-none' : 'aspect-video'
          }`}
        >
          <video
            ref={videoRef}
            src={LAB_VIDEO_URL || "https://www.w3schools.com/html/mov_bbb.mp4"}
            className="w-full h-full object-cover"
            muted={isMuted}
            loop
            playsInline
            controls={false}
            onClick={togglePlay}
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background/90 via-background/20 to-transparent pointer-events-none" aria-hidden="true" />

          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            className={`absolute z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 active:scale-95 transition-all shadow-xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 animate-pulse'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" aria-hidden="true" />
            ) : (
              <Play className="w-7 h-7 fill-current ml-1" aria-hidden="true" />
            )}
          </button>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-foreground bg-secondary/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border">
            
            <div className="flex items-center gap-3">
              <span className="font-semibold text-primary">Processo de Bancada</span>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <span className="text-muted-foreground hidden sm:inline">Vídeo Institucional IND TEC</span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Ativar som" : "Silenciar áudio"}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-background/80 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {isMuted ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}
              </button>

              <button
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Sair da tela cheia" : "Entrar em tela cheia"}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-background/80 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" aria-hidden="true" /> : <Maximize className="w-4 h-4" aria-hidden="true" />}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}