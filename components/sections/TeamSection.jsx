import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { User, Award, CheckCircle2, Linkedin, Instagram, Twitter, Github, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TeamSection({ members = [] }) {
  const [activeMember, setActiveMember] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeMember) {
        setActiveMember(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeMember]);

  const handleCardKeyDown = (e, member) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveMember(member);
    }
  };

  return (
    <section 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24" 
      id="equipe"
      aria-labelledby="equipe-title"
    >
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Corpo Técnico</span>
        <h2 id="equipe-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 mt-1">
          Nossa Equipe
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Técnicos Certificados e Especialistas em Microeletrônica
        </p>
      </div>

      <ul 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full"
        aria-label="Membros da nossa equipe técnica"
      >
        {members.map((member) => (
          <li key={member.id} className="h-full">
            <Card
              role="button"
              tabIndex={0}
              onClick={() => setActiveMember(member)}
              onKeyDown={(e) => handleCardKeyDown(e, member)}
              aria-label={`Ver detalhes do técnico ${member.name}`}
              className="h-full rounded-[24px] overflow-hidden group hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col focus:outline-none focus:ring-4 focus:ring-primary/50 focus:border-transparent"
            >
              <div className="aspect-4/3 sm:aspect-square overflow-hidden bg-secondary relative flex items-center justify-center">
                {member.photoUrl ? (
                  <Image
                    src={member.photoUrl}
                    alt={`Técnico ${member.name} - IND TEC`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-b from-card to-background p-8">
                    <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center border border-border group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 mb-4 shadow-xl">
                      <User className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider text-center">Laboratório Apple & Games</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-md px-3 py-1 rounded-full border border-border flex items-center gap-1.5 text-xs text-primary font-semibold shadow-sm">
                  <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Certificado</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between bg-card">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties?.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-secondary text-foreground border border-border font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-primary font-bold group-hover:underline mt-2 w-full text-right sm:w-auto sm:mt-0">
                    + Detalhes
                  </span>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      {activeMember && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-member-name"
        >
          <div className="bg-card border border-primary/30 rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveMember(null)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground p-1.5 rounded-xl bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Fechar detalhes do membro"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-4 mb-6 mt-2 sm:mt-0">
              {activeMember.photoUrl ? (
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-primary/40 shrink-0">
                  <Image
                    src={activeMember.photoUrl}
                    alt={activeMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border shrink-0">
                  <User className="w-10 h-10" aria-hidden="true" />
                </div>
              )}
              <div>
                <h3 id="modal-member-name" className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                  {activeMember.name}
                </h3>
                <p className="text-sm text-primary font-semibold mt-1">{activeMember.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{activeMember.experience}</p>
              </div>
            </div>

            <p className="text-sm text-foreground leading-relaxed mb-6 bg-secondary p-4 rounded-xl border border-border shadow-inner">
              {activeMember.bio}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Especialidades e Certificações:
            </h4>
            <ul className="space-y-2 mb-6" aria-label={`Especialidades de ${activeMember.name}`}>
              {activeMember.specialties?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {activeMember.socials && (
              <div className="mb-6 pt-5 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Redes Sociais & Contato:
                </h4>
                <div className="flex items-center gap-3">
                  {activeMember.socials.linkedin && (
                    <a href={activeMember.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${activeMember.name}`} className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                      <Linkedin className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {activeMember.socials.instagram && (
                    <a href={activeMember.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${activeMember.name}`} className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                      <Instagram className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {activeMember.socials.twitter && (
                    <a href={activeMember.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label={`X/Twitter de ${activeMember.name}`} className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                      <Twitter className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {activeMember.socials.github && (
                    <a href={activeMember.socials.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${activeMember.name}`} className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                      <Github className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            )}

            <Button
              onClick={() => setActiveMember(null)}
              variant="accent"
              className="w-full font-bold text-sm py-5 mt-2 focus:outline-none focus:ring-4 focus:ring-primary/50"
            >
              Fechar Detalhes
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}