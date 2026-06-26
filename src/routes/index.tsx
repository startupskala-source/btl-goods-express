import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback, type FormEvent } from "react";
import heroTruck from "@/assets/hero-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import btlLogo from "@/assets/btl-logo.png.asset.json";
import muellerLogo from "@/assets/mueller.png.asset.json";
import osterLogo from "@/assets/oster.png.asset.json";
import whirlpoolLogo from "@/assets/whirlpool.png.asset.json";
import panasonicLogo from "@/assets/panasonic.png.asset.json";
import electroluxLogo from "@/assets/electrolux.png.asset.json";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { TruckRoutesMap } from "@/components/ui/truck-routes-map";
import { Toaster, toast } from "sonner";
import {
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  PackageCheck,
  Refrigerator,
  ShoppingBag,
  Boxes,
  Route as RouteIcon,
  Menu,
  X,
  Star,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BTL Transportes — Linha branca e bazar com segurança" },
      { name: "description", content: "Transportadora especializada em linha branca e bazar. Frota própria, rastreamento em tempo real e cobertura nacional." },
      { property: "og:title", content: "BTL Transportes — Linha branca e bazar" },
      { property: "og:description", content: "Frota própria, rastreamento e cobertura nacional para sua carga." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// ─── Scroll spy hook ──────────────────────────────────────────────────────
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sectionIds]);
  return active;
}

// ─── Smooth scroll helper ─────────────────────────────────────────────────
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Index ────────────────────────────────────────────────────────────────
function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-right" />
      <Nav />
      <Hero />
      <Marquee />
      <Partners />
      <Services />
      <WhyUs />
      <Coverage />
      <Testimonials />
      <BrazilFiliais />
      <Faq />
      <Cta />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "servicos", label: "Serviços" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "cobertura", label: "Cobertura" },
  { id: "depoimentos", label: "Clientes" },
  { id: "contato", label: "Contato" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  // Close menu on route change / resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo("top"); }} className="flex items-center gap-3" aria-label="BTL Transportes — Início">
          <img src={btlLogo.url} alt="BTL Transportes e Armazenagem" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wider text-primary">BTL TRANSPORTES</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Transportes e Armazenagem</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              className={`transition ${active === item.id ? "text-primary font-semibold" : "hover:text-primary"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          onClick={(e) => { e.preventDefault(); scrollTo("contato"); }}
          className="btn-glass hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider md:inline-flex"
        >
          Solicitar cotação <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[60px] z-30 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-0 pt-8 text-lg font-medium" aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollTo(item.id); }}
                className={`w-full border-b border-border/40 px-6 py-5 text-center transition ${
                  active === item.id ? "text-primary bg-primary/5 font-semibold" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollTo("contato"); }}
              className="btn-glass mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Solicitar cotação <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[26rem] w-[26rem] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pt-20 pb-28 md:grid-cols-[1.1fr_1fr] md:items-center md:pt-28 md:pb-32">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Transportes e Armazenagem · desde 2010
          </div>
          <h1 className="text-balance font-display text-5xl leading-[0.95] tracking-wide text-foreground sm:text-6xl md:text-7xl">
            Sua carga <span className="text-primary italic">no destino</span>,
            <br /> sem surpresas.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Especialistas em <strong className="font-semibold text-foreground">linha branca</strong> e <strong className="font-semibold text-foreground">bazar</strong>. Frota própria, equipe treinada e rastreamento em tempo real do embarque à entrega.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); scrollTo("contato"); }}
              className="btn-glass group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider"
            >
              Solicitar cotação
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              onClick={(e) => { e.preventDefault(); scrollTo("servicos"); }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Nossos serviços
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              ["15+", "anos de estrada"],
              ["98%", "no prazo"],
              ["27", "estados atendidos"],
              ["24/7", "monitoramento"],
            ].map(([k, v]) => (
              <div key={v} className="bg-card px-5 py-5">
                <dt className="font-display text-3xl text-primary">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={heroTruck}
              alt="Caminhão BTL Transportes em estrada"
              className="aspect-[4/5] w-full object-cover"
              width={1200}
              height={1500}
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -left-6 -top-6 hidden h-28 w-28 items-center justify-center rounded-full border border-border bg-background/90 p-3 shadow-elegant backdrop-blur animate-float md:flex">
            <img src={btlLogo.url} alt="" className="h-full w-full object-contain" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-5 shadow-elegant md:block">
            <div className="font-display text-3xl leading-none text-primary">+50k</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              entregas realizadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Marquee categorias ───────────────────────────────────────────────────
function Marquee() {
  const items = [
    "Geladeiras", "Fogões", "Máquinas de lavar", "Micro-ondas",
    "Utensílios domésticos", "Eletroportáteis", "Bazar",
    "Pequenos eletros", "Linha branca", "Freezers",
  ];
  const loop = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-6" aria-label="Categorias transportadas">
      <div className="flex w-[200%] animate-marquee gap-12 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-3 font-display text-2xl tracking-wider text-primary/80">
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Partners ─────────────────────────────────────────────────────────────
function Partners() {
  const logos = [
    { src: muellerLogo.url, alt: "Mueller", width: 200, height: 60 },
    { src: osterLogo.url, alt: "Oster", width: 200, height: 60 },
    { src: whirlpoolLogo.url, alt: "Whirlpool", width: 200, height: 60 },
    { src: panasonicLogo.url, alt: "Panasonic", width: 200, height: 60 },
    { src: electroluxLogo.url, alt: "Electrolux", width: 200, height: 60 },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="text-base font-medium text-neutral-500">
            Marcas que confiam na BTL
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Parceiros do setor
          </h2>
          <p className="max-w-lg text-neutral-500">
            Referência em logística de linha branca para as maiores indústrias do Brasil.
          </p>
        </div>
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: Refrigerator,
      title: "Linha Branca",
      desc: "Geladeiras, fogões, máquinas de lavar, freezers. Manuseio especializado e embalagens reforçadas para zero avaria.",
    },
    {
      icon: ShoppingBag,
      title: "Bazar & Utilidades",
      desc: "Utensílios, organizadores, decoração e itens de papelaria. Cargas fracionadas com agilidade.",
    },
    {
      icon: Boxes,
      title: "Armazenagem",
      desc: "Galpões próprios com controle de inventário, picking e cross-docking para distribuição imediata.",
    },
    {
      icon: RouteIcon,
      title: "Distribuição Nacional",
      desc: "Rotas otimizadas e malha logística que cobre as cinco regiões com previsibilidade de prazos.",
    },
  ];
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            O que transportamos
          </div>
          <h2 className="font-display text-5xl tracking-wide text-foreground md:text-6xl">
            Carga certa, <span className="text-primary italic">manuseio certo.</span>
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Cada categoria tem suas exigências. Treinamos nossa equipe e equipamos nossa frota para cada uma delas.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="group flex flex-col gap-4 bg-card p-8 transition hover:bg-primary hover:text-primary-foreground">
            <s.icon className="h-10 w-10 text-primary transition group-hover:text-primary-foreground group-hover:scale-110" strokeWidth={1.5} />
            <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground transition group-hover:text-primary-foreground/80">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Why Us ───────────────────────────────────────────────────────────────
function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Carga 100% segurada", desc: "Cobertura completa do embarque à entrega." },
    { icon: PackageCheck, title: "Zero avaria", desc: "Embalagens, amarração e manuseio especializado." },
    { icon: Clock, title: "Prazo cumprido", desc: "98% das entregas dentro do prazo combinado." },
    { icon: MapPin, title: "Rastreio em tempo real", desc: "Você acompanha cada quilômetro da sua carga." },
  ];
  return (
    <section id="diferenciais" className="bg-secondary text-foreground">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="relative">
          <img
            src={warehouse}
            alt="Galpão da BTL Transportes com linha branca e bazar"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            loading="lazy"
            width={1600}
            height={1100}
          />
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            Por que a BTL
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Logística pensada para <span className="text-primary italic">carga delicada.</span>
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Linha branca e bazar pedem cuidado redobrado. Cada motorista, ajudante e operador passa por treinamento contínuo — porque uma entrega bem feita começa muito antes do caminhão sair do pátio.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.title} className="flex gap-4 rounded-2xl border border-border bg-background p-5 transition hover:border-primary/40 hover:shadow-elegant">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <it.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Coverage ─────────────────────────────────────────────────────────────
function Coverage() {
  const regions = [
    { name: "Sudeste", states: "SP · RJ · MG · ES" },
    { name: "Sul", states: "PR · SC · RS" },
    { name: "Centro-Oeste", states: "GO · MT · MS · DF" },
    { name: "Nordeste", states: "BA · PE · CE · AL · RN · PB · PI · MA · SE" },
    { name: "Norte", states: "PA · AM · TO · RO · AC · RR · AP" },
  ];
  return (
    <section id="cobertura" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
          Cobertura nacional
        </div>
        <h2 className="font-display text-5xl tracking-wide md:text-6xl">
          Do Oiapoque ao Chuí, <span className="text-primary italic">sem perder o ritmo.</span>
        </h2>
      </div>
      <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-5">
        {regions.map((r) => (
          <div key={r.name} className="bg-card p-8">
            <MapPin className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-2xl tracking-wide">{r.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.states}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────
const DEPOIMENTOS = [
  {
    nome: "Carlos Andrade",
    cargo: "Gerente de Logística — Mueller",
    texto: "Trabalhamos com a BTL há mais de 5 anos. O nível de avaria é praticamente zero e o rastreamento em tempo real nos dá total visibilidade sobre a operação.",
    estrelas: 5,
  },
  {
    nome: "Fernanda Lima",
    cargo: "Coordenadora de Supply Chain — Oster",
    texto: "Profissionalismo e pontualidade são as marcas da BTL. Entregam sempre dentro do prazo e a comunicação com a equipe é excelente.",
    estrelas: 5,
  },
  {
    nome: "Ricardo Menezes",
    cargo: "Diretor Comercial — Magazine Bazar",
    texto: "Precisávamos de um parceiro que entendesse de carga fracionada e atendimento em todo o Brasil. A BTL superou as expectativas.",
    estrelas: 5,
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="bg-secondary text-foreground py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            Depoimentos
            <span className="ml-2 inline-block h-px w-8 align-middle bg-primary" />
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Quem entrega, <span className="text-primary italic">aprova.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            O que nossos clientes dizem sobre a parceria com a BTL Transportes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <div
              key={d.nome}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-8 shadow-elegant transition hover:border-primary/30"
            >
              <div className="flex gap-1">
                {Array.from({ length: d.estrelas }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;{d.texto}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-foreground">{d.nome}</div>
                <div className="text-xs text-muted-foreground">{d.cargo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "Qual o prazo de entrega médio?", r: "Depende da origem e destino. Para o Sudeste, entregamos em até 3 dias úteis. Para Norte/Nordeste, até 7 dias úteis. Consulte uma cotação específica." },
  { q: "Vocês transportam para todo o Brasil?", r: "Sim! Temos frota própria e malha logística que cobre as 5 regiões do país, com filiais em 10 estados." },
  { q: "Qual o volume mínimo para contratar?", r: "Aceitamos desde cargas fracionadas (pequenos volumes) até lotação completa. Consulte nossa equipe comercial." },
  { q: "Como funciona o rastreamento da carga?", r: "Fornecemos um link de monitoramento em tempo real. Você acompanha o trajeto pelo celular ou computador." },
  { q: "A carga tem seguro?", r: "Sim, todas as cargas são 100% seguradas do embarque até a entrega final, sem custo adicional." },
  { q: "Quanto tempo leva para receber uma cotação?", r: "Respondemos em até 2 horas em dias úteis. Basta preencher o formulário no site ou nos chamar no WhatsApp." },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <div className="mb-14 text-center">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
          FAQ
          <span className="ml-2 inline-block h-px w-8 align-middle bg-primary" />
        </div>
        <h2 className="font-display text-5xl tracking-wide md:text-6xl">
          Dúvidas <span className="text-primary italic">frequentes</span>
        </h2>
      </div>
      <dl className="divide-y divide-border rounded-2xl border border-border">
        {FAQS.map((faq, i) => (
          <div key={i} className="group">
            <dt>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-foreground transition hover:text-primary md:text-base"
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
            </dt>
            {openIndex === i && (
              <dd className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                {faq.r}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}

// ─── CTA / Contato ────────────────────────────────────────────────────────
function Cta() {
  const [sent, setSent] = useState(false);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const nome = (data.get("nome") as string)?.trim();
    const contato = (data.get("contato") as string)?.trim();
    const origem = (data.get("origem") as string)?.trim();
    const destino = (data.get("destino") as string)?.trim();
    const carga = (data.get("carga") as string)?.trim();

    if (!nome || !contato || !origem || !destino) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const body = `Olá, sou ${nome}.%0A%0AOrigem: ${origem}%0ADestino: ${destino}%0ACarga: ${carga || "(não informado)"}%0A%0AContato: ${contato}`;
    window.location.href = `mailto:comercial@btltransportes.com.br?subject=Cotação BTL - ${nome}&body=${body}`;
    setSent(true);
    toast.success("Pedido de cotação enviado! Verifique seu e-mail.");
    f.reset();
  }, []);

  return (
    <section id="contato" className="relative isolate overflow-hidden bg-background py-24 text-foreground md:py-32">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            Fale com a gente
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Pronto para <span className="text-primary italic">embarcar</span> sua carga?
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Conte o que você precisa transportar, de onde para onde, e a gente monta a melhor solução. Resposta em até 2 horas em dias úteis.
          </p>
          <div className="mt-10 space-y-4">
            <a href="tel:+551140028922" className="flex items-center gap-4 text-lg transition hover:text-primary" aria-label="Ligar para BTL">
              <Phone className="h-5 w-5 text-primary" />
              (11) 4002-8922
            </a>
            <a href="mailto:comercial@btltransportes.com.br" className="flex items-center gap-4 text-lg transition hover:text-primary" aria-label="Enviar e-mail">
              <Mail className="h-5 w-5 text-primary" />
              comercial@btltransportes.com.br
            </a>
            <a
              href="https://wa.me/551140028922?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação%20BTL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg transition hover:text-primary"
              aria-label="Falar no WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" stroke="currentColor" strokeWidth="2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <div className="flex items-center gap-4 text-lg">
              <MapPin className="h-5 w-5 text-primary" />
              Atendimento em todo o Brasil
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10"
        >
          <h3 className="font-display text-2xl tracking-wide">Solicitar cotação</h3>
          <div className="mt-6 grid gap-4">
            <Field name="nome" label="Seu nome" required />
            <Field name="contato" label="E-mail ou telefone" required type="text" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="origem" label="Origem" required />
              <Field name="destino" label="Destino" required />
            </div>
            <Field name="carga" label="Descrição da carga" textarea />
            <button
              type="submit"
              disabled={sent}
              className="btn-glass mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-wider disabled:opacity-60"
            >
              {sent ? "Cotação enviada ✓" : "Enviar cotação"}
              {!sent && <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, required, textarea, type }: { name: string; label: string; required?: boolean; textarea?: boolean; type?: string }) {
  const cls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={3} className={cls} placeholder={`Ex: 10 geladeiras, 5 fogões`} />
      ) : (
        <input name={name} required={required} type={type ?? "text"} className={cls} placeholder={name === "contato" ? "seu@email.com ou (11) 99999-9999" : name === "origem" ? "Cidade - UF" : name === "destino" ? "Cidade - UF" : "Seu nome completo"} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src={btlLogo.url} alt="BTL Transportes" className="h-12 w-12 object-contain" />
          <div>
            <div className="font-display text-xl tracking-wider text-foreground">BTL Transportes</div>
            <div className="text-xs text-muted-foreground">Transportes e Armazenagem · Brasil</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs text-muted-foreground md:items-end">
          <p>© {new Date().getFullYear()} BTL Transportes. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00 · São Paulo - SP</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Brazil filiais map ───────────────────────────────────────────────────
const FILIAIS = [
  { city: "São Paulo", uf: "SP", lat: -23.5505, lng: -46.6333, hq: true },
  { city: "Rio de Janeiro", uf: "RJ", lat: -22.9068, lng: -43.1729 },
  { city: "Belo Horizonte", uf: "MG", lat: -19.9167, lng: -43.9345 },
  { city: "Curitiba", uf: "PR", lat: -25.4284, lng: -49.2733 },
  { city: "Porto Alegre", uf: "RS", lat: -30.0346, lng: -51.2177 },
  { city: "Brasília", uf: "DF", lat: -15.7939, lng: -47.8828 },
  { city: "Salvador", uf: "BA", lat: -12.9777, lng: -38.5016 },
  { city: "Recife", uf: "PE", lat: -8.0476, lng: -34.8770 },
  { city: "Fortaleza", uf: "CE", lat: -3.7319, lng: -38.5267 },
  { city: "Manaus", uf: "AM", lat: -3.119, lng: -60.0217 },
];

function BrazilFiliais() {
  return (
    <section id="filiais" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-primary" />
            Nossas filiais
            <span className="ml-2 inline-block h-px w-8 align-middle bg-primary" />
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Presença <span className="text-primary italic">de norte a sul</span> do Brasil
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Uma rede de filiais estrategicamente posicionadas para entregar mais rápido, com custo justo e total rastreabilidade.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative mx-auto w-full max-w-3xl">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-primary/20 blur-3xl" />
            <TruckRoutesMap pins={FILIAIS} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WhatsApp Float ───────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/551140028922?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação%20BTL"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 hover:scale-110 hover:shadow-xl active:scale-95"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}
