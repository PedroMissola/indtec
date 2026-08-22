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
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      action: 'Falar no WhatsApp',
      msg: 'Olá IND TEC! Meu aparelho apresentou um problema e quero relatar.'
    },
    {
      num: '2',
      title: '2. Receba orientação',
      description: 'Nossa equipe analisa as informações e orienta o próximo passo.',
      icon: <Headphones className="w-6 h-6 text-primary" />,
      action: 'Atendimento Rápido',
      msg: 'Olá IND TEC! Gostaria de uma orientação sobre o meu equipamento.'
    },
    {
      num: '3',
      title: '3. Aprove o serviço',
      description: 'Após o diagnóstico e orçamento, seguimos com o reparo autorizado.',
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      action: 'Garantia e Segurança',
      msg: 'Olá IND TEC! Quero aprovar o orçamento e seguir com o conserto.'
    }
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" id="processo">
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Simples & Rápido</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-1">
          Como Funciona
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mt-2">
          Do primeiro contato à entrega, você acompanha cada etapa com total segurança e clareza.
        </p>
      </div>

      {/* Grid de Passos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {steps.map((step, idx) => (
          <Card key={idx} className="flex flex-col text-center p-6 sm:p-8 justify-between group">
            <CardHeader className="p-0 flex flex-col items-center">
              {/* Círculo com o ícone / número */}
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

            <CardContent className="p-0 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full w-full font-semibold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                onClick={() => handleWhatsApp(step.msg)}
              >
                {step.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rodapé da Seção com CTA */}
      <div className="mt-12 text-center">
        <Button
          variant="frosted"
          size="lg"
          className="rounded-full"
          onClick={() => handleWhatsApp()}
        >
          <span>Iniciar diagnóstico agora mesmo</span>
          <ArrowRight className="w-4 h-4 ml-2 text-primary" />
        </Button>
      </div>
    </section>
  );
}