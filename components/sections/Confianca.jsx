import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Shield, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LAB_IMAGE_URL, WHATSAPP_NUMBER } from '@/data/mockData';

export function Confianca({ onOpenVideo }) {
  const handleWhatsApp = () => {
    const text = "Olá IND TEC! Gostaria de solicitar uma avaliação técnica.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" 
      id="sobre"
      aria-labelledby="confianca-title"
    >
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Qualidade Comprovada</span>
            <h2 id="confianca-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 mt-1">
              Confiança e Qualidade
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed font-normal">
              Trabalhamos com transparência e rastreamento em cada etapa. Nossos laboratórios são equipados para resolver desde manutenções preventivas até reparos complexos em placas SMD.
            </p>

            <ul className="flex flex-col gap-4 text-base text-foreground font-medium mb-8" aria-label="Nossos diferenciais de qualidade">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <span>Peças de alta qualidade (Originais & Linha Premium)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <span>Técnicos certificados e especialistas em microeletrônica</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <span>Laboratório próprio com maquinário de alta precisão</span>
              </li>
            </ul>

            <Button
              onClick={handleWhatsApp}
              variant="frosted"
              className="rounded-full px-6 py-6 text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            >
              <Sparkles className="w-4 h-4 text-primary mr-2" aria-hidden="true" />
              <span>Solicitar avaliação técnica</span>
            </Button>
          </div>

          <button 
            type="button"
            onClick={onOpenVideo}
            aria-label="Reproduzir vídeo institucional: Conheça nossos laboratórios"
            className="w-full aspect-video bg-card rounded-[24px] flex items-center justify-center border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background text-left"
          >
            <div className="absolute inset-0 w-full h-full opacity-45 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500">
              <Image 
                src={LAB_IMAGE_URL || '/placeholder-video.jpg'} 
                alt="Pré-visualização do vídeo do laboratório IND TEC" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl text-primary-foreground">
              <Play className="w-8 h-8 fill-current ml-1" aria-hidden="true" />
            </div>

            <div className="absolute bottom-4 left-6 right-6 z-10 flex items-center justify-between text-xs text-foreground">
              <span className="font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                Conheça nossos laboratórios
              </span>
              <span className="text-muted-foreground">Vídeo institucional</span>
            </div>
          </button>
        </div>

        <div className="w-full bg-card border border-border py-8 px-6 rounded-[24px] text-center flex flex-col md:flex-row items-center justify-center gap-4 shadow-xl backdrop-blur-xl">
          <Shield className="w-10 h-10 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Garantia de 90 dias a até 1 ano em todos os serviços executados.
          </span>
        </div>
      </div>
    </section>
  );
}