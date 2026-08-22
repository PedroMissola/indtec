import React from 'react';
import { Smartphone, Laptop, Monitor, Gamepad2, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES_DATA, WHATSAPP_NUMBER } from '@/data/mockData';

export function Servicos() {
  const getIcon = (iconName) => {
    const props = { className: "w-7 h-7 text-primary", "aria-hidden": "true" };
    switch (iconName) {
      case 'smartphone':
        return <Smartphone {...props} />;
      case 'laptop':
        return <Laptop {...props} />;
      case 'monitor':
        return <Monitor {...props} />;
      case 'gamepad-2':
        return <Gamepad2 {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      default:
        return <Smartphone {...props} />;
    }
  };

  const handleWhatsApp = (serviceTitle) => {
    const text = `Olá IND TEC! Quero solicitar um orçamento para ${serviceTitle}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="servicos" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24"
      aria-labelledby="servicos-title"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Soluções Completas</span>
          <h2 id="servicos-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-1">
            Especialidades e Serviços
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Equipe técnica qualificada para realizar consertos, manutenções preventivas e upgrades com peças de alta qualidade.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {SERVICES_DATA.map((service, index) => {
          const spanClass = index < 2 ? "md:col-span-3" : "md:col-span-2";

          return (
            <li key={service.id} className={spanClass}>
              <Card className="flex flex-col h-full group justify-between">
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
                    className="w-full font-bold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all focus:outline-none focus:ring-4 focus:ring-primary/50"
                    onClick={() => handleWhatsApp(service.title)}
                    aria-label={`Fazer Orçamento para ${service.title}`}
                  >
                    Fazer Orçamento
                    <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}