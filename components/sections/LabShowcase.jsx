import React from 'react';
import Image from 'next/image';
import { Cpu, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { LAB_GALLERY_IMAGES } from '@/data/mockData';

export function LabShowcase() {
  const projetos = [
    { id: 1, titulo: "Estações JBC & Quick", descricao: "Controle microprocessado de temperatura para solda BGA sem danificar trilhas." },
    { id: 2, titulo: "Microscópios Ópticos 45X", descricao: "Inspeção cirúrgica de componentes SMD menores que um grão de areia." },
    { id: 3, titulo: "Ambiente ESD Certificado", descricao: "Bancadas e pisos 100% protegidos contra descargas eletrostáticas." },
    { id: 4, titulo: "Câmera Térmica Flir", descricao: "Localização instantânea de componentes em curto por mapa de calor térmico." },
  ];

  const fotosLaboratorio = LAB_GALLERY_IMAGES || [
    'https://picsum.photos/seed/lab1/1200/800',
    'https://picsum.photos/seed/lab2/1200/800',
    'https://picsum.photos/seed/lab3/1200/800',
  ];

  return (
    <section 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" 
      id="galeria"
      aria-labelledby="galeria-title"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Infraestrutura de Ponta</span>
          <h2 id="galeria-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-1">
            Excelência em cada detalhe
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Nossos laboratórios são equipados com o que há de mais moderno em tecnologia e segurança eletrostática.
        </p>
      </div>

      <div 
        className="relative rounded-[28px] overflow-hidden border border-border shadow-2xl bg-card mb-10 group"
        aria-label="Galeria de fotos do laboratório IND TEC"
        role="region"
      >
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {fotosLaboratorio.map((foto, index) => (
              <CarouselItem key={index} className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-21/9">
                <Image
                  src={foto}
                  alt={`Instalações de alta precisão do laboratório IND TEC - Ângulo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-cover"
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 bg-background/80 hover:bg-background focus:ring-4 focus:ring-primary focus:outline-none" 
            aria-label="Ver foto anterior do laboratório" 
          />
          <CarouselNext 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 bg-background/80 hover:bg-background focus:ring-4 focus:ring-primary focus:outline-none" 
            aria-label="Ver próxima foto do laboratório" 
          />
        </Carousel>

        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-card/90 backdrop-blur-xl border border-border z-20 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <Cpu className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Laboratório Nível 3 (Clean Room)</p>
              <p className="text-xs text-muted-foreground">Capacidade para 60+ reparos simultâneos</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> Microscópios 4K</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> Câmeras Térmicas</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" aria-hidden="true" /> Proteção ESD Total</span>
          </div>
        </div>
      </div>

      <div 
        className="relative" 
        aria-label="Destaques tecnológicos da infraestrutura"
        role="region"
      >
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
                <Card className="h-full flex flex-col justify-between p-6 bg-card border-border hover:border-primary/40 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 font-bold text-sm" aria-hidden="true">
                      0{projeto.id}
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{projeto.titulo}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {projeto.descricao}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center gap-1 text-xs font-semibold text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    Padrão Industrial
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-background hover:bg-secondary focus:ring-2 focus:ring-primary focus:outline-none" 
            aria-label="Destaque técnico anterior" 
          />
          <CarouselNext 
            className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-background hover:bg-secondary focus:ring-2 focus:ring-primary focus:outline-none" 
            aria-label="Próximo destaque técnico" 
          />
        </Carousel>
      </div>
    </section>
  );
}