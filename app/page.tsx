import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Camera as Instagram, MapPin } from 'lucide-react';
import { Header, ScrollReveals, WhatsAppIcon } from './site-ui';
import { academy, programs } from './site-content';

export default function Home() {
  return <>
    <Header /><ScrollReveals />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org', '@type':'SportsActivityLocation', name:academy.name, description:'Academia de Brazilian Jiu-Jitsu em Cachoeirinha, RS.', url:'https://front39-bjj.nutrimesalva.chatgpt.site', telephone:academy.phone, address:{ '@type':'PostalAddress', streetAddress:'R. Monteiro Lobato, 1079, 2° Andar – Parque da Matriz', addressLocality:'Cachoeirinha', addressRegion:'RS', postalCode:'94950-280', addressCountry:'BR' }, sameAs:[academy.instagram], hasMap:academy.maps }).replace(/</g,'\\u003c') }} />
    <main id="conteudo">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media"><Image unoptimized src="/images/training.jpg" alt="Praticantes da FRONT39 durante treino de Jiu-Jitsu no tatame" width="360" height="640" fetchPriority="high" /></div>
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow light">CACHOEIRINHA, RS <span> / </span> BRAZILIAN JIU-JITSU</p>
          <h1 id="hero-title">TÉCNICA.<br />PRESENÇA.<br /><span>EVOLUÇÃO.</span></h1>
          <p className="hero-description">Cada treino, um novo passo.<br />Encontre o seu Jiu-Jitsu na FRONT39.</p>
          <a className="cta cta-white" href={academy.whatsapp} target="_blank" rel="noopener noreferrer">Agende sua aula experimental <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
        <div className="hero-foot shell"><a href="#front39">CONHEÇA A FRONT39 <ArrowDown size={16} aria-hidden="true" /></a><span>RESPEITO AO PROCESSO. COMPROMISSO COM A EVOLUÇÃO.</span></div>
      </section>
      <div className="values-strip" aria-label="Valores da FRONT39"><span>TÉCNICA</span><span>DISCIPLINA</span><span>RESPEITO</span><span>COMUNIDADE</span></div>
      <section className="about section shell" id="front39" data-reveal>
        <div className="section-index"><span className="eyebrow">01 / A FRONT39</span><Image unoptimized className="about-seal" src="/images/front39-original.svg" alt="Símbolo da FRONT39 Brazilian Jiu-Jitsu" width="200" height="200" loading="lazy" /></div>
        <div><h2>O Jiu-Jitsu como<br /><span className="muted">prática de evolução.</span></h2><div className="about-copy"><p>Aprender uma técnica. Entender uma posição. Voltar ao tatame. Na FRONT39, a evolução acontece nesse encontro entre prática, atenção e constância.</p><p>Em Cachoeirinha, nosso ensino progressivo conecta Jiu-Jitsu esportivo e defesa pessoal. Um ambiente para construir sua base, respeitar seu ritmo e evoluir junto.</p></div><a className="text-link" href="#treinos">Conheça os treinos <ArrowUpRight size={18} aria-hidden="true" /></a></div>
      </section>
      <section className="principles shell" aria-labelledby="principles-title" data-reveal>
        <div className="principles-heading"><h2 id="principles-title">O que move o nosso treino.</h2><span className="eyebrow">DENTRO E FORA DO TATAME</span></div>
        <div className="principle-grid">
          <article><span className="principle-number">01</span><h3>Uma base sólida.</h3><p>Aprender com método. Entender os fundamentos e conectar cada detalhe à prática.</p></article>
          <article><span className="principle-number">02</span><h3>Seu ritmo. Seu caminho.</h3><p>Evoluir exige presença e constância. Cada etapa tem valor, do primeiro treino ao próximo desafio.</p></article>
          <article><span className="principle-number">03</span><h3>Juntos no tatame.</h3><p>O treino é uma troca. Respeito pelo parceiro, atenção ao outro e compromisso com o aprendizado.</p></article>
        </div>
      </section>
      <section className="training section" id="treinos">
        <div className="shell">
          <div className="section-heading" data-reveal><div><p className="eyebrow">02 / TREINOS</p><h2>Encontre o seu<br />próximo passo.</h2></div><p className="section-intro">Para começar, retomar ou aprofundar a prática. Converse com a equipe e conheça o treino para o seu momento.</p></div>
          <div className="programs">{programs.map(program => <article className="program" key={program.number} data-reveal><span className="program-number">{program.number}</span><div><p className="eyebrow">{program.tag}</p><h3>{program.title}</h3></div><p>{program.description}</p><a href={'https://wa.me/555192621334?text=' + encodeURIComponent(program.message)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar turmas de ${program.title}`}><ArrowUpRight size={26} aria-hidden="true" /><span>Consultar turmas</span></a></article>)}</div>
          <p className="schedule-note">Horários, faixas etárias e disponibilidade de turmas: <a href={academy.whatsapp} target="_blank" rel="noopener noreferrer">consulte a equipe pelo WhatsApp.</a></p>
        </div>
      </section>
      <section className="academy section" id="academia">
        <div className="academy-grid shell">
          <figure className="academy-figure" data-reveal><div className="image-frame"><Image unoptimized src="/images/academy.jpg" alt="Espaço da FRONT39, com tatame e iluminação natural pelas janelas" width="360" height="640" loading="lazy" /></div><figcaption>O NOSSO ESPAÇO <span>FRONT39 / CACHOEIRINHA</span></figcaption></figure>
          <div className="academy-copy" data-reveal><p className="eyebrow light">03 / A ACADEMIA</p><h2>Um lugar para<br />estar por inteiro.</h2><p>Deixe a rotina do lado de fora. Aqui, a atenção está na técnica, na troca com o parceiro e no que você pode aprender hoje.</p><p>Venha conhecer o espaço, conversar com a equipe e sentir o ritmo de um treino na FRONT39.</p><a className="cta cta-outline" href={academy.whatsapp} target="_blank" rel="noopener noreferrer">Quero conhecer a academia <ArrowUpRight size={18} aria-hidden="true" /></a><div className="academy-signature"><Image unoptimized src="/images/front39-original.svg" alt="" width="70" height="70" loading="lazy" /><span>TÉCNICA QUE SE APRENDE.<br />RESPEITO QUE SE PRATICA.</span></div></div>
        </div>
      </section>
      <section className="community section shell" id="comunidade">
        <div className="section-heading" data-reveal><div><p className="eyebrow">04 / COMUNIDADE FRONT39</p><h2>O treino conecta.<br /><span className="muted">A gente evolui junto.</span></h2></div><div className="community-intro"><p>A prática tem muitas histórias. Acompanhe os treinos, os encontros e o dia a dia de quem faz parte da FRONT39.</p><a className="text-link" href={academy.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17} aria-hidden="true" /> @front39bjj <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
        <div className="community-grid">
          <a className="community-photo" href="https://www.instagram.com/front39bjj/reel/DWFMfWUhiiw/" target="_blank" rel="noopener noreferrer" data-reveal><div className="image-frame"><Image unoptimized src="/images/kids.jpg" alt="Crianças da FRONT39 participam de uma atividade no tatame" width="360" height="640" loading="lazy" /><span className="image-action" aria-hidden="true"><ArrowUpRight size={24} /></span></div><div className="photo-caption"><span>APRENDER. COMPARTILHAR. CRESCER.</span><span>JIU-JITSU INFANTIL</span></div></a>
          <a className="community-photo community-photo-offset" href="https://www.instagram.com/front39bjj/reel/DX0Aq5YvY7F/" target="_blank" rel="noopener noreferrer" data-reveal><div className="image-frame"><Image unoptimized src="/images/training.jpg" alt="Duas praticantes treinam uma posição de Jiu-Jitsu na FRONT39" width="360" height="640" loading="lazy" /><span className="image-action" aria-hidden="true"><ArrowUpRight size={24} /></span></div><div className="photo-caption"><span>EVOLUÇÃO EM CADA DETALHE.</span><span>NO TATAME</span></div></a>
        </div>
      </section>
      <section className="location section" id="localizacao">
        <div className="shell location-grid">
          <div data-reveal><p className="eyebrow">05 / ENCONTRE A FRONT39</p><h2>Seu próximo treino<br />é aqui.</h2><address>R. Monteiro Lobato, 1079<br />2° Andar · Parque da Matriz<br />Cachoeirinha – RS<br /><span>94950-280 · Brasil</span></address><a className="text-link" href={academy.maps} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /> Abrir no Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="map-container" data-reveal><iframe title="Localização da FRONT39 em Cachoeirinha" src={'https://maps.google.com/maps?q=' + encodeURIComponent('Rua Monteiro Lobato 1079, Parque da Matriz, Cachoeirinha RS Brasil') + '&z=16&output=embed'} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a className="map-caption" href={academy.maps} target="_blank" rel="noopener noreferrer"><span>FRONT39 <span> / CACHOEIRINHA, RS</span></span><ArrowUpRight size={21} aria-hidden="true" /></a></div>
        </div>
      </section>
      <section className="final-cta section" aria-labelledby="final-title">
        <div className="shell" data-reveal><p className="eyebrow light">O PRIMEIRO PASSO É SEU.</p><div className="final-cta-row"><h2 id="final-title">Nos vemos<br />no tatame.</h2><div><p>Conheça a FRONT39.<br />Agende sua aula experimental.</p><a className="cta cta-white" href={academy.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Vamos começar <ArrowUpRight size={20} aria-hidden="true" /></a></div></div></div>
      </section>
    </main>
    <footer className="site-footer"><div className="shell"><div className="footer-grid"><a className="footer-brand" href="#inicio" aria-label="FRONT39, voltar ao início"><Image unoptimized src="/images/front39-wordmark.svg" alt="FRONT39" width="210" height="50" loading="lazy" /><span>BRAZILIAN JIU-JITSU</span></a><div><p className="eyebrow">VISITE</p><address>R. Monteiro Lobato, 1079, 2° Andar<br />Parque da Matriz · Cachoeirinha – RS<br />94950-280 · Brasil</address></div><div><p className="eyebrow">FALE COM A GENTE</p><a href={academy.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp · {academy.phone}</a><a href={academy.instagram} target="_blank" rel="noopener noreferrer">Instagram · @front39bjj</a></div><nav aria-label="Navegação do rodapé"><a href="#front39">A Front39</a><a href="#treinos">Treinos</a><a href="#academia">A academia</a><a href="#comunidade">Comunidade</a><a href="#localizacao">Localização</a></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FRONT39. Todos os direitos reservados.</span><span>CACHOEIRINHA, RS · BRASIL</span></div></div></footer>
    <a className="floating-whatsapp" href={academy.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Converse com a FRONT39 pelo WhatsApp"><WhatsAppIcon /><span>Vamos treinar?</span></a>
  </>;
}
