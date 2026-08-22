import React, { useState } from 'react';
import { User, Award, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { X } from 'lucide-react';

export function TeamSection({ members = [] }) {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" id="equipe">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Corpo Técnico</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 mt-1">
          Nossa Equipe
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Técnicos Certificados e Especialistas em Microeletrônica
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {members.map((member) => (
          <Card
            key={member.id}
            onClick={() => setActiveMember(member)}
            className="rounded-[24px] overflow-hidden group hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Foto ou Placeholder */}
            <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-secondary relative flex items-center justify-center">
              {member.photoUrl ? (
                <img
                  src={member.photoUrl}
                  alt={`Técnico ${member.name} - IND TEC`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-card to-background p-8">
                  <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center border border-border group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 mb-4 shadow-xl">
                    <User className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Laboratório Apple & Games</span>
                </div>
              )}

              {/* Badge de Certificado */}
              <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-md px-3 py-1 rounded-full border border-border flex items-center gap-1.5 text-xs text-primary font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Certificado</span>
              </div>
            </div>

            {/* Informações do Membro */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
              </div>

              {/* Especialidades e Link de Detalhes */}
              <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties?.slice(0, 2).map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground border border-border"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-primary font-semibold hover:underline">+ Detalhes</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal de Detalhes do Membro */}
      {activeMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-card border border-primary/30 rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveMember(null)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground p-1.5 rounded-xl bg-secondary"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              {activeMember.photoUrl ? (
                <img
                  src={activeMember.photoUrl}
                  alt={activeMember.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-primary/40"
                />
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border">
                  <User className="w-10 h-10" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-foreground">{activeMember.name}</h3>
                <p className="text-sm text-primary font-semibold">{activeMember.role}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{activeMember.experience}</p>
              </div>
            </div>

            <p className="text-sm text-foreground leading-relaxed mb-6 bg-secondary p-4 rounded-xl border border-border">
              {activeMember.bio}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Especialidades e Certificações:
            </h4>
            <ul className="space-y-2 mb-6">
              {activeMember.specialties?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Redes Sociais */}
            {activeMember.socials && (
              <div className="mb-6 pt-4 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Redes Sociais & Contato:
                </h4>
                <div className="flex items-center gap-3">
                  {activeMember.socials.linkedin && (
                    <a href={activeMember.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {activeMember.socials.instagram && (
                    <a href={activeMember.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {activeMember.socials.twitter && (
                    <a href={activeMember.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {activeMember.socials.github && (
                    <a href={activeMember.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            )}

            <Button
              onClick={() => setActiveMember(null)}
              variant="accent"
              className="w-full font-bold text-sm"
            >
              Fechar Detalhes
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}