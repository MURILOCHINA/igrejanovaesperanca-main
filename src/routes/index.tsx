// Simulação de Banco de Dados NoSQL Local para a Faculdade
const dadosEventos = [
  { id: 1, evento: "Culto de Celebração", dia: "Domingo", horario: "19:00", responsavel: "Pastor Principal" },
  { id: 2, evento: "Estudo Bíblico", dia: "Quarta-feira", horario: "20:00", responsavel: "Presbítero Carlos" },
  { id: 3, evento: "Reunião de Jovens", dia: "Sábado", horario: "18:30", responsavel: "Líder Amanda" }
];
function TabelaEventosAcademica() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '24px', textAlign: 'center' }}>
        📊 Agenda Oficial da Igreja (Tabela de Dados)
      </h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#333', textAlign: 'left' }}>
            <th style={{ padding: '12px', border: '1px solid #444' }}>ID</th>
            <th style={{ padding: '12px', border: '1px solid #444' }}>Evento / Culto</th>
            <th style={{ padding: '12px', border: '1px solid #444' }}>Dia</th>
            <th style={{ padding: '12px', border: '1px solid #444' }}>Horário</th>
            <th style={{ padding: '12px', border: '1px solid #444' }}>Responsável</th>
          </tr>
        </thead>
        <tbody>
          {dadosEventos.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #444' }}>
              <td style={{ padding: '12px', border: '1px solid #444' }}>{item.id}</td>
              <td style={{ padding: '12px', border: '1px solid #444', fontWeight: 'bold', color: '#ffb74d' }}>{item.evento}</td>
              <td style={{ padding: '12px', border: '1px solid #444' }}>{item.dia}</td>
              <td style={{ padding: '12px', border: '1px solid #444' }}>{item.horario}</td>
              <td style={{ padding: '12px', border: '1px solid #444' }}>{item.responsavel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";
import churchLogo from "@/assets/church-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Igreja Nova Esperança — Comunidade de fé, amor e serviço" },
      {
        name: "description",
        content:
          "Bem-vindo à Igreja Nova Esperança. Cultos, eventos, projetos sociais e uma comunidade que acolhe você.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#horarios", label: "Horários" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  { href: "https://www.instagram.com/eniac.oficial/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/eniac.oficial/?locale=pt_BR", label: "Facebook", Icon: Facebook },
  { href: "https://www.youtube.com/@eniac.oficial", label: "YouTube", Icon: Youtube },
];

const enderecoUrl =
  "https://www.google.com/maps?sca_esv=2dce545249f27ab8&rlz=1C1GCEU_pt-BRBR1108BR1108&biw=1920&bih=911&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWVuaWFjMg4QLhivARjHARiABBiOBTIHEC4YgAQYCjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyChAAGIAEGIoFGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyHRAuGK8BGMcBGIAEGI4FGJcFGNwEGN4EGOAE2AEBSM1JUO9FWOZIcAV4AZABAJgBdKAB0QOqAQMwLjS4AQPIAQD4AQGYAgmgAoAEwgIKEAAYRxjWBBiwA8ICChAuGIAEGIoFGEPCAgsQABiABBixAxiDAcICCxAAGIAEGIoFGLEDwgIOEC4YgAQYsQMYxwEY0QPCAhkQLhiABBiKBRhDGJcFGNwEGN4EGN8E2AEBwgIEEAAYA8ICDhAAGIAEGIoFGLEDGIMBwgIREC4YrwEYxwEYsQMYgAQYjgXCAhEQLhiABBixAxjHARivARiOBcICDRAuGIAEGIoFGEMYsQPCAg0QABiABBiKBRhDGLEDwgIOEC4YgAQYigUYsQMYgwHCAgUQLhiABMICIBAuGK8BGMcBGLEDGIAEGI4FGJcFGNwEGN4EGOAE2AEBmAMAiAYBkAYIugYGCAEQARgUkgcDNS40oAfEPbIHAzAuNLgH7APCBwcwLjIuNi4xyAclgAgB&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KQEAVLJe9c6UMV-52Nz_C_gN&daddr=R.+For%C3%A7a+P%C3%BAblica,+89+-+Centro,+Guarulhos+-+SP,+07012-030";

const pilares = [
  {
    title: "Amor",
    desc: "Acolhemos cada pessoa como ela é, com o carinho de uma família.",
  },
  {
    title: "Palavra",
    desc: "A Bíblia é o nosso fundamento e bússola para a vida diária.",
  },
  {
    title: "Comunhão",
    desc: "Caminhamos juntos — celebrando, servindo e crescendo.",
  },
];

const horarios = [
  { dia: "Domingo", manha: "10h00 — Culto da Família", noite: "19h00 — Culto de Celebração" },
  { dia: "Segunda", manha: "—", noite: "20h00 — Intercessão" },
  { dia: "Terça", manha: "—", noite: "—" },
  { dia: "Quarta", manha: "—", noite: "19h30 — Estudo Bíblico" },
  { dia: "Quinta", manha: "—", noite: "20h00 — Ministério de Louvor" },
  { dia: "Sexta", manha: "—", noite: "20h00 — Encontro de Jovens" },
  { dia: "Sábado", manha: "09h00 — Projeto Social", noite: "—" },
];

const eventos = [
  { dia: "12", mes: "Jun", titulo: "Encontro de Jovens", quando: "Sex · 20h" },
  { dia: "23", mes: "Jun", titulo: "Culto de Celebração", quando: "Dom · 19h" },
  { dia: "06", mes: "Jul", titulo: "Projeto Social — Bairro", quando: "Sáb · 09h" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#inicio" className="flex items-center gap-3 text-primary-foreground">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15 backdrop-blur">
              <img
                src={churchLogo}
                alt="Logo Igreja Nova Esperança"
                width={32}
                height={32}
                className="h-8 w-8"
                loading="lazy"
              />
            </span>
            <div className="leading-tight">
              <p className="font-serif text-lg">Igreja Nova Esperança</p>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-70">
                comunidade de fé
              </p>
            </div>
          </a>
          <nav className="hidden gap-8 text-sm text-primary-foreground/90 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-opacity hover:opacity-70">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Interior de uma igreja com luz dourada"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 text-background">
          <span className="text-xs uppercase tracking-[0.4em] opacity-80">
            Bem-vindo à nossa casa
          </span>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Onde a fé encontra o coração.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-background/85">
            Somos uma comunidade que vive o evangelho com simplicidade — venha celebrar,
            aprender e servir conosco.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#eventos"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Próximos eventos
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-background/40 px-6 py-3 text-sm font-medium text-background backdrop-blur transition-colors hover:bg-background/10"
            >
              Conheça a igreja
            </a>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Nossos pilares</span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Uma fé que se vive em comunidade.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-serif text-2xl text-primary">{p.title}</h3>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comunidade */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Comunidade</span>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
              Há um lugar reservado para você.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Seja na primeira visita ou caminhando há anos conosco, queremos te conhecer.
              Nossos cultos são abertos, simples e cheios de esperança — traga sua família,
              suas perguntas e seu coração.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Fale conosco
            </a>
          </div>
          <div className="rounded-3xl bg-card p-10 shadow-sm">
            <p className="font-serif text-3xl leading-snug text-foreground">
              “Vinde a mim, todos os que estais cansados e sobrecarregados,
              <span className="text-primary"> e eu vos aliviarei.</span>”
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Mateus 11:28
            </p>
          </div>
        </div>
      </section>

      {/* Tabela de Horários */}
      {/* Tabela de Horários Integrada com Banco de Dados Acadêmico */}
      <section id="horarios" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Programação</span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Horários dos Cultos e Eventos
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Dados dinâmicos carregados a partir de uma coleção estruturada local.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-2xl shadow-lg">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-[0.2em]">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-[0.2em]">
                  Evento / Culto
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-[0.2em]">
                  Dia
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-[0.2em]">
                  Horário
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-[0.2em]">
                  Responsável
                </th>
              </tr>
            </thead>
            <tbody>
              {dadosEventos.map((item, i) => (
                <tr
                  key={item.id}
                  className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}
                >
                  <td className="px-6 py-5 font-mono text-sm text-primary font-bold">{item.id}</td>
                  <td className="px-6 py-5 font-serif text-lg text-foreground font-bold">{item.evento}</td>
                  <td className="px-6 py-5 text-muted-foreground">{item.dia}</td>
                  <td className="px-6 py-5 text-muted-foreground">{item.horario}</td>
                  <td className="px-6 py-5 text-muted-foreground font-medium">{item.responsavel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Agenda */}
      <section id="eventos" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Agenda</span>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
                Próximos encontros
              </h2>
            </div>
            <a href="#" className="text-sm text-primary hover:underline">
              Ver todos →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {eventos.map((e) => (
              <article
                key={e.titulo}
                className="flex gap-5 rounded-2xl bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <span className="font-serif text-3xl leading-none">{e.dia}</span>
                  <span className="mt-1 text-[10px] uppercase tracking-[0.2em]">{e.mes}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{e.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.quando}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">Igreja Nova Esperança</p>
            <p className="mt-4 max-w-xs text-sm text-background/70">
              Uma comunidade que acolhe, ensina e serve. Venha fazer parte da nossa família.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-background/60">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/85">
              <li>
                <a
                  href={enderecoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Eniac, R. Força Pública, 89 - Centro, Guarulhos - SP, 07012-030
                </a>
              </li>
              <li>(11) 4002-8922</li>
              <li>contato@novaesperanca.org</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-background/60">Horários</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/85">
              <li>Domingo — 10h e 19h</li>
              <li>Quarta — 19h30 (estudo bíblico)</li>
              <li>Sexta — 20h (jovens)</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 py-6 text-center text-xs text-background/50">
          © 2026 Igreja Nova Esperança. Todos os direitos reservados.
          <span className="ml-2 text-[9px] tracking-[0.2em] text-background/40">TIMA</span>
        </div>
      </footer>
    </div>
  );
}
