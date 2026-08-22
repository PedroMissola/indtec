import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/data/mockData';

export function Faq({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0); // Deixa o primeiro item aberto por padrão

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsApp = () => {
    const text = "Olá IND TEC! Tenho uma dúvida que não estava no FAQ.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="w-full max-w-225 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" 
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Tire suas Dúvidas</span>
        <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 mt-1">
          Perguntas Frequentes
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Tudo o que você precisa saber antes de solicitar o seu atendimento.
        </p>
      </div>

      <div className="space-y-4" aria-label="Lista de Perguntas Frequentes">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `faq-button-${index}`;
          const contentId = `faq-content-${index}`;

          return (
            <div
              key={faq.id || index}
              className="border border-border rounded-2xl bg-card overflow-hidden transition-all duration-300"
            >
              <h3 className="w-full m-0 p-0 text-base sm:text-lg">
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-foreground hover:text-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                    aria-hidden="true" 
                  />
                </button>
              </h3>

              {isOpen && (
                <div 
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-6 pb-6 pt-0 text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-200"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-secondary border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="font-bold text-foreground text-sm">Ainda tem alguma dúvida?</h4>
          <p className="text-xs text-muted-foreground">Nossa equipe responde rapidinho no WhatsApp.</p>
        </div>
        <Button 
          onClick={handleWhatsApp} 
          variant="accent" 
          size="sm" 
          className="rounded-full focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-secondary"
        >
          <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
          Falar com Atendente
        </Button>
      </div>
    </section>
  );
}