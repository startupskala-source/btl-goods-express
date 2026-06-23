import { createFileRoute } from "@tanstack/react-router";
import heroTruck from "@/assets/hero-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import {
  Truck,
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
      <Marquee />
      <Services />
      <WhyUs />
      <Coverage />
      <Cta />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2 text-primary-foreground">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-amber shadow-amber">
            <Truck className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <div className="font-display text-2xl tracking-wider">BTL</div>
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">Transportes</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-primary-foreground/90 md:flex">
          <a href="#servicos" className="transition hover:text-brand-amber">Serviços</a>
          <a href="#diferenciais" className="transition hover:text-brand-amber">Diferenciais</a>
          <a href="#cobertura" className="transition hover:text-brand-amber">Cobertura</a>
          <a href="#contato" className="transition hover:text-brand-amber">Contato</a>
        </nav>
        <a
          href="#contato"
          className="hidden items-center gap-2 rounded-sm bg-gradient-amber px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-amber transition hover:brightness-105 md:inline-flex"
        >
          Solicitar cotação <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[88vh] overflow-hidden">
      <img
        src={heroTruck}
        alt="Caminhão BTL Transportes em estrada ao entardecer"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 pt-40 pb-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
            Transportadora · desde 2010
          </div>
          <h1 className="text-balance font-display text-6xl leading-[0.95] tracking-wide text-primary-foreground sm:text-7xl md:text-8xl">
            Sua carga <span className="text-brand-amber">no destino</span>,
            <br /> sem surpresas.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            Especialistas em <strong className="font-semibold text-primary-foreground">linha branca</strong> e <strong className="font-semibold text-primary-foreground">bazar</strong>. Frota própria, equipe treinada e rastreamento em tempo real do embarque à entrega.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-sm bg-gradient-amber px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-amber transition hover:brightness-105"
            >
              Solicitar cotação
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Nossos serviços
            </a>
          </div>
        </div>

        <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-primary-foreground/10 bg-primary-foreground/10 backdrop-blur md:grid-cols-4">
          {[
            ["15+", "anos de estrada"],
            ["98%", "entregas no prazo"],
            ["27", "estados atendidos"],
            ["24/7", "monitoramento"],
          ].map(([k, v]) => (
            <div key={v} className="bg-primary/70 px-6 py-5">
              <dt className="font-display text-3xl text-brand-amber">{k}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/80">{v}</dd>
            </div>
          ))}
        </dl>
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
    <section className="overflow-hidden border-y border-border bg-brand-navy-deep py-6">
      <div className="flex w-[200%] animate-marquee gap-12 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-3 font-display text-2xl tracking-wider text-primary-foreground/80">
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
          </span>
        ))}
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
            <span className="mr-2 inline-block h-px w-8 align-middle bg-brand-amber" />
            O que transportamos
          </div>
          <h2 className="font-display text-5xl tracking-wide text-foreground md:text-6xl">
            Carga certa, <span className="text-brand-amber">manuseio certo.</span>
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Cada categoria tem suas exigências. Treinamos nossa equipe e equipamos nossa frota para cada uma delas.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="group flex flex-col gap-4 bg-card p-8 transition hover:bg-primary hover:text-primary-foreground">
            <s.icon className="h-10 w-10 text-brand-amber transition group-hover:scale-110" strokeWidth={1.5} />
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
    <section id="diferenciais" className="bg-brand-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="relative">
          <img
            src={warehouse}
            alt="Galpão da BTL Transportes com linha branca e bazar"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-elegant"
            loading="lazy"
            width={1600}
            height={1100}
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-sm bg-gradient-amber p-6 shadow-amber md:block">
            <div className="font-display text-5xl leading-none text-primary">+50k</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary/80">
              entregas realizadas
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-amber">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-brand-amber" />
            Por que a BTL
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Logística pensada para <span className="text-brand-amber">carga delicada.</span>
          </h2>
          <p className="mt-6 max-w-lg text-primary-foreground/80">
            Linha branca e bazar pedem cuidado redobrado. Cada motorista, ajudante e operador passa por treinamento contínuo — porque uma entrega bem feita começa muito antes do caminhão sair do pátio.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-brand-amber bg-brand-amber/10">
                  <it.icon className="h-5 w-5 text-brand-amber" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide">{it.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{it.desc}</p>
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
          <span className="mr-2 inline-block h-px w-8 align-middle bg-brand-amber" />
          Cobertura nacional
        </div>
        <h2 className="font-display text-5xl tracking-wide md:text-6xl">
          Do Oiapoque ao Chuí, <span className="text-brand-amber">sem perder o ritmo.</span>
        </h2>
      </div>
      <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-5">
        {regions.map((r) => (
          <div key={r.name} className="bg-card p-8">
            <MapPin className="h-6 w-6 text-brand-amber" />
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
    <section id="contato" className="relative isolate overflow-hidden bg-brand-navy-deep py-24 text-primary-foreground md:py-32">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-amber/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-amber/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-amber">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-brand-amber" />
            Fale com a gente
          </div>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Pronto para <span className="text-brand-amber">embarcar</span> sua carga?
          </h2>
          <p className="mt-6 max-w-lg text-primary-foreground/80">
            Conte o que você precisa transportar, de onde para onde, e a gente monta a melhor solução. Resposta em até 2 horas em dias úteis.
          </p>
          <div className="mt-10 space-y-4">
            <a href="tel:+551140028922" className="flex items-center gap-4 text-lg transition hover:text-brand-amber">
              <Phone className="h-5 w-5 text-brand-amber" />
              (11) 4002-8922
            </a>
            <a href="mailto:comercial@btltransportes.com.br" className="flex items-center gap-4 text-lg transition hover:text-brand-amber">
              <Mail className="h-5 w-5 text-brand-amber" />
              comercial@btltransportes.com.br
            </a>
            <div className="flex items-center gap-4 text-lg">
              <MapPin className="h-5 w-5 text-brand-amber" />
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
          className="rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur md:p-10"
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
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-amber px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-amber transition hover:brightness-105"
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
    "w-full rounded-sm border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-brand-amber focus:outline-none focus:ring-1 focus:ring-brand-amber";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
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
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-amber">
            <Truck className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-display text-xl tracking-wider text-foreground">BTL Transportes</div>
            <div className="text-xs text-muted-foreground">Linha branca e bazar · Brasil</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BTL Transportes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
