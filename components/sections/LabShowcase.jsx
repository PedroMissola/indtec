import React from 'react';
import { Cpu, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export function LabShowcase() {
  const projetos = [
    { id: 1, titulo: "Estações JBC & Quick", descricao: "Controle microprocessado de temperatura para solda BGA sem danificar trilhas." },
    { id: 2, titulo: "Microscópios Ópticos 45X", descricao: "Inspeção cirúrgica de componentes SMD menores que um grão de areia." },
    { id: 3, titulo: "Ambiente ESD Certificado", descricao: "Bancadas e pisos 100% protegidos contra descargas eletrostáticas." },
    { id: 4, titulo: "Câmera Térmica Flir", descricao: "Localização instantânea de componentes em curto por mapa de calor térmico." },
  ];

  // Array com 10 imagens (substitua pelas URLs reais do laboratório)
  const fotosLaboratorio = [
    'https://picsum.photos/seed/lab1/600/400',
    'https://picsum.photos/seed/lab2/600/400',
    'https://picsum.photos/seed/lab3/600/400',
    'https://picsum.photos/seed/lab4/600/400',
    'https://picsum.photos/seed/lab5/600/400',
    'https://picsum.photos/seed/lab6/600/400',
    'https://picsum.photos/seed/lab7/600/400',
    'https://picsum.photos/seed/lab8/600/400',
    'https://picsum.photos/seed/lab9/600/400',
    'https://picsum.photos/seed/lab10/600/400',
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" id="galeria">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Infraestrutura de Ponta</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-1">
            Excelência em cada detalhe
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Nossos laboratórios são equipados com o que há de mais moderno em tecnologia e segurança eletrostática.
        </p>
      </div>

      <div className="relative rounded-[28px] overflow-hidden border border-border shadow-2xl bg-card mb-10">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full aspect-[3/2]"
        >
          <CarouselContent>
            {fotosLaboratorio.map((foto, index) => (
              <CarouselItem key={index} className="relative">
                <img
                  src={foto}
                  alt={`Laboratório IND TEC - foto ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12" />
        </Carousel>

        {/* Gradiente e overlay de informações (ficam por cima do carrossel) */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent pointer-events-none z-10" /> */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-card/90 backdrop-blur-xl border border-border z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Laboratório Nível 3 (Clean Room)</p>
              <p className="text-xs text-muted-foreground">Capacidade para 60+ reparos simultâneos</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" /> Microscópios 4K</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" /> Câmeras Térmicas</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" /> Proteção ESD Total</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projetos.map((projeto) => (
              <CarouselItem key={projeto.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full flex flex-col justify-between p-6">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 font-bold text-sm">
                      0{projeto.id}
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{projeto.titulo}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {projeto.descricao}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center gap-1 text-xs font-semibold text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Padrão Industrial
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}