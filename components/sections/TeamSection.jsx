import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { User, Award, CheckCircle2, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BrandIcon = ({ name, className, "aria-hidden": ariaHidden }) => {
  switch (name) {
    case 'linkedin':
      return (
        <svg className={className} aria-hidden={ariaHidden} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} aria-hidden={ariaHidden} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.79-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 1.79 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.781 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-1.778-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg className={className} aria-hidden={ariaHidden} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={className} aria-hidden={ariaHidden} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    default:
      return null;
  }
};

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
                      <BrandIcon name="linkedin" className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {activeMember.socials.instagram && (
                    <a href={activeMember.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${activeMember.name}`} className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                      <BrandIcon name="instagram" className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {activeMember.socials.twitter && (
                    <a href={activeMember.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label={`X/Twitter de ${activeMember.name}`} className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                      <BrandIcon name="twitter" className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  {activeMember.socials.github && (
                    <a href={activeMember.socials.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${activeMember.name}`} className="p-2 rounded-xl bg-secondary text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                      <BrandIcon name="github" className="w-5 h-5" aria-hidden="true" />
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