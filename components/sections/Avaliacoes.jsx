import React from 'react';
import { Star, CheckCircle2, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { TESTIMONIALS_DATA, COMPANY_INFO, WHATSAPP_NUMBER } from '@/data/mockData';

export function Avaliacoes() {
  const handleWhatsApp = () => {
    const text = "Olá IND TEC! Vi as avaliações no site e gostaria de solicitar um orçamento.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" 
      id="depoimentos"
      aria-labelledby="avaliacoes-title"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Prova Social</span>
        <h2 id="avaliacoes-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 mt-1">
          O que dizem nossos clientes
        </h2>

        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground shadow-sm"
          aria-label={`Classificação de ${COMPANY_INFO.googleRating} estrelas no Google com ${COMPANY_INFO.googleReviewCount} avaliações reais`}
        >
          <div className="flex items-center gap-1" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-primary fill-primary" />
            ))}
          </div>
          <span className="font-bold" aria-hidden="true">{COMPANY_INFO.googleRating} no Google</span>
          <span className="opacity-50" aria-hidden="true">•</span>
          <span className="text-muted-foreground" aria-hidden="true">com {COMPANY_INFO.googleReviewCount} avaliações reais</span>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Avaliações recentes de clientes">
        {TESTIMONIALS_DATA.map((item) => (
          <li key={item.id} className="h-full">
            <Card className="p-6 sm:p-8 flex flex-col justify-between h-full bg-card border border-border">
              <div>
                <div className="flex items-center gap-1 mb-4" aria-hidden="true">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                  ))}
                </div>
                {/* Semântica de citação */}
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{item.text}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm" aria-hidden="true">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">{item.author}</h3>
                    <p className="text-[11px] text-muted-foreground">Cliente Verificado Google</p>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" aria-hidden="true" title="Verificado" />
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}