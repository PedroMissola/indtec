import React from 'react';
import { MessageSquare, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/data/mockData';

export function ComoFunciona() {
  const handleWhatsApp = (customMsg) => {
    const text = customMsg || "Olá IND TEC! Quero solicitar um orçamento.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const steps = [
    {
      num: '1',
      title: '1. Conte o problema',
      description: 'Envie o aparelho, modelo e o que aconteceu pelo WhatsApp.',
      icon: <MessageSquare className="w-6 h-6 text-primary" aria-hidden="true" />,
      action: 'Falar no WhatsApp',
      msg: 'Olá IND TEC! Meu aparelho apresentou um problema e quero relatar.',
      ariaLabel: 'Passo 1: Falar no WhatsApp para relatar o problema'
    },
    {
      num: '2',
      title: '2. Receba orientação',
      description: 'Nossa equipe analisa as informações e orienta o próximo passo.',
      icon: <Headphones className="w-6 h-6 text-primary" aria-hidden="true" />,
      action: 'Atendimento Rápido',
      msg: 'Olá IND TEC! Gostaria de uma orientação sobre o meu equipamento.',
      ariaLabel: 'Passo 2: Chamar no WhatsApp para receber orientação rápida'
    },
    {
      num: '3',
      title: '3. Aprove o serviço',
      description: 'Após o diagnóstico e orçamento, seguimos com o reparo autorizado.',
      icon: <CheckCircle2 className="w-6 h-6 text-primary" aria-hidden="true" />,
      action: 'Garantia e Segurança',
      msg: 'Olá IND TEC! Quero aprovar o orçamento e seguir com o conserto.',
      ariaLabel: 'Passo 3: Chamar no WhatsApp para aprovar serviço com garantia'
    }
  ];

  return (
    <section 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" 
      id="processo"
      aria-labelledby="processo-title"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Simples & Rápido</span>
        <h2 id="processo-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-1">
          Como Funciona
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mt-2">
          Do primeiro contato à entrega, você acompanha cada etapa com total segurança e clareza.
        </p>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10" aria-label="Passos do atendimento">
        {steps.map((step, idx) => (
          <li key={idx} className="h-full">
            <Card className="flex flex-col text-center p-6 sm:p-8 justify-between group h-full">
              <CardHeader className="p-0 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary border border-border group-hover:border-primary/50 group-hover:bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300">
                  {step.icon}
                </div>

                <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </CardTitle>

                <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 pt-4 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full w-full font-semibold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-card"
                  onClick={() => handleWhatsApp(step.msg)}
                  aria-label={step.ariaLabel}
                >
                  {step.action}
                </Button>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center">
        <Button
          variant="frosted"
          size="lg"
          className="rounded-full focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
          onClick={() => handleWhatsApp()}
        >
          <span>Iniciar diagnóstico agora mesmo</span>
          <ArrowRight className="w-4 h-4 ml-2 text-primary" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}