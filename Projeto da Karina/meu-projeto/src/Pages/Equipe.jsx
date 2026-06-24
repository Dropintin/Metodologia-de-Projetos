import ContactOnly from "../Componentes/ContactOnly";

import fotoMatheus from "../assets/matheus.png";
import fotoLuiz from "../assets/luiz.png";
import fotoGabrielT from "../assets/gabriel_t.png";
import fotoGabrielA from "../assets/gabriel_a.png";
import fotoMiguel from "../assets/miguel.png";

const members = [
  {
    name: "Matheus Trevisan Ribeiro",
    role: "Líder do Projeto",
    description:
      "Sou o líder do grupo neste projeto. Responsável por tomar as principais decisões, acompanhar de perto o andamento geral do trabalho e garantir que os objetivos sejam cumpridos dentro do prazo.",
    photo: fotoMatheus,
    initials: "MT",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Luiz Eduardo Emmerich",
    role: "Pesquisa & Redação Técnica",
    description:
      "Responsável por toda a pesquisa estrutural e redação técnica, cuidando do desenvolvimento completo da apostila técnica.",
    photo: fotoLuiz,
    initials: "LE",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Gabriel Trevisan Ribeiro",
    role: "Design & UI/UX",
    description:
      "Responsável pela criação da identidade visual, refinamento de fluxos e desenvolvimento minucioso das interfaces gráficas e protótipos interativos no Canva e Figma.",
    photo: fotoGabrielT,
    initials: "GT",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Gabriel Alves Poleto",
    role: "Integração & Validação",
    description:
      "Responsável por apoiar a equipe nas demais áreas do projeto, auxiliando ativamente na integração dos recursos educacionais e na validação das dinâmicas.",
    photo: fotoGabrielA,
    initials: "GP",
    email: "#",
    linkedin: "#",
  },
  {
    name: "Miguel Lucas Costa",
    role: "Design & Prototipagem",
    description:
      "Responsável pela criação da identidade visual, refinamento de fluxos e desenvolvimento minucioso das interfaces gráficas e protótipos interativos no Canva e Figma.",
    photo: fotoMiguel,
    initials: "ML",
    email: "#",
    linkedin: "#",
  },
];

export default function Equipe() {
  const top = members.slice(0, 2);
  const middle = members.slice(2, 4);
  const bottom = members.slice(4);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f4f6f9", minHeight: "100vh" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #0d47a1 0%, #1976d2 60%, #42a5f5 100%)",
          padding: "80px 24px 60px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.6rem", fontWeight: 700, margin: "0 0 16px", letterSpacing: "-0.5px" }}>
          Sobre Nós
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: 560, margin: "0 auto", opacity: 0.88, lineHeight: 1.7 }}>
          Conheça a equipe apaixonada que está por trás deste projeto e como podemos ajudar você.
        </p>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 56px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#0d47a1",
            marginBottom: 40,
            letterSpacing: "-0.3px",
          }}
        >
          Membros da Equipe
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 24 }}>
          {top.map((m) => <MemberCard key={m.name} member={m} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 24 }}>
          {middle.map((m) => <MemberCard key={m.name} member={m} />)}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "calc(50% - 12px)" }}>
            <MemberCard member={bottom[0]} />
          </div>
        </div>
      </section>

      <ContactOnly />
    </div>
  );
}

function MemberCard({ member }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        padding: "32px 24px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(13,71,161,0.13)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)";
      }}
    >
      <img
        src={member.photo}
        alt={member.name}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center top",
          marginBottom: 16,
          border: "3px solid #e3f2fd",
        }}
      />

      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{member.name}</h3>
      <span style={{ fontSize: "0.78rem", background: "#e3f2fd", color: "#0d47a1", borderRadius: 20, padding: "3px 12px", fontWeight: 600, marginBottom: 12, display: "inline-block" }}>
        {member.role}
      </span>
      <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.65, margin: "0 0 20px" }}>{member.description}</p>

      <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
        <SocialIcon href={member.email} label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
          </svg>
        </SocialIcon>
        <SocialIcon href={member.linkedin} label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </SocialIcon>
      </div>
    </div>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a href={href} aria-label={label}
      style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #1976d2", color: "#1976d2", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#1976d2"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1976d2"; }}
    >
      {children}
    </a>
  );
}