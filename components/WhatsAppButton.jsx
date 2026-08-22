import React from 'react';
import { MessageSquare } from 'lucide-react';

export function WhatsAppFAB() {
  const handleWhatsApp = () => {
    const text = "Olá IND TEC! Quero solicitar um orçamento.";
    const encoded = encodeURIComponent(text);
    // Direciona para o número e mensagem corretos
    window.open(`https://wa.me/5519953243237?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 active:scale-95 transition-all duration-300 relative border border-primary/20"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
        {/* Ponto de notificação pulsante para chamar atenção */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background animate-pulse" />
      </button>
    </div>
  );
}