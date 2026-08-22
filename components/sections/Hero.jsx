import React from 'react';
import { Star, MessageSquare, ArrowRight, Zap, Clock, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '@/data/mockData';

export default function Hero() {
  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(WHATSAPP_DEFAULT_MSG);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleTracking = () => {
    const text = "Olá IND TEC! Gostaria de acompanhar o status do meu reparo.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header 
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 pb-16 md:pt-32 md:pb-16 text-center"
      aria-labelledby="hero-heading"
    >
      
      <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs mb-8 backdrop-blur-xl shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span className="font-semibold text-foreground">Laboratório Especializado em Campinas</span>
        </div>
        <span className="opacity-50 text-muted-foreground hidden sm:inline" aria-hidden="true">|</span>
        <div className="flex items-center gap-1.5 text-primary font-bold">
          <Zap className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
          <span>Atendimento no mesmo dia</span>
        </div>
      </div>

      <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto mb-6">
        Seu equipamento parou? <br className="hidden sm:block" />
        <span className="text-primary">A IND TEC resolve.</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        Celulares, notebooks, computadores e consoles. Diagnóstico cirúrgico, peças premium e reparos de alta precisão em Campinas.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <Button
          onClick={handleWhatsApp}
          variant="accent"
          size="lg"
          className="w-full sm:w-auto px-8 py-6 rounded-full text-base font-bold tracking-wide focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
        >
          Solicitar orçamento gratuito
          <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
        </Button>

        <Button
          onClick={handleTracking}
          variant="frosted"
          size="lg"
          className="w-full sm:w-auto px-8 py-6 rounded-full text-base font-semibold focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
        >
          Acompanhar meu Reparo
        </Button>
      </div>

      <div 
        className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground"
        aria-label="Classificação no Google Meu Negócio"
      >
        <div className="flex items-center gap-1" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-primary fill-primary" />
          ))}
        </div>
        <span className="font-bold text-foreground">{COMPANY_INFO.googleRating} no Google</span>
        <span className="opacity-50 hidden sm:inline" aria-hidden="true">•</span>
        <span>com {COMPANY_INFO.googleReviewCount} avaliações reais</span>
      </div>

      <ul 
        className="mt-16 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
        aria-label="Nossos principais diferenciais"
      >
        <li className="p-5 rounded-2xl bg-card border border-border backdrop-blur-md shadow-sm hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Diagnóstico</span>
          </div>
          <p className="text-sm font-bold text-foreground">Rápido em até 24h</p>
        </li>

        <li className="p-5 rounded-2xl bg-card border border-border backdrop-blur-md shadow-sm hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 text-primary mb-2">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Garantia</span>
          </div>
          <p className="text-sm font-bold text-foreground">90 dias a 1 ano</p>
        </li>

        <li className="p-5 rounded-2xl bg-card border border-border backdrop-blur-md shadow-sm hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Peças</span>
          </div>
          <p className="text-sm font-bold text-foreground">Originais & Premium</p>
        </li>

        <li className="p-5 rounded-2xl bg-card border border-border backdrop-blur-md shadow-sm hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Users className="w-4 h-4" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Equipe</span>
          </div>
          <p className="text-sm font-bold text-foreground">Técnicos Certificados</p>
        </li>
      </ul>

    </header>
  );
}