import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/data/mockData';

export function QuoteModal({ isOpen, onClose, initialService }) {
  const [deviceType, setDeviceType] = useState('Celulares');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setDeviceType(initialService);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const issueOptions = {
    Celulares: ['Tela Quebrada', 'Bateria Descarregando Rápido', 'Não Liga / Curto', 'Caiu na Água'],
    Notebooks: ['Lentidão / Upgrade SSD', 'Superaquecimento', 'Tela Quebrada', 'Não Liga'],
    Computadores: ['Montagem de PC', 'Formatação', 'Travamentos / Tela Azul', 'Upgrade de Peças'],
    Consoles: ['Conector HDMI', 'Superaquecimento', 'Controle com Drift', 'Não Lê Discos'],
    Seminovos: ['Interesse em iPhone', 'Interesse em Notebook', 'Avaliar meu Usado']
  };

  const currentIssues = issueOptions[deviceType] || issueOptions['Celulares'];

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const issuesText = selectedIssues.length > 0 ? selectedIssues.join(', ') : 'Não especificado';
    const message = `*SOLICITAÇÃO DE ORÇAMENTO - IND TEC* \nCliente: ${name}\nTipo: ${deviceType}\nModelo: ${deviceModel}\nProblemas: ${issuesText}\nDescrição: ${problemDescription}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-card border border-border rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Orçamento Encaminhado!</h3>
            <p className="text-muted-foreground text-sm mb-6">Sua solicitação foi enviada no WhatsApp. Responderemos em instantes.</p>
            <Button onClick={() => { setSubmitted(false); onClose(); }} variant="accent">Concluir</Button>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Solicitar Orçamento</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.keys(issueOptions).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => { setDeviceType(type); setSelectedIssues([]); }}
                  className={`p-3 rounded-xl text-xs font-bold border transition-colors ${deviceType === type ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary text-muted-foreground border-border'}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" required placeholder="Marca e Modelo" value={deviceModel} onChange={(e) => setDeviceModel(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:border-primary outline-none" />
              <input type="text" required placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:border-primary outline-none" />
            </div>

            <div className="flex flex-wrap gap-2">
              {currentIssues.map((issue) => (
                <button type="button" key={issue} onClick={() => setSelectedIssues(prev => prev.includes(issue) ? prev.filter(i => i !== issue) : [...prev, issue])} className={`text-xs px-3 py-2 rounded-lg border ${selectedIssues.includes(issue) ? 'bg-primary/20 text-primary border-primary' : 'bg-secondary text-muted-foreground border-border'}`}>
                  {issue}
                </button>
              ))}
            </div>

            <textarea rows={2} placeholder="Detalhes adicionais (opcional)" value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:border-primary outline-none resize-none" />

            <div className="flex gap-3 pt-2">
              <Button type="submit" variant="accent" className="flex-1">Enviar para o WhatsApp</Button>
              <Button type="button" variant="frosted" onClick={onClose}>Cancelar</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}