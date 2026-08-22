import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, WHATSAPP_NUMBER } from '@/data/mockData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = "Olá IND TEC! Quero solicitar um orçamento.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#processo' },
    { name: 'Estrutura', href: '#sobre' },
    { name: 'Avaliações', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#onde-estamos' },
  ];

  return (
    <nav 
      aria-label="Navegação principal" 
      className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-20 flex items-center justify-between">
        
        <a 
          href="#" 
          className="flex items-center gap-3 text-2xl font-black tracking-tight group cursor-pointer text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          aria-label={`Página inicial da ${COMPANY_INFO?.name || 'IND TEC'}`}
        >
          <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center rounded-xl bg-primary/10">
            <Image 
              src="/logo-ind-tec.png" 
              alt="Logotipo IND TEC" 
              fill
              sizes="40px"
              className="object-contain p-1"
              priority
            />
          </div>
          <span>
            IND <span className="text-primary">TEC</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-[14px] font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="default"
            className="rounded-full font-bold px-6 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            onClick={handleWhatsApp}
          >
            <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
            Solicitar Orçamento
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="menu-mobile"
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div 
        id="menu-mobile"
        hidden={!mobileMenuOpen}
        className={`md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-4 transition-all duration-200 ${
          mobileMenuOpen ? 'block animate-in slide-in-from-top-2' : 'hidden'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-border/50 focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2"
          >
            {link.name}
          </a>
        ))}

        <div className="pt-4">
          <Button
            variant="default"
            onClick={() => { setMobileMenuOpen(false); handleWhatsApp(); }}
            className="w-full font-bold focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </nav>
  );
}