import React, { useState } from 'react';
import { Menu, X, MessageSquare, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Ação direta para o WhatsApp conforme o escopo do projeto
  const handleWhatsApp = () => {
    const text = "Olá IND TEC! Quero solicitar um orçamento.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5519953243237?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#processo' },
    { name: 'Estrutura', href: '#sobre' },
    { name: 'Avaliações', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#onde-estamos' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-2xl font-black tracking-tight group cursor-pointer text-foreground"
        >
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
            <Wrench className="w-5 h-5" />
          </div>
          <span>
            IND <span className="text-primary">TEC</span>
          </span>
        </a>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-7 text-[14px] font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Ações Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="default"
            className="rounded-full font-bold px-6"
            onClick={handleWhatsApp}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Solicitar Orçamento
          </Button>
        </div>

        {/* Botão Menu Mobile */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Gaveta (Mobile) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4">
            <Button
              variant="default"
              onClick={() => { setMobileMenuOpen(false); handleWhatsApp(); }}
              className="w-full font-bold"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}