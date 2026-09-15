'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3 } from 'lucide-react';
import { academy } from '../site-content';

const modalities = ['Jiu-Jitsu', 'Judô'] as const;
type Modality = typeof modalities[number];

function trainingContact(modality: Modality, audience: 'kids' | 'adults') {
  const message = audience === 'kids'
    ? `Olá! Quero conhecer as aulas de ${modality} Kids para meu filho ou minha filha. Como posso agendar uma aula experimental na FRONT39?`
    : `Olá! Quero treinar ${modality} na turma de adultos. Como posso agendar uma aula experimental na FRONT39?`;
  const url = new URL(academy.whatsapp);
  url.searchParams.set('text', message);
  return url.href;
}

export function TrainingChooser() {
  const [modality, setModality] = useState<Modality | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const lastChoice = useRef<Modality | null>(null);
  const choices = useRef<Partial<Record<Modality, HTMLButtonElement | null>>>({});

  useEffect(() => {
    if (!lastChoice.current) return;
    if (modality) heading.current?.focus({ preventScroll: true });
    else choices.current[lastChoice.current]?.focus({ preventScroll: true });
  }, [modality]);

  return <section className="bio-training-chooser" aria-labelledby="bio-training-title">
    <h2 className="eyebrow light bio-step-title" id="bio-training-title" ref={heading} tabIndex={-1}>
      {modality ? `${modality} / PARA QUEM É O TREINO?` : 'ENCONTRE SEU TREINO'}
    </h2>
    {modality ? <>
      <div className="bio-training-links">
        <a className="cta cta-white bio-training-link" href={trainingContact(modality, 'kids')} target="_blank" rel="noopener noreferrer"><span><span className="bio-action-title">Kids</span><span className="bio-action-description">Para meu filho ou minha filha</span></span><ArrowUpRight size={24} aria-hidden="true" /></a>
        <a className="cta cta-white bio-training-link" href={trainingContact(modality, 'adults')} target="_blank" rel="noopener noreferrer"><span><span className="bio-action-title">Adultos</span><span className="bio-action-description">Para mim</span></span><ArrowUpRight size={24} aria-hidden="true" /></a>
      </div>
      <button type="button" className="text-link bio-back" onClick={() => setModality(null)}><ArrowLeft size={17} aria-hidden="true" /> Voltar às modalidades</button>
    </> : <div className="bio-training-links">
      {modalities.map(option => <button key={option} type="button" className="cta cta-white bio-training-link" ref={element => { choices.current[option] = element; }} onClick={() => { lastChoice.current = option; setModality(option); }}><span><span className="bio-action-title">{option}</span><span className="bio-action-description">Escolher turma</span></span><ArrowRight size={24} aria-hidden="true" /></button>)}
      <button type="button" className="bio-unavailable" disabled><span>Treinamento funcional</span><span className="bio-soon"><Clock3 size={14} aria-hidden="true" /> Em breve</span></button>
    </div>}
  </section>;
}
