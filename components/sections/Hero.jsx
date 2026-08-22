import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '@/data/mockData';

export default function Hero() {
  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(WHATSAPP_DEFAULT_MSG);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
      
      {/* Badge Superior */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-semibold text-muted-foreground mb-8 backdrop-blur-xl shadow-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
        <span className="font-medium text-foreground">Assistência Especializada em Campinas/SP</span>
      </div>

      {/* Título Principal */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto mb-6">
        Seu equipamento parou? <br className="hidden sm:block" />
        <span className="text-primary">A IND TEC resolve.</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        Celulares, notebooks, computadores e consoles. Atendimento técnico, diagnóstico e reparos em um só lugar.
      </p>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <Button
          onClick={handleWhatsApp}
          variant="accent"
          size="lg"
          className="w-full sm:w-auto px-8 py-6 rounded-full text-base font-bold tracking-wide"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Solicitar orçamento
        </Button>

        <a href="#servicos" className="w-full sm:w-auto">
          <Button
            variant="frosted"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 rounded-full text-base font-semibold"
          >
            Ver especialidades
          </Button>
        </a>
      </div>

      {/* Prova Social */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-primary fill-primary" />
          ))}
        </div>
        <span className="font-semibold text-foreground">{COMPANY_INFO.googleRating} no Google</span>
        <span className="opacity-50">•</span>
        <span>com {COMPANY_INFO.googleReviewCount} avaliações</span>
      </div>
    </header>
  );
}