import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, CreditCard, MessageSquare, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, WHATSAPP_NUMBER, LAB_IMAGE_URL } from '@/data/mockData';

export function LocationSection() {
  const handleWhatsApp = () => {
    const text = "Olá IND TEC! Gostaria de saber como chegar na loja.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" 
      id="onde-estamos"
      aria-labelledby="location-title"
    >
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Nossa Estrutura</span>
        <h2 id="location-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 mt-1">
          Onde Estamos
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Faça-nos uma visita. Nosso laboratório está de portas abertas para receber seu equipamento.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <div className="lg:col-span-5 space-y-8">
          <Card className="bg-card border border-border p-6 sm:p-8 rounded-[24px]">
            <ul className="space-y-6" aria-label="Informações de contato e endereço">
              
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-base">Endereço</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {COMPANY_INFO.address}<br />
                    {COMPANY_INFO.neighborhood}
                  </p>
                  <a 
                    href={COMPANY_INFO.googleMapsUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1 -ml-1"
                  >
                    Ver rotas no Google Maps <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </li>

              {/* Horários */}
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-base">Horário de Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    {COMPANY_INFO.hoursWeekday}<br />
                    {COMPANY_INFO.hoursSaturday}
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CreditCard className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-base">Formas de Pagamento</h3>
                  <p className="text-sm text-muted-foreground">
                    Débito, Crédito, Dinheiro e Pix.
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-8 mt-8 border-t border-border">
              <Button 
                onClick={handleWhatsApp} 
                variant="accent" 
                className="w-full py-6 text-sm font-bold rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-card"
              >
                <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                Dúvidas de como chegar?
              </Button>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-7 relative w-full h-100 sm:h-125 lg:h-full min-h-100 rounded-[28px] overflow-hidden border border-border group">
          
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.address + ' ' + COMPANY_INFO.neighborhood)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="absolute inset-0 w-full h-full focus:outline-none focus:ring-4 focus:ring-primary inset-ring"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Localização IND TEC no mapa interativo"
          ></iframe>

          <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-[320px] bg-card/95 backdrop-blur-xl border border-border p-4 rounded-2xl shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 pointer-events-none" aria-hidden="true">
            <div className="flex gap-4 items-center mb-3">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-secondary border border-border shrink-0">
                <Image 
                  src={LAB_IMAGE_URL || '/placeholder-location.jpg'} 
                  alt="" 
                  fill
                  sizes="64px"
                  className="object-cover" 
                />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground leading-tight mb-1">{COMPANY_INFO.name}</p>
                <p className="text-[10px] text-muted-foreground">Assistência Técnica e Eletrônicos premium</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] px-2 py-1 rounded-md bg-secondary text-foreground border border-border font-medium">Laboratório Próprio</span>
                <span className="text-[10px] px-2 py-1 rounded-md bg-secondary text-foreground border border-border font-medium">Estacionamento</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}