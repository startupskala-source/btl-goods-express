# 🚛 BTL Transportes & Armazenagem

**Linha branca e bazar com segurança.** Site institucional da BTL Transportes — transportadora especializada em linha branca, bazar, utilidades domésticas e armazenagem com frota própria e cobertura nacional.

## ✨ Funcionalidades

- Landing page institucional com design premium
- Mapa interativo do Brasil com rotas e filiais animadas
- Carrossel infinito de logos de parceiros (Mueller, Oster, Whirlpool, Panasonic, Electrolux)
- Formulário de cotação com validação e feedback
- Seção de depoimentos, FAQ e botão WhatsApp flutuante
- Menu mobile responsivo com scroll spy
- Animações suaves com Framer Motion
- SEO otimizado com JSON-LD, Open Graph e meta tags
- Design responsivo (mobile-first)

## 🛠 Stack

| Tecnologia | Versão | Para quê |
|-----------|--------|----------|
| **React 19** | ^19.2.0 | UI |
| **TanStack Start** | ^1.167.50 | Meta-framework SSR |
| **TanStack Router** | ^1.168.25 | Roteamento |
| **Vite** | ^8.0.16 | Bundler |
| **Bun** | — | Runtime/package manager |
| **TypeScript** | ^5.8.3 | Tipagem |
| **Tailwind CSS v4** | ^4.2.1 | Estilização |
| **shadcn/ui** | — | Componentes base |
| **Framer Motion** | ^12.42.0 | Animações |

## 📁 Estrutura

```
src/
├── assets/                    # Imagens e assets
├── components/
│   └── ui/                    # shadcn/ui + componentes custom
│       ├── truck-routes-map.tsx  # Mapa SVG com rotas animadas
│       ├── brazil-map.tsx        # Mapa SVG do Brasil
│       ├── logo-cloud-4.tsx      # Carrossel de logos
│       └── infinite-slider.tsx   # Slider infinito
├── routes/
│   ├── __root.tsx             # Layout root (shell, SEO, JSON-LD)
│   └── index.tsx              # Página principal (landing completa)
├── lib/                       # Utilitários e captura de erros
└── styles.css                 # Design system BTL
```

## 🚀 Como rodar

```bash
bun install
bun run dev       # Dev com HMR
bun run build     # Build produção
bun run preview   # Preview do build
```

## 🏗️ Design System

- **Primary**: Bordô (`oklch(0.38 0.14 18)`) — tradição e solidez
- **Display Font**: Bebas Neue (headings)
- **Body Font**: Barlow (textos)
- **Efeitos**: Glassmorphism, shimmer, fade-up, float

## 🌐 Cobertura

10 filiais: SP (HQ), RJ, MG, PR, RS, DF, BA, PE, CE, AM.

## 📄 Licença

MIT © BTL Transportes
