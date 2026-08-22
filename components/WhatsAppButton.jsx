import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/data/mockData';

export function WhatsAppFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const tooltipRef = useRef(null);

  const messages = [
    "Precisa de um diagnóstico rápido? Envie foto ou vídeo do seu aparelho para análise imediata!",
    "Dúvidas sobre o conserto? Fale com um de nossos especialistas agora mesmo e tire suas dúvidas.",
    "Seu equipamento parou? Solicite um orçamento sem compromisso e com garantia de até 1 ano."
  ];

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleWhatsApp = () => {
    const text = `Olá IND TEC! Vi a mensagem: "${messages[msgIndex]}" e gostaria de atendimento.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <div
        ref={tooltipRef}
        id="whatsapp-tooltip"
        role="dialog"
        aria-labelledby="wa-title"
        aria-describedby="wa-desc"
        aria-hidden={!isOpen}
        className={`mb-4 w-70 sm:w-[320px] bg-card border border-border rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <h3 id="wa-title" className="text-sm font-bold text-foreground">Técnicos Online</h3>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors w-8 h-8 flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
              aria-label="Fechar janela de contato"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div aria-live="polite" aria-atomic="true" className="min-h-18 mb-5 flex items-center">
            <p id="wa-desc" className="text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-500">
              {messages[msgIndex]}
            </p>
          </div>

          <Button
            onClick={handleWhatsApp}
            variant="accent"
            className="w-full font-bold py-6 text-sm"
          >
            <Send className="w-4 h-4 mr-2" />
            Iniciar Conversa
          </Button>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="whatsapp-tooltip"
        aria-label={isOpen ? "Fechar opções de contato" : "Abrir opções de atendimento pelo WhatsApp"}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 active:scale-95 transition-all duration-300 relative border border-primary/20 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-4 focus:ring-offset-background"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7 fill-current" />}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background animate-pulse" aria-hidden="true" />
        )}
      </button>
      
    </div>
  );
}