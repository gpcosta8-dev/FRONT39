import type { Metadata } from 'next';
import { ArrowUpRight, Clock3, Camera as Instagram } from 'lucide-react';
import Image from '../site-image';
import { Header, WhatsAppIcon } from '../site-ui';
import { Footer } from '../site-footer';
import { Location } from '../site-location';
import { academy } from '../site-content';
import { sitePath, siteUrl } from '@/lib/site-url';
import './bio.css';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Seu primeiro passo | FRONT39',
  description: 'Conheça os treinos de Jiu-Jitsu e Judô da FRONT39, converse com a equipe e encontre a academia em Cachoeirinha.',
  alternates: { canonical: `${siteUrl}/bio/` },
  openGraph: { title: 'Seu primeiro passo | FRONT39', description: 'Um tempo para você. Um lugar para começar. Conheça os treinos da FRONT39.', url: `${siteUrl}/bio/`, type: 'website', locale: 'pt_BR', siteName: 'FRONT39' },
  twitter: { card: 'summary', title: 'Seu primeiro passo | FRONT39', description: 'Conheça os treinos da FRONT39 em Cachoeirinha.' },
};

const contact = (modality: string) => {
  const url = new URL(academy.whatsapp);
  url.searchParams.set('text', `Olá! Vim pela página bio da FRONT39 e gostaria de saber sobre as aulas de ${modality}.`);
  return url.href;
};

export default function Bio() {
  return <>
    <Header homePath={sitePath('/')} />
    <main id="conteudo" className="bio-page">
      <section className="hero bio-hero" aria-labelledby="bio-title">
        <div className="hero-media">
          <picture>
            <source media="(max-width: 800px)" srcSet={sitePath('/images/banner-team-1920.webp')} type="image/webp" />
            <Image unoptimized src="/images/banner-team-2880.webp" alt="Equipe FRONT39 reunida no tatame" width={2880} height={1920} loading="eager" fetchPriority="high" />
          </picture>
        </div>
        <div className="hero-shade" />
        <div className="shell bio-opening">
          <div className="bio-intro">
            <p className="eyebrow light">FRONT39 / CACHOEIRINHA, RS</p>
            <h1 id="bio-title">SEU PRIMEIRO<br /><span>PASSO.</span></h1>
            <p className="hero-description">A vontade de mudar já está aí.<br />Dê a ela um lugar para começar.</p>
          </div>
          <div className="bio-actions">
            <p className="eyebrow light" id="bio-training-title">ENCONTRE SEU TREINO</p>
            <nav className="bio-training-links" aria-labelledby="bio-training-title">
              <a className="cta cta-white bio-training-link" href={contact('Jiu-Jitsu')} target="_blank" rel="noopener noreferrer"><span><span className="bio-action-title">Jiu-Jitsu</span><span className="bio-action-description">Conheça as turmas</span></span><ArrowUpRight size={24} aria-hidden="true" /></a>
              <a className="cta cta-white bio-training-link" href={contact('Judô')} target="_blank" rel="noopener noreferrer"><span><span className="bio-action-title">Judô</span><span className="bio-action-description">Converse com a equipe</span></span><ArrowUpRight size={24} aria-hidden="true" /></a>
              <button className="bio-unavailable" disabled><span>Treinamento funcional</span><span className="bio-soon"><Clock3 size={14} aria-hidden="true" /> Em breve</span></button>
            </nav>
            <a className="cta cta-outline bio-whatsapp" href={academy.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span>Fale com a FRONT39</span><ArrowUpRight size={18} aria-hidden="true" /></a>
            <div className="bio-other-links"><a className="text-link" href={sitePath('/')} >Conheça a equipe <ArrowUpRight size={16} aria-hidden="true" /></a><a className="text-link" href={academy.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} aria-hidden="true" /> Instagram</a></div>
          </div>
        </div>
      </section>
      <Location />
    </main>
    <Footer homePath={sitePath('/')} />
  </>;
}
