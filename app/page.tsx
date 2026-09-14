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
        <div className="hero-media"><Image unoptimized src="/images/team.webp" alt="Equipe FRONT39 reunida no tatame em uma foto de graduação" width="1440" height="960" fetchPriority="high" /></div>
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow light">CACHOEIRINHA, RS <span> / </span> BRAZILIAN JIU-JITSU</p>
          <h1 id="hero-title">MUDE<br /><span>SUA VIDA.</span></h1>
          <p className="hero-description">Os dias passam. A vontade de mudar fica.<br />{' '}Dê a ela um lugar para começar.</p>
          <a className="cta cta-white" href={academy.whatsapp} target="_blank" rel="noopener noreferrer">Agende sua aula experimental <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
        <div className="hero-foot shell"><a href="#front39">CONHEÇA A FRONT39 <ArrowDown size={16} aria-hidden="true" /></a><span>TODO RECOMEÇO PRECISA DE UM PRIMEIRO PASSO.</span></div>
      </section>
      <div className="values-strip" aria-label="Valores da FRONT39"><span>TÉCNICA</span><span>DISCIPLINA</span><span>RESPEITO</span><span>COMUNIDADE</span></div>
      <section className="about section shell" id="front39" data-reveal>
        <div className="section-index"><span className="eyebrow">01 / A FRONT39</span><Image unoptimized className="about-seal" src="/images/front39-original.svg" alt="Símbolo da FRONT39 Brazilian Jiu-Jitsu" width="200" height="200" loading="lazy" /></div>
        <div><h2>Entre o que passou<br /><span className="muted">e o que ainda pode ser.</span></h2><div className="about-copy"><p>Há fases em que os dias se parecem. A rotina ocupa tudo, os planos ficam para depois, e a gente sente falta de fazer algo por si. Talvez seja hora de abrir espaço.</p><p>No tatame, esse espaço começa com o aprendizado. Na FRONT39, em Cachoeirinha, o ensino progressivo do Jiu-Jitsu convida você a respeitar o próprio ritmo e descobrir, aos poucos, novos caminhos.</p></div><a className="text-link" href="#treinos">Conheça os treinos <ArrowUpRight size={18} aria-hidden="true" /></a></div>
      </section>
      <section className="principles shell" aria-labelledby="principles-title" data-reveal>
        <div className="principles-heading"><h2 id="principles-title">Pequenas mudanças. Um outro caminho.</h2><span className="eyebrow">DENTRO E FORA DO TATAME</span></div>
        <div className="principle-grid">
          <article><span className="principle-number">01</span><h3>Voltar a ser iniciante.</h3><p>Há algo bonito em começar sem saber. Aprender os fundamentos, tentar de novo e perceber o que ontem ainda parecia distante.</p></article>
          <article><span className="principle-number">02</span><h3>Reservar tempo para você.</h3><p>Entre tantos compromissos, um encontro com a própria prática. Um tempo para estar presente e dar valor a cada pequeno avanço.</p></article>
          <article><span className="principle-number">03</span><h3>Encontrar com quem seguir.</h3><p>Cada pessoa chega com uma história. No treino, elas se encontram. O respeito pelo parceiro faz parte do caminho.</p></article>
        </div>
      </section>
      <section className="training section" id="treinos">
        <div className="shell">
          <div className="section-heading" data-reveal><div><p className="eyebrow">02 / TREINOS</p><h2>Há um começo<br />para cada momento.</h2></div><p className="section-intro">Talvez seja sua primeira aula. Talvez seja uma volta depois de muito tempo. Conheça as turmas e encontre um lugar para a prática na sua vida.</p></div>
          <div className="programs">{programs.map(program => <article className="program" key={program.number} data-reveal><span className="program-number">{program.number}</span><div><p className="eyebrow">{program.tag}</p><h3>{program.title}</h3></div><p>{program.description}</p><a href={'https://wa.me/555192621334?text=' + encodeURIComponent(program.message)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar turmas de ${program.title}`}><ArrowUpRight size={26} aria-hidden="true" /><span>Consultar turmas</span></a></article>)}</div>
          <p className="schedule-note">Horários, faixas etárias e disponibilidade de turmas: <a href={academy.whatsapp} target="_blank" rel="noopener noreferrer">consulte a equipe pelo WhatsApp.</a></p>
        </div>
      </section>
      <section className="academy section" id="academia">
        <div className="academy-grid shell">
          <figure className="academy-figure" data-reveal><div className="image-frame"><Image unoptimized src="/images/academy-live-photo.webp" alt="Interior da FRONT39, com tatame cinza, paredes brancas e pôr do sol pelas janelas" width="1308" height="1744" loading="lazy" /></div><figcaption>O NOSSO ESPAÇO <span>FRONT39 / CACHOEIRINHA</span></figcaption></figure>
          <div className="academy-copy" data-reveal><p className="eyebrow light">03 / A ACADEMIA</p><h2>Lá fora, o dia corre.<br />Aqui, você respira.</h2><p>Por um tempo, o que importa cabe no tatame: uma posição, um movimento, a atenção ao parceiro. A prática pede presença. O resto pode esperar um pouco.</p><p>Venha conhecer o espaço e conversar com a equipe. Às vezes, um lugar novo abre espaço para uma nova rotina.</p><a className="cta cta-outline" href={academy.whatsapp} target="_blank" rel="noopener noreferrer">Quero conhecer a academia <ArrowUpRight size={18} aria-hidden="true" /></a><div className="academy-signature"><Image unoptimized src="/images/front39-original.svg" alt="" width="70" height="70" loading="lazy" /><span>UM TEMPO PARA APRENDER.<br />UM LUGAR PARA VOLTAR.</span></div></div>
        </div>
      </section>
      <section className="community section shell" id="comunidade">
        <div className="section-heading" data-reveal><div><p className="eyebrow">04 / COMUNIDADE FRONT39</p><h2>Com o tempo,<br /><span className="muted">os rostos viram histórias.</span></h2></div><div className="community-intro"><p>Um dia, foi a primeira aula de cada pessoa nestas fotos. Depois vieram os treinos, as conversas e os caminhos compartilhados. Toda equipe começa com gente que decidiu chegar.</p><a className="text-link" href={academy.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17} aria-hidden="true" /> @front39bjj <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
        <div className="community-gallery">
        <a className="team-photo" href="https://www.instagram.com/p/DSj2kmtjKQh/?img_index=1" target="_blank" rel="noopener noreferrer" data-reveal><div className="image-frame"><Image unoptimized src="/images/team.webp" alt="Alunos e equipe da FRONT39 reunidos no tatame após uma graduação" width="1440" height="960" loading="lazy" /><span className="image-action" aria-hidden="true"><ArrowUpRight size={24} /></span></div><div className="photo-caption"><span>CADA PESSOA, UM CAMINHO.</span><span>JUNTOS, FRONT39.</span></div></a>
        <figure className="team-photo community-moment" data-reveal><div className="image-frame"><Image unoptimized src="/images/community-moment.jpg" alt="Praticantes de quimono da FRONT39 conversam e sorriem juntos no tatame" width="6473" height="4315" loading="lazy" /></div><figcaption className="photo-caption"><span>O TREINO TAMBÉM É ENCONTRO.</span><span>FRONT39.</span></figcaption></figure>
        </div>
      </section>
      <section className="location section" id="localizacao">
        <div className="shell location-grid">
          <div data-reveal><p className="eyebrow">05 / ENCONTRE A FRONT39</p><h2>Um novo caminho<br />pode começar aqui.</h2><address>R. Monteiro Lobato, 1079<br />2° Andar · Parque da Matriz<br />Cachoeirinha – RS<br /><span>94950-280 · Brasil</span></address><a className="text-link" href={academy.maps} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /> Abrir no Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="map-container" data-reveal><iframe title="Localização da FRONT39 em Cachoeirinha" src={'https://maps.google.com/maps?q=' + encodeURIComponent('Rua Monteiro Lobato 1079, Parque da Matriz, Cachoeirinha RS Brasil') + '&z=16&output=embed'} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a className="map-caption" href={academy.maps} target="_blank" rel="noopener noreferrer"><span>FRONT39 <span> / CACHOEIRINHA, RS</span></span><ArrowUpRight size={21} aria-hidden="true" /></a></div>
        </div>
      </section>
      <section className="final-cta section" aria-labelledby="final-title">
        <div className="shell" data-reveal><p className="eyebrow light">NÃO PRECISA MUDAR TUDO HOJE.</p><div className="final-cta-row"><h2 id="final-title">Comece<br />por você.</h2><div><p>O tempo vai passar de qualquer forma.<br />Que tal dar a este dia um novo começo?</p><a className="cta cta-white" href={academy.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Agende sua primeira aula <ArrowUpRight size={20} aria-hidden="true" /></a></div></div></div>
      </section>
    </main>
    <footer className="site-footer"><div className="shell"><div className="footer-grid"><a className="footer-brand" href="#inicio" aria-label="FRONT39, voltar ao início"><Image unoptimized src="/images/front39-wordmark.svg" alt="FRONT39" width="210" height="50" loading="lazy" /><span>BRAZILIAN JIU-JITSU</span></a><div><p className="eyebrow">VISITE</p><address>R. Monteiro Lobato, 1079, 2° Andar<br />Parque da Matriz · Cachoeirinha – RS<br />94950-280 · Brasil</address></div><div><p className="eyebrow">FALE COM A GENTE</p><a href={academy.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp · {academy.phone}</a><a href={academy.instagram} target="_blank" rel="noopener noreferrer">Instagram · @front39bjj</a></div><nav aria-label="Navegação do rodapé"><a href="#front39">A Front39</a><a href="#treinos">Treinos</a><a href="#academia">A academia</a><a href="#comunidade">Comunidade</a><a href="#localizacao">Localização</a></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FRONT39. Todos os direitos reservados.</span><span>CACHOEIRINHA, RS · BRASIL</span></div></div></footer>
    <a className="floating-whatsapp" href={academy.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Converse com a FRONT39 pelo WhatsApp"><WhatsAppIcon /><span>Seu primeiro passo</span></a>
  </>;
}
