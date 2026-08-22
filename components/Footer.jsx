import React from 'react';
import { Wrench, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-background border-t border-border text-xs text-muted-foreground pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Marca */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5 text-2xl font-black tracking-tight text-foreground">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                <Wrench className="w-4 h-4" />
              </div>
              <span>IND <span className="text-primary">TEC</span></span>
            </a>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Celulares, notebooks, computadores e consoles. Atendimento técnico, diagnóstico e reparos em um só lugar.
            </p>
          </div>

          {/* Coluna 2: Especialidades */}
          <div>
            <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-4">
              Equipamentos
            </h4>
            <ul className="space-y-2.5">
              <li><span className="text-muted-foreground">Reparo de Celulares</span></li>
              <li><span className="text-muted-foreground">Reparo de Notebooks</span></li>
              <li><span className="text-muted-foreground">Manutenção de Computadores</span></li>
              <li><span className="text-muted-foreground">Conserto de Consoles</span></li>
              <li><span className="text-muted-foreground">Aparelhos Seminovos</span></li>
            </ul>
          </div>

          {/* Coluna 3: Acesso Rápido */}
          <div>
            <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-4">
              Acesso Rápido
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">Serviços e Especialidades</a>
              </li>
              <li>
                <a href="#processo" className="hover:text-primary transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary transition-colors">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">Perguntas Frequentes (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento & Loja */}
          <div>
            <h4 className="font-bold text-foreground uppercase tracking-wider text-xs mb-4">
              Atendimento & Loja
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Av. Jorge Tibiriçá, 1050 - Jardim dos Oliveiras — Campinas/SP</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>Seg a sex: 09h às 18h</span>
                  <span>Sábado: 09h às 13h</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(19) 95324-3237</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>IND TEC — Assistência Técnica e Eletrônicos, © 2026 • Campinas/SP</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors p-2 rounded-xl bg-secondary border border-border"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}