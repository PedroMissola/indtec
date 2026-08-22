import React from 'react';
import { Smartphone, Laptop, Monitor, Gamepad2, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES_DATA, WHATSAPP_NUMBER } from '@/data/mockData';

export function Servicos() {
  // Função para mapear o ícone do mockData para o Lucide
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'smartphone':
        return <Smartphone className="w-7 h-7 text-primary" />;
      case 'laptop':
        return <Laptop className="w-7 h-7 text-primary" />;
      case 'monitor':
        return <Monitor className="w-7 h-7 text-primary" />;
      case 'gamepad-2':
        return <Gamepad2 className="w-7 h-7 text-primary" />;
      case 'sparkles':
        return <Sparkles className="w-7 h-7 text-primary" />;
      default:
        return <Smartphone className="w-7 h-7 text-primary" />;
    }
  };

  // Função para redirecionar ao WhatsApp com mensagem personalizada
  const handleWhatsApp = (serviceTitle) => {
    const text = `Olá IND TEC! Quero solicitar um orçamento para ${serviceTitle}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24">
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Soluções Completas</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-1">
            Especialidades e Serviços
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Equipe técnica qualificada para realizar consertos, manutenções preventivas e upgrades com peças de alta qualidade.
        </p>
      </div>

      {/* Grid Assimétrico: 2 em cima (span 3 cada) e 3 embaixo (span 2, 2 e 2 totalizando 6 colunas) */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {SERVICES_DATA.map((service, index) => {
          // Os dois primeiros cards ocupam metade da largura cada (md:col-span-3) -> 2 em cima
          // Os três seguintes ocupam um terço cada (md:col-span-2) -> 3 embaixo com tamanhos iguais
          const spanClass = index < 2 ? "md:col-span-3" : "md:col-span-2";

          return (
            <Card key={service.id} className={`flex flex-col h-full group justify-between ${spanClass}`}>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm mt-2 leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-4">
                <Button
                  variant="outline"
                  className="w-full font-bold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  onClick={() => handleWhatsApp(service.title)}
                >
                  Fazer Orçamento
                  <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}