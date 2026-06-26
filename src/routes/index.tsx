import { createFileRoute } from "@tanstack/react-router";
import heroTruck from "@/assets/hero-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import btlLogo from "@/assets/btl-logo.png.asset.json";
import muellerLogo from "@/assets/mueller.png.asset.json";
import osterLogo from "@/assets/oster.png.asset.json";
import whirlpoolLogo from "@/assets/whirlpool.png.asset.json";
import panasonicLogo from "@/assets/panasonic.png.asset.json";
import electroluxLogo from "@/assets/electrolux.png.asset.json";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Partners />
      <Services />
      <WhyUs />
      <Coverage />
      <BrazilFiliais />
      <Cta />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={btlLogo.url} alt="BTL Transportes e Armazenagem" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wider text-primary">BTL TRANSPORTES</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Transportes e Armazenagem</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          <a href="#servicos" className="transition hover:text-primary">Serviços</a>
          <a href="#diferenciais" className="transition hover:text-primary">Diferenciais</a>
          <a href="#cobertura" className="transition hover:text-primary">Cobertura</a>
          <a href="#contato" className="transition hover:text-primary">Contato</a>
        </nav>
        <a
          href="#contato"
          className="btn-glass hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider md:inline-flex"
        >
          Solicitar cotação <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      {/* decorative gradient blobs */}
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
              className="btn-glass group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider"
            >
              Solicitar cotação
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Nossos serviços
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              ["15+", "anos de estrada"],
              ["98%", "no prazo"],
              ["27", "estados"],
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
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          {/* floating logo medallion */}
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

function Marquee() {
  const items = [
    "Geladeiras", "Fogões", "Máquinas de lavar", "Micro-ondas", "Utensílios domésticos",
    "Eletroportáteis", "Bazar", "Pequenos eletros", "Linha branca",
  ];
  const loop = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-6">
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
            Already used by
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Best in the Game
          </h2>
        </div>
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}

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

function Coverage() {
  const regions = [
    { name: "Sudeste", states: "SP · RJ · MG · ES" },
    { name: "Sul", states: "PR · SC · RS" },
    { name: "Centro-Oeste", states: "GO · MT · MS · DF" },
    { name: "Nordeste", states: "BA · PE · CE · e mais" },
    { name: "Norte", states: "PA · AM · TO · e mais" },
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

function Cta() {
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
            <a href="tel:+551140028922" className="flex items-center gap-4 text-lg transition hover:text-primary">
              <Phone className="h-5 w-5 text-primary" />
              (11) 4002-8922
            </a>
            <a href="mailto:comercial@btltransportes.com.br" className="flex items-center gap-4 text-lg transition hover:text-primary">
              <Mail className="h-5 w-5 text-primary" />
              comercial@btltransportes.com.br
            </a>
            <div className="flex items-center gap-4 text-lg">
              <MapPin className="h-5 w-5 text-primary" />
              Atendimento em todo o Brasil
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const data = new FormData(f);
            const body = `Olá, sou ${data.get("nome")}.%0A%0AOrigem: ${data.get("origem")}%0ADestino: ${data.get("destino")}%0ACarga: ${data.get("carga")}%0A%0AContato: ${data.get("contato")}`;
            window.location.href = `mailto:comercial@btltransportes.com.br?subject=Cotação BTL&body=${body}`;
          }}
          className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10"
        >
          <h3 className="font-display text-2xl tracking-wide">Solicitar cotação</h3>
          <div className="mt-6 grid gap-4">
            <Field name="nome" label="Seu nome" required />
            <Field name="contato" label="E-mail ou telefone" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="origem" label="Origem" required />
              <Field name="destino" label="Destino" required />
            </div>
            <Field name="carga" label="Descrição da carga" textarea />
            <button
              type="submit"
              className="btn-glass mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-wider"
            >
              Enviar cotação <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, required, textarea }: { name: string; label: string; required?: boolean; textarea?: boolean }) {
  const cls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={3} className={cls} />
      ) : (
        <input name={name} required={required} className={cls} />
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
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BTL Transportes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

// ============================================================================
// Brazil filiais map
// ============================================================================

const FILIAIS: Array<{ city: string; uf: string; x: number; y: number; hq?: boolean }> = [
  { city: "São Paulo", uf: "SP", x: 280, y: 292, hq: true },
  { city: "Rio de Janeiro", uf: "RJ", x: 312, y: 285 },
  { city: "Belo Horizonte", uf: "MG", x: 305, y: 255 },
  { city: "Curitiba", uf: "PR", x: 256, y: 312 },
  { city: "Porto Alegre", uf: "RS", x: 232, y: 355 },
  { city: "Brasília", uf: "DF", x: 268, y: 215 },
  { city: "Salvador", uf: "BA", x: 355, y: 188 },
  { city: "Recife", uf: "PE", x: 388, y: 135 },
  { city: "Fortaleza", uf: "CE", x: 360, y: 95 },
  { city: "Manaus", uf: "AM", x: 145, y: 90 },
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

        <div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/5 via-transparent to-primary/10 blur-2xl" />
            <svg
              viewBox="0 0 400 400"
              className="h-auto w-full"
              role="img"
              aria-label="Mapa do Brasil com filiais da BTL Transportes"
            >
              <defs>
                <linearGradient id="brFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.96 0.02 25)" />
                  <stop offset="100%" stopColor="oklch(0.92 0.04 25)" />
                </linearGradient>
                <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="oklch(0.38 0.14 18)" floodOpacity="0.35" />
                </filter>
              </defs>

              {/* Stylized Brazil outline */}
              <path
                d="
                  M 388 135
                  Q 395 110 380 95
                  Q 360 80 340 92
                  Q 310 80 290 88
                  Q 268 70 248 60
                  Q 222 48 200 40
                  Q 170 28 140 30
                  Q 108 36 92 70
                  Q 70 110 60 160
                  Q 58 200 110 215
                  Q 170 218 195 240
                  Q 200 290 220 330
                  Q 235 365 260 360
                  Q 295 350 300 305
                  Q 320 300 330 285
                  Q 355 250 365 200
                  Q 380 165 388 135 Z
                "
                fill="url(#brFill)"
                stroke="oklch(0.38 0.14 18 / 0.35)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Connecting routes from SP hub */}
              {FILIAIS.filter((f) => !f.hq).map((f) => (
                <line
                  key={`route-${f.uf}`}
                  x1={280}
                  y1={292}
                  x2={f.x}
                  y2={f.y}
                  stroke="oklch(0.38 0.14 18 / 0.25)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              ))}

              {/* Pins */}
              {FILIAIS.map((f) => (
                <g key={f.uf} filter="url(#pinShadow)">
                  {f.hq && (
                    <circle
                      cx={f.x}
                      cy={f.y}
                      r="14"
                      fill="oklch(0.38 0.14 18 / 0.18)"
                    >
                      <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle cx={f.x} cy={f.y} r={f.hq ? 7 : 5} fill="oklch(0.38 0.14 18)" />
                  <circle cx={f.x} cy={f.y} r={f.hq ? 3 : 2} fill="white" />
                  <text
                    x={f.x + 10}
                    y={f.y + 4}
                    fontSize="11"
                    fontWeight={f.hq ? 700 : 600}
                    fill="oklch(0.22 0.04 18)"
                    style={{ fontFamily: "Barlow, sans-serif" }}
                  >
                    {f.uf}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div>
            <ul className="grid grid-cols-2 gap-3">
              {FILIAIS.map((f) => (
                <li
                  key={f.uf}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition hover:border-primary/40 hover:shadow-elegant"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${f.hq ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-display text-sm tracking-wide text-foreground">
                      {f.city}
                      {f.hq && <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">Matriz</span>}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{f.uf}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="font-display text-lg tracking-wide text-foreground">
                + {FILIAIS.length} filiais conectadas em rede
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Coletas e entregas integradas, com SLA monitorado em todas as praças.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
