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
    <section className="w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="faq">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Tire suas Dúvidas</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 mt-1">
          Perguntas Frequentes
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Tudo o que você precisa saber antes de solicitar o seu atendimento.
        </p>
      </div>

      {/* Lista de Acordeão */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id || index}
              className="border border-border rounded-2xl bg-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Suporte Adicional */}
      <div className="mt-12 p-6 rounded-2xl bg-secondary border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="font-bold text-foreground text-sm">Ainda tem alguma dúvida?</h4>
          <p className="text-xs text-muted-foreground">Nossa equipe responde rapidinho no WhatsApp.</p>
        </div>
        <Button onClick={handleWhatsApp} variant="accent" size="sm" className="rounded-full">
          <MessageSquare className="w-4 h-4 mr-2" />
          Falar com Atendente
        </Button>
      </div>
    </section>
  );
}