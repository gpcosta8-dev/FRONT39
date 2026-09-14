import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://front39-bjj.giving-melon-9980.chatgpt.site'),
  alternates: { canonical: '/' },
  title: 'FRONT39 | Brazilian Jiu-Jitsu em Cachoeirinha',
  description: 'Técnica, disciplina e evolução. Conheça a FRONT39 Brazilian Jiu-Jitsu em Cachoeirinha, RS, e agende sua aula experimental pelo WhatsApp.',
  openGraph: { title: 'FRONT39 — Brazilian Jiu-Jitsu', description: 'Cada treino, um novo passo. Conheça a FRONT39 em Cachoeirinha e agende sua aula experimental.', type: 'website', locale: 'pt_BR', siteName: 'FRONT39' },
  twitter: { card: 'summary', title: 'FRONT39 — Brazilian Jiu-Jitsu', description: 'Técnica, disciplina e evolução em Cachoeirinha, RS.' },
  icons: { icon: '/images/front39-original.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
