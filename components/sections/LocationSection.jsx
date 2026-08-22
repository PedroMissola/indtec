import React from 'react';
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
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" id="onde-estamos">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Nossa Estrutura</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 mt-1">
          Onde Estamos
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Faça-nos uma visita. Nosso laboratório está de portas abertas para receber seu equipamento.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Coluna da Esquerda: Informações de Contato */}
        <div className="lg:col-span-5 space-y-8">
          <Card className="bg-card border border-border p-6 sm:p-8 rounded-[24px]">
            <ul className="space-y-6">
              
              {/* Endereço */}
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Endereço</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {COMPANY_INFO.address}<br />
                    {COMPANY_INFO.neighborhood}
                  </p>
                  <a 
                    href={COMPANY_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-primary hover:underline"
                  >
                    Ver rotas no Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>

              {/* Horários */}
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Horário de Atendimento</h4>
                  <p className="text-sm text-muted-foreground">
                    {COMPANY_INFO.hoursWeekday}<br />
                    {COMPANY_INFO.hoursSaturday}
                  </p>
                </div>
              </li>

              {/* Pagamento */}
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Formas de Pagamento</h4>
                  <p className="text-sm text-muted-foreground">
                    Débito, Crédito, Dinheiro e Pix.
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-8 mt-8 border-t border-border">
              <Button onClick={handleWhatsApp} variant="accent" className="w-full py-6 text-sm font-bold rounded-xl">
                <MessageSquare className="w-4 h-4 mr-2" />
                Dúvidas de como chegar?
              </Button>
            </div>
          </Card>
        </div>

        {/* Coluna da Direita: Mapa e Card Flutuante (Baseado na sua referência) */}
        <div className="lg:col-span-7 relative w-full h-[400px] sm:h-[500px] lg:h-full min-h-[400px] rounded-[28px] overflow-hidden border border-border group">
          
          {/* Iframe do Mapa */}
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.address + ' ' + COMPANY_INFO.neighborhood)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Localização IND TEC no mapa"
          ></iframe>

          {/* Efeito de borda interna escurecida para mesclar com o tema dark */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />

          {/* Card Flutuante simulando o "card-local" */}
          <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-[320px] bg-card/95 backdrop-blur-xl border border-border p-4 rounded-2xl shadow-2xl transition-transform duration-300 group-hover:-translate-y-2" aria-hidden="true">
            <div className="flex gap-4 items-center mb-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-secondary border border-border flex-shrink-0">
                {/* Aqui usamos a foto da loja, se houver, ou a imagem geral do lab */}
                <img src={LAB_IMAGE_URL} alt="Fachada da loja" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground leading-tight mb-1">{COMPANY_INFO.name}</h3>
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