import React from 'react';
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
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" id="sobre">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Coluna da Esquerda: Textos, Checklist e Botão */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Qualidade Comprovada</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 mt-1">
              Confiança e Qualidade
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed font-normal">
              Trabalhamos com transparência e rastreamento em cada etapa. Nossos laboratórios são equipados para resolver desde manutenções preventivas até reparos complexos em placas SMD.
            </p>

            <ul className="flex flex-col gap-4 text-base text-foreground font-medium mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Peças de alta qualidade (Originais & Linha Premium)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Técnicos certificados e especialistas em microeletrônica</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Laboratório próprio com maquinário de alta precisão</span>
              </li>
            </ul>

            <Button
              onClick={handleWhatsApp}
              variant="frosted"
              className="rounded-full px-6 py-6 text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span>Solicitar avaliação técnica</span>
            </Button>
          </div>

          {/* Coluna da Direita: Card de Vídeo com Botão Play */}
          <div 
            onClick={onOpenVideo}
            className="w-full aspect-video bg-card rounded-[24px] flex items-center justify-center border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-2xl"
          >
            <img 
              src={LAB_IMAGE_URL} 
              alt="Laboratório IND TEC Preview" 
              className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

            <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl text-primary-foreground">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>

            <div className="absolute bottom-4 left-6 right-6 z-10 flex items-center justify-between text-xs text-foreground">
              <span className="font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Conheça nossos laboratórios
              </span>
              <span className="text-muted-foreground">Vídeo institucional</span>
            </div>
          </div>
        </div>

        {/* Banner Inferior de Garantia */}
        <div className="w-full bg-card border border-border py-8 px-6 rounded-[24px] text-center flex flex-col md:flex-row items-center justify-center gap-4 shadow-xl backdrop-blur-xl">
          <Shield className="w-10 h-10 flex-shrink-0 text-primary" />
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Garantia de 90 dias a até 1 ano em todos os serviços executados.
          </span>
        </div>
      </div>
    </section>
  );
}