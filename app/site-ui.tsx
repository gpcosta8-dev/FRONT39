'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';
import { academy } from './site-content';

const links = [{ href: '#front39', label: 'A Front39' }, { href: '#treinos', label: 'Treinos' }, { href: '#academia', label: 'A academia' }, { href: '#localizacao', label: 'Localização' }];
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 20); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header id="inicio" className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#inicio" aria-label="FRONT39, início"><Image unoptimized src="/images/front39-wordmark.svg" alt="FRONT39" width="155" height="38" /><span>BRAZILIAN JIU-JITSU</span></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
      <a className="header-cta" href={academy.whatsapp} target="_blank" rel="noopener noreferrer">Aula experimental <ArrowUpRight size={17} aria-hidden="true" /></a>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="mobile-menu-button" aria-label="Abrir menu"><Menu size={24} aria-hidden="true" /></SheetTrigger>
        <SheetContent className="mobile-sheet" showCloseButton={false}>
          <SheetClose className="menu-close" aria-label="Fechar menu"><X aria-hidden="true" /></SheetClose>
          <SheetTitle className="menu-title">FRONT39</SheetTitle><SheetDescription className="sr-only">Navegue pelas seções e agende sua aula experimental.</SheetDescription>
          <nav aria-label="Navegação móvel">{links.map((link,i) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{i+1}</span>{link.label}<ArrowUpRight size={22} aria-hidden="true" /></a>)}</nav>
          <a className="cta cta-black" href={academy.whatsapp} target="_blank" rel="noopener noreferrer">Agende sua aula <ArrowUpRight size={18} aria-hidden="true" /></a><p className="menu-location">Cachoeirinha, RS<br />Brazilian Jiu-Jitsu</p>
        </SheetContent>
      </Sheet>
    </header>
  </>;
}
export function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true"><path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.96 11.96 0 0 0 5.79 1.48h.01C18.64 23.84 24 18.49 24 11.91c0-3.18-1.24-6.17-3.48-8.43ZM12.06 21.82a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.88 9.88 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.91-9.92a9.83 9.83 0 0 1 7.03 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.46 9.92-9.94 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.11 3.22 5.11 4.52.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>;
}

export function ScrollReveals() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target); } }), { threshold:0.04 });
    elements.forEach(element => { if (element.getBoundingClientRect().top > window.innerHeight) { element.classList.add('reveal-pending'); observer.observe(element); } });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('reveal-pending')); };
  }, []);
  return null;
}
