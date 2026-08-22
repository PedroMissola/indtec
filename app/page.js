"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS, FAQ_DATA } from '@/data/mockData';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppButton';
import Hero from '@/components/sections/Hero';

const Servicos = dynamic(() => import('@/components/sections/Servicos').then(mod => mod.Servicos));
const ComoFunciona = dynamic(() => import('@/components/sections/ComoFunciona').then(mod => mod.ComoFunciona));
const Showcase = dynamic(() => import('@/components/sections/LabShowcase').then(mod => mod.LabShowcase));
const Confianca = dynamic(() => import('@/components/sections/Confianca').then(mod => mod.Confianca));
const TeamSection = dynamic(() => import('@/components/sections/TeamSection').then(mod => mod.TeamSection));
const LocationSection = dynamic(() => import('@/components/sections/LocationSection').then(mod => mod.LocationSection));
const Avaliacoes = dynamic(() => import('@/components/sections/Avaliacoes').then(mod => mod.Avaliacoes));
const Faq = dynamic(() => import('@/components/sections/Faq').then(mod => mod.Faq));

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground relative overflow-x-hidden">
      <a 
        href="#conteudo-principal" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-100 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold shadow-xl outline-none focus:ring-4 focus:ring-foreground"
      >
        Pular para o conteúdo principal
      </a>

      {/* Efeitos de Fundo */}
      <div className="fixed top-0 left-1/4 w-150 h-112.5 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="fixed top-1/3 right-10 w-125 h-125 bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="fixed inset-0 bg-[radial-gradient(hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 pointer-events-none -z-10" aria-hidden="true" />

      <Navbar />

      <main id="conteudo-principal" className="flex-1 relative z-10" role="main">
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Hero />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Servicos />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ComoFunciona />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Showcase />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Confianca />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <TeamSection members={TEAM_MEMBERS} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <LocationSection />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Avaliacoes />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Faq faqs={FAQ_DATA} />
        </motion.div>

      </main>

      <Footer />
      <WhatsAppFAB />

    </div>
  );
}