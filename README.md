# FRONT39 — Brazilian Jiu-Jitsu

Página institucional em português, desenvolvida em React com Vinext/Vite. Identidade visual monocromática baseada no SVG fornecido. Fotografias da própria academia, publicadas no perfil oficial.

## Desenvolvimento

`npm install` instala as dependências. `npm run dev` inicia a prévia local. `npm run build` produz a versão para publicação. `npm run lint` verifica o código.

## Edição de conteúdo

- `app/site-content.ts`: contatos, endereço, links e lista de programas. Cada programa tem título, descrição e mensagem específica para o WhatsApp.
- `app/page.tsx`: seções e textos da página.
- `app/globals.css`: identidade visual, estados de interação e versões responsivas.
- `app/site-ui.tsx`: menu móvel acessível e animações com respeito à preferência de movimento reduzido.
- `app/layout.tsx`, `app/robots.ts` e `app/sitemap.ts`: metadados e SEO. Atualize também a URL do JSON-LD em `app/page.tsx` se usar um domínio próprio.

## Fontes e conteúdo

O endereço e o WhatsApp seguem exatamente o briefing fornecido. O número informado (+55 51 9262-1334; wa.me/555192621334) tem oito dígitos locais. Confirme com a academia se o WhatsApp atualmente usa um nono dígito antes de divulgar publicamente. Não foi feita alteração automática.

Programas foram baseados na biografia e nos destaques do Instagram oficial, que mencionam ensino progressivo, Jiu-Jitsu esportivo e defesa pessoal, Luta Livre Esportiva, Judô, Adulto e Infantil. Não foram inventados horários, preços, qualificações, depoimentos ou resultados. Os links de consulta levam ao WhatsApp sem enviar mensagens automaticamente.

Fotografias oficiais (miniaturas públicas de 360 × 640, disponíveis em 13/09/2026):

- Treino: https://www.instagram.com/front39bjj/reel/DX0Aq5YvY7F/
- Academia: https://www.instagram.com/front39bjj/reel/DEf3YXmvJTe/
- Infantil: https://www.instagram.com/front39bjj/reel/DWFMfWUhiiw/

Os arquivos foram armazenados localmente para evitar expiração dos links do Instagram. Substitua por originais em alta resolução para melhorar a nitidez em telas grandes. Nenhuma imagem foi gerada por IA ou copiada das academias de referência.

Atualização de imagem e textos: foto de equipe escolhida pelo usuário, obtida em sua publicação original (https://www.instagram.com/p/DSj2kmtjKQh/?img_index=1), em WebP de 1440 × 960 sem recompressão. Usada como fundo da abertura tanto no desktop quanto no celular, com recorte responsivo e camada escura para leitura. A seção Comunidade preserva o enquadramento completo. Textos revisados para uma voz mais introspectiva, centrada em recomeço e pertencimento.

O título da abertura usa um efeito de máquina de escrever executado uma vez, com o espaço final reservado para evitar deslocamentos. Para quem prefere movimento reduzido, o título completo aparece imediatamente.

A foto da seção Academia foi substituída por um quadro estático do arquivo `1.mov` fornecido pelo usuário. Imagem `public/images/academy-live-photo.webp`, 1308 × 1744, extraída aproximadamente em 1,35 s de um Live Photo de 1,78 s, com orientação corrigida e conversão de cor P3 para sRGB. Somente a imagem estática é incluída no site; o MOV original permanece fora do projeto.

A foto adicional `2.jpg`, fornecida pelo usuário, aparece como `public/images/community-moment.jpg` na seção Comunidade, ao lado da foto de graduação. A galeria mantém os enquadramentos completos e se empilha em telas menores.

As fotos `3.jpeg`, `4.jpeg` e `6.jpeg` foram fornecidas pelo usuário e copiadas sem recompressão para `community-embrace.jpeg` (1078 × 720), `juliano-pavao-adcc.jpeg` (1440 × 1439) e `jiu-jitsu-competition.jpeg` (900 × 1600). A apresentação do professor usa a foto do ADCC e o abraço; a imagem de luta com quimono integra a galeria da comunidade. Os três enquadramentos são preservados. O nome Juliano Pavão e as faixas pretas em jiu-jitsu, taekwondo e luta livre foram confirmados pelo usuário. Não foram atribuídos títulos ou resultados de competição.

Referências de direção visual e navegação: AOJ (https://artofjiujitsu.com/pages/academy), Alliance Porto Alegre (https://allianceportoalegre.com.br/) e Guetho (https://guethojiujitsu.com.br/). Layout e textos próprios da FRONT39.

O mapa é incorporado pelo Google Maps e depende desse serviço. O endereço e o link externo permanecem acessíveis independentemente do carregamento do mapa. Não há formulários, pagamentos, contas ou coleta própria de dados.

## Verificação da entrega

Compilação de produção, TypeScript e `npx oxlint app` passaram. A página, robots.txt, sitemap.xml e todos os arquivos de imagem responderam HTTP 200 na execução de produção local; âncoras internas e metadados foram conferidos. O `npm run lint` global também analisa o catálogo de componentes fornecido pelo starter e aponta problemas preexistentes em componentes não usados pela página. Esse catálogo foi preservado. Não foi realizada inspeção visual automatizada no navegador.
