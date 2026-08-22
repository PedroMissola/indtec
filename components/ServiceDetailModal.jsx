import React from 'react';
import { X, CheckCircle2, Clock, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ServiceDetailModal({ service, onClose, onSelectQuote }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-card border border-border rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
        </div>

        <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-xl bg-secondary border border-border">
            <Clock className="w-4 h-4 text-primary mb-1" />
            <p className="text-sm font-bold text-foreground">{service.estimatedTime}</p>
          </div>
          <div className="p-4 rounded-xl bg-secondary border border-border">
            <Shield className="w-4 h-4 text-primary mb-1" />
            <p className="text-sm font-bold text-foreground">{service.warranty}</p>
          </div>
        </div>

        <ul className="space-y-2 mb-8">
          {service.commonIssues.map((issue, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{issue}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <Button onClick={() => { onClose(); onSelectQuote(service.title); }} variant="accent" className="flex-1">
            Pedir Orçamento
          </Button>
          <Button onClick={onClose} variant="frosted">Fechar</Button>
        </div>
      </div>
    </div>
  );
}