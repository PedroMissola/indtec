import React, { useState } from 'react';
import { X, Search, AlertCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SAMPLE_ORDERS } from '@/data/mockData';

export function TrackingModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (codeToSearch) => {
    const target = (codeToSearch || query).trim().toUpperCase();
    setHasSearched(true);
    setResult(SAMPLE_ORDERS[target] || null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-card border border-border rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-foreground mb-4">Rastrear Ordem de Serviço (OS)</h2>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Digite o código (Ex: IND-8492)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:border-primary outline-none uppercase"
          />
          <Button onClick={() => handleSearch()} variant="accent">Buscar</Button>
        </div>

        {result ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-secondary border border-border">
              <h3 className="text-lg font-bold text-foreground">{result.device}</h3>
              <p className="text-sm text-primary font-bold">{result.statusText}</p>
            </div>
            <div className="space-y-2">
              {result.steps.map((step, idx) => (
                <div key={idx} className={`p-3 rounded-xl border ${step.completed ? 'bg-primary/10 border-primary/30 text-foreground' : 'bg-background border-border text-muted-foreground'}`}>
                  <p className="font-semibold text-sm">{step.title}</p>
                  <p className="text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : hasSearched ? (
          <div className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
            <p className="text-foreground font-bold">OS Não Encontrada</p>
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Insira o número da OS para consultar o status.</p>
          </div>
        )}
      </div>
    </div>
  );
}