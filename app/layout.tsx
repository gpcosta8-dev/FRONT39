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
  metadataBase: new URL('https://front39-bjj.nutrimesalva.chatgpt.site'),
  alternates: { canonical: '/' },
  title: 'FRONT39 | Brazilian Jiu-Jitsu em Cachoeirinha',
  description: 'Mude sua vida, um treino de cada vez. Conheça a FRONT39 Brazilian Jiu-Jitsu em Cachoeirinha, RS, e agende sua aula experimental.',
  openGraph: { title: 'FRONT39 — Brazilian Jiu-Jitsu', description: 'Os dias passam. A vontade de mudar fica. Encontre seu começo na FRONT39 Brazilian Jiu-Jitsu, em Cachoeirinha.', type: 'website', locale: 'pt_BR', siteName: 'FRONT39' },
  twitter: { card: 'summary', title: 'FRONT39 — Brazilian Jiu-Jitsu', description: 'Um tempo para você. Um lugar para começar. FRONT39 Brazilian Jiu-Jitsu em Cachoeirinha, RS.' },
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
