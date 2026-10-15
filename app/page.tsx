'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Linkedin,
  Mail, MapPin, Menu, Moon, Smartphone, Sparkles, Terminal, X,
} from 'lucide-react';
import ThemeToggle from './components/theme-toggle';

const projects = [
  {
    number: '01', featured: true, status: 'In development', name: 'SaeshApp',
    category: 'Location-intelligent discovery',
    description: 'A product-discovery concept connecting online search with nearby physical traders, helping people find products and navigate to relevant local shops.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Maps'],
    href: '#contact', linkLabel: 'Project case study', symbol: 'S',
  },
  {
    number: '02', featured: false, status: 'Project showcase to prepare', name: 'Scientific Calculator',
    category: 'Mobile application',
    description: 'A mathematics-focused app concept for exploring expression handling, calculation logic, input validation, and a clean mobile interface.',
    stack: ['Flutter', 'Dart', 'Testing'],
    href: '#contact', linkLabel: 'Project details', symbol: '∑',
  },
  {
    number: '03', featured: false, status: 'Planned', name: 'Developer Dashboard',
    category: 'Web application',
    description: 'A planned dashboard project for demonstrating responsive data views, reusable components, and accessible interface patterns.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    href: '#contact', linkLabel: 'Project plan', symbol: '↗',
  },
];

const skillGroups = [
  { title: 'Mobile development', icon: Smartphone, skills: ['Flutter', 'Dart', 'Responsive UI', 'State management'] },
  { title: 'Backend & data', icon: Code2, skills: ['Firebase', 'Authentication', 'Firestore', 'REST API concepts'] },
  { title: 'Web development', icon: Terminal, skills: ['HTML & CSS', 'TypeScript — learning', 'Next.js — learning', 'Tailwind CSS — learning'] },
  { title: 'Tools & workflow', icon: Github, skills: ['Git', 'GitHub', 'VS Code', 'Debugging'] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Writing', '#writing'], ['Contact', '#contact']];

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Alfred Idibia home"><span className="brand-mark">AI<span>.</span></span><span className="brand-name">Alfred Idibia</span></a>
        <nav className={`desktop-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="mailto:nwekefredrick7@gmail.com">Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
        <div className="header-actions"><ThemeToggle /><button className="icon-button mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>

      <section className={`hero section-wrap ${visible ? 'hero-ready' : ''}`} id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO LEARNING & COLLABORATION</div>
          <h1>Building useful<br />software for <span className="accent-text">real life.</span></h1>
          <p className="hero-role">Flutter Developer <span className="role-divider">/</span> Software Engineer in Training</p>
          <p className="hero-description">I&apos;m Alfred Nweke Idibia, a developer in Lagos, Nigeria, focused on building thoughtful mobile experiences, learning sound engineering practices, and turning practical problems into useful digital products.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="button button-secondary" href="#contact">Get in touch <ArrowRight size={16} /></a></div>
          <div className="hero-meta"><span><MapPin size={14} /> Lagos, Nigeria</span><span className="meta-divider" /><span><Sparkles size={14} /> Learning by building</span></div>
        </div>
        <div className="hero-visual" aria-label="Portrait of Alfred Idibia">
          <div className="visual-grid" />
          <div className="portrait-frame"><img className="portrait-image" src="/images/alfred-idibia-portrait.png" alt="Professional portrait of Alfred Idibia" width="1024" height="1365" fetchPriority="high" /><div className="portrait-corner corner-tl" /><div className="portrait-corner corner-br" /></div>
          <div className="portrait-details">
            <div className="floating-card"><span className="floating-icon"><Code2 size={16} /></span><span><strong>Build with intent</strong><small>Purpose before complexity</small></span></div>
            <div className="floating-card"><span className="live-indicator" /><span><strong>Currently building</strong><small>SaeshApp · Flutter</small></span></div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
        <div className="visual-index">PORTFOLIO / 2026</div>
      </section>

      <section className="intro-strip"><div className="section-wrap intro-strip-inner"><span className="strip-label">MY APPROACH</span><p>Curiosity into code. <span>Ideas into working software.</span></p><span className="strip-mark">✳</span></div></section>

      <section className="content-section section-wrap" id="about" data-reveal>
        <div className="section-heading"><span className="section-kicker">01 / A LITTLE ABOUT ME</span><h2>Engineer in progress.<br /><span className="muted-heading">Problem solver by nature.</span></h2></div>
        <div className="about-grid"><div className="about-lead"><p className="large-copy">I care about more than making an interface look good. I want to understand how a product works, why it matters, and how to build it so it can grow.</p><p>I&apos;m developing my software engineering skills through hands-on projects, exploring mobile development, application architecture, backend integration, and user-centred design. My current focus is SaeshApp, a location-intelligent discovery concept.</p><p>This portfolio will grow alongside my work: real implementations, honest lessons, and the technical decisions behind them.</p></div><div className="about-facts"><div className="fact-row"><span className="fact-label">BASED IN</span><strong>Lagos, Nigeria</strong></div><div className="fact-row"><span className="fact-label">PRIMARY FOCUS</span><strong>Flutter & Dart</strong></div><div className="fact-row"><span className="fact-label">CURRENT MODE</span><strong>Learn · Build · Improve</strong></div><div className="fact-row"><span className="fact-label">INTERESTED IN</span><strong>Mobile · Product · Architecture</strong></div></div></div>
      </section>

      <section className="content-section skills-section" id="skills" data-reveal><div className="section-wrap"><div className="section-heading heading-row"><div><span className="section-kicker">02 / TOOLS I WORK WITH</span><h2>My current <span className="muted-heading">toolkit.</span></h2></div><p className="heading-note">A transparent snapshot of my working knowledge and the technologies I&apos;m actively learning.</p></div><div className="skills-grid">{skillGroups.map((group) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-arrow"><ArrowUpRight size={15} /></span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div></article>; })}</div></div></section>

      <section className="content-section section-wrap" id="projects" data-reveal><div className="section-heading heading-row"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects with <span className="muted-heading">purpose.</span></h2></div><p className="heading-note">These are active or planned project showcases. Links will point to working demos and public repositories as each project is ready.</p></div><div className="projects-grid">{projects.map((project) => <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.number}><div className="project-art"><div className="project-art-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-status"><span className="status-dot" />{project.status}</span></div><div className="project-symbol">{project.symbol}</div><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><span className="art-caption">{project.category.toUpperCase()}</span></div><div className="project-body"><div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight className="project-title-arrow" size={18} /></div><p>{project.description}</p><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><a className="project-link" href={project.href}>{project.linkLabel} <ArrowRight size={15} /></a></div></article>)}</div></section>

      <section className="experience-band" data-reveal><div className="section-wrap experience-grid"><div><span className="section-kicker">04 / THE JOURNEY</span><h2>Experience built<br />one project at a time.</h2></div><div className="experience-entry"><span className="timeline-dot" /><div><div className="experience-topline"><h3>Independent Software Development</h3><span>Ongoing</span></div><p className="experience-subtitle">Personal projects · Technical learning · Product exploration</p><p>I use hands-on project work to strengthen my Flutter and Dart skills, explore maintainable application structure, and practise integrating interfaces with data, authentication, and location-aware features.</p><div className="experience-tags"><span>Flutter development</span><span>Architecture fundamentals</span><span>Continuous learning</span></div></div></div></div></section>

      <section className="content-section section-wrap" id="writing" data-reveal><div className="section-heading heading-row"><div><span className="section-kicker">05 / NOTES FROM THE BUILD</span><h2>Learning in <span className="muted-heading">public.</span></h2></div><p className="heading-note">Draft article ideas based on the real work and technical decisions behind my projects.</p></div><div className="writing-list"><article className="writing-item"><span className="writing-number">01</span><div className="writing-main"><span className="writing-category">CASE STUDY · DRAFT</span><h3>Designing SaeshApp: connecting digital discovery with local trade</h3><p>A look at the product problem, location-aware discovery flow, and architecture questions guiding the project.</p></div><span className="writing-arrow"><ArrowUpRight size={19} /></span></article><article className="writing-item"><span className="writing-number">02</span><div className="writing-main"><span className="writing-category">ENGINEERING NOTES · DRAFT</span><h3>From Flutter screens to a maintainable application</h3><p>Lessons from organising UI components, separating responsibilities, and approaching mobile features incrementally.</p></div><span className="writing-arrow"><ArrowUpRight size={19} /></span></article><article className="writing-item"><span className="writing-number">03</span><div className="writing-main"><span className="writing-category">LEARNING LOG · PLANNED</span><h3>Building a scientific calculator: thinking beyond the buttons</h3><p>Exploring expression parsing, input edge cases, calculation accuracy, and tests for mathematical behaviour.</p></div><span className="writing-arrow"><ArrowUpRight size={19} /></span></article></div><p className="small-note">These are article concepts, not published technical reports. We&apos;ll write and verify each article alongside the implementation.</p></section>

      <section className="contact-section" id="contact" data-reveal><div className="section-wrap contact-inner"><div className="contact-copy"><span className="section-kicker">06 / START A CONVERSATION</span><h2>Have a useful problem<br />in mind? <span className="accent-text">Let&apos;s talk.</span></h2><p>I&apos;m interested in learning opportunities, thoughtful collaborations, and conversations about building practical software.</p><a className="button button-primary contact-email" href="mailto:nwekefredrick7@gmail.com"><Mail size={17} /> nwekefredrick7@gmail.com <ArrowUpRight size={16} /></a></div><div className="contact-side"><span className="fact-label">FIND ME ONLINE</span><a href="https://github.com/" target="_blank" rel="noreferrer" className="social-link"><span><Github size={18} /> GitHub</span><span className="placeholder-label">PROFILE LINK TO UPDATE <ArrowUpRight size={14} /></span></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-link"><span><Linkedin size={18} /> LinkedIn</span><span className="placeholder-label">PROFILE LINK TO UPDATE <ArrowUpRight size={14} /></span></a><a href="https://x.com/" target="_blank" rel="noreferrer" className="social-link"><span className="x-symbol">𝕏</span><span>X / Twitter</span><span className="placeholder-label">PROFILE LINK TO UPDATE <ArrowUpRight size={14} /></span></a><a href="https://wa.me/" target="_blank" rel="noreferrer" className="social-link"><span className="whatsapp-mark">W</span><span>WhatsApp</span><span className="placeholder-label">NUMBER TO ADD <ArrowUpRight size={14} /></span></a></div></div></section>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a href="#home" className="brand footer-brand"><span className="brand-mark">AI<span>.</span></span><span className="brand-name">Alfred Idibia</span></a><span className="footer-note">Built with curiosity and a commitment to getting better.</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Alfred Idibia</span></div></footer>
    </main>
  );
}
