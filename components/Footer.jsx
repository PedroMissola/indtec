import React from 'react';
import { Wrench, Phone, MapPin, Clock, ArrowUp, Mail } from 'lucide-react';
import { COMPANY_INFO, WHATSAPP_NUMBER } from '@/data/mockData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = "Olá IND TEC! Gostaria de solicitar um orçamento.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer 
      className="w-full bg-background border-t border-border text-sm text-muted-foreground pt-16 pb-8"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Rodapé e informações de navegação</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="flex flex-col gap-5">
            <a 
              href="#" 
              className="flex items-center gap-2.5 text-2xl font-black tracking-tight text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-lg w-fit"
              aria-label="Voltar ao início da página"
            >
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                <Wrench className="w-4 h-4" aria-hidden="true" />
              </div>
              <span>IND <span className="text-primary">TEC</span></span>
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Referência em reparo de eletrônicos premium em Campinas e região. Diagnóstico rápido, peças de procedência e garantia total.
            </p>
            
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="px-3 py-1.5 rounded-full border border-border bg-secondary text-foreground text-[11px] font-semibold tracking-wide">
                Laboratório Próprio
              </span>
              <span className="px-3 py-1.5 rounded-full border border-border bg-secondary text-primary text-[11px] font-semibold tracking-wide">
                Garantia até 1 ano
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground uppercase tracking-wider text-xs mb-5">
              Nossas Especialidades
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>Reparo de Celulares & iPhones</li>
              <li>Manutenção & Upgrade de Notebooks</li>
              <li>Montagem de PC Gamer & Workstation</li>
              <li>Conserto de Consoles (PS5, Xbox, Switch)</li>
              <li>Aparelhos Seminovos Revisados</li>
            </ul>
          </div>

          <nav aria-label="Acesso Rápido">
            <h3 className="font-bold text-foreground uppercase tracking-wider text-xs mb-5">
              Acesso Rápido
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={handleWhatsApp} 
                  className="flex items-center hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md py-1"
                >
                  <span className="text-primary mr-2 font-bold">•</span> Solicitar Orçamento Rápido
                </button>
              </li>
              <li>
                <a href="#processo" className="flex items-center hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md py-1">
                  <span className="text-muted-foreground mr-2">•</span> Como Funciona o Atendimento
                </a>
              </li>
              <li>
                <a href="#sobre" className="flex items-center hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md py-1">
                  <span className="text-muted-foreground mr-2">•</span> Garantia e Termos Técnicos
                </a>
              </li>
              <li>
                <a href="#faq" className="flex items-center hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md py-1">
                  <span className="text-muted-foreground mr-2">•</span> Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="font-bold text-foreground uppercase tracking-wider text-xs mb-5">
              Atendimento & Loja
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address}, {COMPANY_INFO.neighborhood}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <span>{COMPANY_INFO.hoursWeekday}</span>
                  <span>{COMPANY_INFO.hoursSaturday}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                <span>contato@indtec.com.br</span>
              </li>
            </ul>
          </address>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs">
            © {new Date().getFullYear()} IND TEC. Todos os direitos reservados. CNPJ ativo em Campinas/SP.
          </p>
        </div>
      </div>
    </footer>
  );
}