import { ArrowUpRight, MapPin } from 'lucide-react';
import { academy } from './site-content';

export function Location() {
  return <section className="location section" id="localizacao">
        <div className="shell location-grid">
          <div data-reveal><p className="eyebrow">06 / ENCONTRE A FRONT39</p><h2>Um novo caminho<br />pode começar aqui.</h2><address>R. Monteiro Lobato, 1079<br />2° Andar · Parque da Matriz<br />Cachoeirinha – RS<br /><span>94950-280 · Brasil</span></address><a className="text-link" href={academy.maps} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /> Abrir no Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="map-container" data-reveal><iframe title="Localização da FRONT39 em Cachoeirinha" src={'https://maps.google.com/maps?q=' + encodeURIComponent('Rua Monteiro Lobato 1079, Parque da Matriz, Cachoeirinha RS Brasil') + '&z=16&output=embed'} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a className="map-caption" href={academy.maps} target="_blank" rel="noopener noreferrer"><span>FRONT39 <span> / CACHOEIRINHA, RS</span></span><ArrowUpRight size={21} aria-hidden="true" /></a></div>
        </div>
      </section>;
}
