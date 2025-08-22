import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Wrench,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";

// -----------------------------------------
// Portfolio – Single-file React (Vite/CRA)
// Palette: Dark Blue (blue-950/900 base)
// -----------------------------------------

// Data
const skills = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "Nuxt.js",
    "React",
    "HTML",
    "CSS",
    "TailwindCSS",
  ],
  backend: ["Node.js", "Java", "Spring Boot", "Python", "REST APIs", "GraphQL"],
  testing: ["Cypress", "Jest", "JUnit", "Pytest"],
  db: ["MySQL", "PostgreSQL", "MongoDB"],
  other: ["Git/GitHub", "CMS (Strapi)", "SCRUM", "AI Foundations"],
};

const experience = [
  {
    company: "Hashdex",
    role: "Desenvolvedor Front-End",
    period: "09/2023 – 10/2024",
    bullets: [
      "Desenvolvimento e otimização de interfaces com Vue.js, Nuxt.js e TailwindCSS.",
      "Testes end-to-end com Cypress garantindo qualidade de páginas e componentes.",
      "Integração e personalização do CMS Strapi (conteúdo e controle de acesso).",
      "Documentação técnica para reuso e evolução do produto.",
    ],
  },
];

const projects = [
  {
    name: "Minas na Área",
    description:
      "Rede social baseada na ODS 5 da ONU, promovendo igualdade de gênero e empoderamento feminino. Projeto em equipe apresentado na Gen Talents.",
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Java",
      "Spring Boot",
      "Swagger",
      "MySQL",
      "JUnit",
    ],
    links: [
      {
        label: "Visitar",
        href: "https://minas-na-area.vercel.app/",
        icon: ExternalLink,
      },
    ],
  },
];

const education = [
  {
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    org: "Universidade Cruzeiro do Sul",
    period: "07/2022 – 12/2024",
  },
  {
    course: "Bootcamp Desenvolvedor Web Full Stack (Java)",
    org: "Generation Brasil",
    period: "05/2023 – 08/2023",
  },
];

const contacts = {
  name: "Lucas Vinícius Barbato",
  title: "Desenvolvedor Full-Stack",
  email: "mailto:lucasbarbato80@gmail.com",
  phone: "tel:+5511948930158",
  phoneLabel: "+55 11 94893-0158",
  location: "São Paulo - SP",
  linkedin: "https://www.linkedin.com/in/lucasbarbato/",
  github: "https://github.com/lucaolv",
  resume: "https://flowcv.com/resume/235ke2r695",
};

// UI Primitives
const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 rounded-2xl bg-blue-900/40 text-blue-300">
        <Icon className="w-5 h-5" aria-hidden />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-200">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 rounded-full border border-blue-800 text-blue-200 text-sm leading-none bg-blue-950/40">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-blue-800 p-6 shadow-sm bg-blue-950/60 backdrop-blur ${className}`}>
    {children}
  </div>
);

// Sections
function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "about", label: "Sobre" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experiência" },
    { id: "projects", label: "Projetos" },
    { id: "education", label: "Educação" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-blue-950/80 border-b border-blue-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-blue-100">
        <a href="#home" className="font-semibold">
          {contacts.name}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm hover:bg-blue-800 px-3 py-2 rounded-lg transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        {/* Right icons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={contacts.github}
            aria-label="GitHub"
            target="_blank"
            className="p-2 rounded-xl border border-blue-800 hover:shadow">
            <Github className="w-4 h-4" />
          </a>
          <a
            href={contacts.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            className="p-2 rounded-xl border border-blue-800 hover:shadow">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md border border-blue-800 bg-blue-950/40">
            {/* simple hamburger icon */}
            <svg
              className="w-5 h-5 text-blue-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden ${
          open ? "block" : "hidden"
        } border-t border-blue-800 bg-blue-950/95`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-blue-100 hover:bg-blue-900/50">
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-3 mt-2">
              <a
                href={contacts.github}
                aria-label="GitHub"
                className="p-2 rounded-xl border border-blue-800 hover:shadow">
                <Github className="w-4 h-4" />
              </a>
              <a
                href={contacts.linkedin}
                aria-label="LinkedIn"
                className="p-2 rounded-xl border border-blue-800 hover:shadow">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-800 text-xs mb-4 text-blue-300">
            <span className="inline-block w-2 h-2 rounded-full animate-pulse bg-blue-400" />
            Disponível para novas oportunidades
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-blue-100">
            {contacts.title}
          </h1>
          <p className="text-lg text-blue-200/90 max-w-prose">
            Experiência em Front-End (Vue, Nuxt, React, Tailwind) e Back-End
            (Node, Java, Spring, Python), com foco em qualidade
            (Cypress/Jest/JUnit/Pytest) e interesse em aplicar IA para gerar
            impacto real.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-2xl border border-blue-800 font-medium hover:shadow text-blue-200">
              Ver Projetos
            </a>
            <a
              href={contacts.resume}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-2xl border border-blue-800 font-medium hover:shadow text-blue-200">
              Ver Currículo
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-8 text-sm text-blue-300">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {contacts.location}
            </span>
            <a
              className="inline-flex items-center gap-1 hover:underline"
              href={contacts.email}>
              <Mail className="w-4 h-4" /> lucasbarbato80@gmail.com
            </a>
            <a
              className="inline-flex items-center gap-1 hover:underline"
              href={contacts.phone}>
              <Phone className="w-4 h-4" /> {contacts.phoneLabel}
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="justify-self-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl border border-blue-800 overflow-hidden shadow-md bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center">
            <Code2 className="w-20 h-20 opacity-70 text-blue-400" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" title="Sobre mim" icon={Globe}>
    <Card>
      <p className="text-blue-200 leading-relaxed">
        Sou desenvolvedor Full-Stack com pouco mais de um ano de experiência
        profissional, com foco em Front-End (JavaScript, Vue.js, Nuxt.js,
        TailwindCSS) e testes automatizados com Cypress/Jest. Também possuo
        experiência prática com Back-End (Node.js, Java, Spring Boot, Python,
        MySQL), integração de CMS (Strapi) e testes com JUnit e Pytest.
        Recentemente aprofundei meus conhecimentos em Inteligência Artificial,
        buscando aplicar soluções inovadoras e otimizadas em desenvolvimento de
        software.
      </p>
    </Card>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="Habilidades" icon={Wrench}>
    <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      data-testid="skills-section">
      <Card>
        <h3 className="font-semibold text-blue-100 mb-4">Front-End</h3>
        <div className="flex flex-wrap gap-2">
          {skills.frontend.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-semibold text-blue-100 mb-4">Back-End</h3>
        <div className="flex flex-wrap gap-2">
          {skills.backend.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-semibold text-blue-100 mb-4">Testes</h3>
        <div className="flex flex-wrap gap-2">
          {skills.testing.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-semibold text-blue-100 mb-4">Banco de Dados</h3>
        <div className="flex flex-wrap gap-2">
          {skills.db.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-semibold text-blue-100 mb-4">Outros</h3>
        <div className="flex flex-wrap gap-2">
          {skills.other.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Card>
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Experiência" icon={Briefcase}>
    <div className="space-y-6" data-testid="experience-section">
      {experience.map((exp) => (
        <Card key={exp.company}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-blue-100">
                {exp.role} · {exp.company}
              </h3>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-blue-200">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-sm opacity-80 whitespace-nowrap text-blue-300">
              {exp.period}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Projetos" icon={Code2}>
    <div className="grid md:grid-cols-2 gap-6" data-testid="projects-section">
      {projects.map((p) => (
        <Card key={p.name}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-100">{p.name}</h3>
              <p className="mt-2 text-blue-200">{p.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {p.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div className="flex gap-3 mt-5">
            {p.links?.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-800 text-sm hover:shadow text-blue-200"
                target="_blank"
                rel="noreferrer">
                <Icon className="w-4 h-4" /> {label}
              </a>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Educação" icon={GraduationCap}>
    <div className="grid md:grid-cols-2 gap-6" data-testid="education-section">
      {education.map((e) => (
        <Card key={e.course}>
          <h3 className="font-semibold text-blue-100">{e.course}</h3>
          <div className="text-sm opacity-80 mt-1 text-blue-300">{e.org}</div>
          <div className="text-sm opacity-70 mt-1 text-blue-300">
            {e.period}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contato" icon={Mail}>
    <Card>
      <div className="gap-6 items-center" data-testid="contact-section">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-100">
            Vamos conversar
          </h3>
          <p className="text-blue-200">
            Aberto a oportunidades e colaborações. Me chame por e-mail, telefone
            ou redes.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={contacts.email}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-800 hover:shadow text-blue-200">
              <Mail className="w-4 h-4" /> E-mail
            </a>
            <a
              href={contacts.phone}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-800 hover:shadow text-blue-200">
              <Phone className="w-4 h-4" /> Telefone
            </a>
            <a
              href={contacts.linkedin}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-800 hover:shadow text-blue-200"
              target="_blank"
              rel="noreferrer">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={contacts.github}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-800 hover:shadow text-blue-200"
              target="_blank"
              rel="noreferrer">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </Card>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-blue-800 mt-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-blue-300">
      <p>
        © {new Date().getFullYear()} {contacts.name}. Todos os direitos
        reservados.
      </p>
    </div>
  </footer>
);

// Root Component
export default function PortfolioLucasBarbato() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-blue-100">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

// -----------------
// Dev Smoke Tests ✅
// -----------------
if (import.meta?.env?.DEV) {
  // Basic runtime assertions to catch common mistakes
  console.groupCollapsed("[Portfolio] Smoke tests");
  console.assert(
    typeof PortfolioLucasBarbato === "function",
    "Root component must be a function"
  );
  console.assert(
    typeof Skills === "function",
    "Skills component should be defined"
  );
  console.assert(
    typeof Experience === "function",
    "Experience component should be defined"
  );
  console.assert(
    typeof Projects === "function",
    "Projects component should be defined"
  );
  console.assert(
    typeof Education === "function",
    "Education component should be defined"
  );
  console.assert(
    typeof Contact === "function",
    "Contact component should be defined"
  );
  console.assert(
    Array.isArray(skills.frontend) && skills.frontend.includes("React"),
    "Skills.frontend should include React"
  );
  console.assert(experience.length > 0, "Experience array should not be empty");
  console.assert(projects.length > 0, "Projects array should not be empty");
  console.assert(education.length > 0, "Education array should not be empty");
  console.groupEnd();
}
