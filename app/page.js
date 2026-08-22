"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Componentes Base (Já criados e ajustados)
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppButton';

// Seções (Mantidas comentadas para não gerar erros no terminal até criarmos)
import Hero from '@/components/sections/Hero';
// import { Servicos } from '@/components/sections/Servicos';
// import { ComoFunciona } from '@/components/sections/ComoFunciona';
// import { Confianca } from '@/components/sections/Confianca';
// import { Avaliacoes } from '@/components/sections/Avaliacoes';
// import { Faq } from '@/components/sections/Faq';
// import { Contato } from '@/components/sections/Contato';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground relative overflow-x-hidden">
      
      {/* Efeitos de Fundo do seu Tema */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[450px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(hsl(var(--primary)/0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none -z-10" />

      {/* Cabeçalho */}
      <Navbar />

      {/* Corpo da Página */}
      <main className="flex-1 relative z-10">
        
        {/* AS SEÇÕES ENTRARÃO AQUI UMA A UMA */}
        
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Hero />
        </motion.div> 
       

        {/* 
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Servicos />
        </motion.div> 
        */}

      </main>

      {/* Rodapé e Botão Flutuante */}
      <Footer />
      <WhatsAppFAB />
      
    </div>
  );
}