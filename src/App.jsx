import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import { awards, certifications, experience, projects, skills } from './data/portfolio'
import './Futuristic.css'

const portraitUrl = 'https://static.wixstatic.com/media/c39a46_b2a6fc9881db4c5989ad567def0bb607~mv2.jpg/v1/fill/w_490,h_760,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c39a46_b2a6fc9881db4c5989ad567def0bb607~mv2.jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Jion Andal, home">
          <span className="wordmark-icon">ja</span>
          <span>jion andal<span className="wordmark-period">.</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>My Work</a>
          <a href="#about" onClick={closeMenu}>About Me</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#recognition" onClick={closeMenu}>Recognitions</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Say hello <span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Analyst Programmer <span className="eyebrow-divider">/</span> Front-end Developer</div>
            <h1 id="hero-title">Thoughtful tech.<br /><span>People first.</span></h1>
            <p className="hero-intro">I’m Edward Jion Andal, a front-end developer who likes turning ideas into reality.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <span>↓</span></a>
              <a className="text-link" href="mailto:andaljion@gmail.com">Let’s talk <span>↗</span></a>
            </div>
            <div className="hero-note"><span className="note-star">✳</span> Building useful things with care, curiosity &amp; an eye for perfection.</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-backdrop" />
            <div className="portrait-frame">
              <img src={portraitUrl} alt="Edward Jion Andal" />
              <span className="portrait-caption">a little about me <span>↘</span></span>
            </div>
            <div className="hero-sticker"><span>curious<br />by nature</span><b>✳</b></div>
            <div className="hero-index">01 <span>/ 04</span></div>
          </div>
          <a className="scroll-cue" href="#work"><span className="scroll-line" /> Scroll to explore</a>
        </section>

        <section className="intro-strip" aria-label="Professional highlights">
          <span>Currently at <strong>Sun Life Asia Service Center</strong></span>
          <span className="strip-separator">✳</span>
          <span>Based in <strong>Metro Manila, Philippines</strong></span>
          <span className="strip-separator">✳</span>
          <span>Open to <strong>good conversations</strong></span>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><span className="section-kicker">A few things I’ve made</span><h2>Selected work<span className="accent-dot">.</span></h2></div>
            <a className="text-link github-link" href="https://github.com/Jion-Andal" target="_blank" rel="noreferrer">More on GitHub <span>↗</span></a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-layout">
            <div className="about-heading"><span className="section-kicker">The person behind the pixels</span><h2>Curious mind.<br /><span>Steady hands.</span></h2><span className="about-scribble">✳</span></div>
            <div className="about-content">
              <p className="about-lede">I’m a front-end developer and Analyst Programmer with a soft spot for clean interfaces, good collaboration, and figuring out how things work.</p>
              <p>Through out my career, I have built responsive web experiences with React and Angular, connected interfaces to APIs, and helped teams take features from a good idea to production. I’ve also worked across QA, API test automation, and the little alignment moments that help distributed teams move together.</p>
              <div className="skills-block"><span className="skills-label">Things I work with</span><div className="skills-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading"><div><span className="section-kicker">The path so far</span><h2>Experience<span className="accent-dot">.</span></h2></div><span className="experience-aside">Good work is a team sport.</span></div>
          <div className="experience-list">
            {experience.map((role) => (
              <article className="experience-row" key={role.title}>
                <div className="experience-date">{role.dates}</div>
                <div className="experience-main"><h3>{role.title}</h3><div className="experience-company">{role.company} <span>·</span> {role.location}</div><p>{role.description}</p><div className="experience-tags">{role.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div></div>
                <span className="experience-marker" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="recognition-section" id="recognition">
          <div className="section-wrap recognition-layout">
            <div className="recognition-title"><span className="section-kicker">A little recognition</span><h2>Good things<br />along the way<span className="accent-dot">.</span></h2><p>Grateful for the people and moments that made these possible.</p></div>
            <div className="recognition-content">
              <div className="recognition-group"><div className="group-label">Awards &amp; milestones</div><div className="recognition-items">{awards.map((award) => <div className="recognition-item" key={`${award.title}-${award.date}`}><div><h3>{award.title}</h3><span>{award.organization}</span></div><time>{award.date}</time></div>)}</div></div>
              <div className="recognition-group certification-group"><div className="group-label">Certifications &amp; training</div><div className="certification-items">{certifications.map((certification) => <div className="certification-item" key={certification.title}><span className="certification-mark">↗</span><div><h3>{certification.title}</h3><span>{certification.issuer} <span className="cert-date">· {certification.date}</span></span></div></div>)}</div></div>
              <div className="education-line"><span className="group-label">Education</span><div><strong>BS Information Technology</strong><span>Lyceum of the Philippines University – Batangas <i>· 2022</i></span></div><span className="education-flower">✳</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <span className="section-kicker">Have a good one in mind?</span>
            <h2>Let’s make<br /><span>something matter.</span></h2>
            <a className="contact-email" href="mailto:andaljion@gmail.com">andaljion@gmail.com <span>↗</span></a>
            <div className="contact-links"><a href="tel:+639760142167">+63 976 014 2167</a><a href="https://www.linkedin.com/in/edward-jion-andal-819833216/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Jion-Andal" target="_blank" rel="noreferrer">GitHub ↗</a></div>
            <div className="contact-flower" aria-hidden="true">✳</div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-icon">ja</span><span>jion andal<span className="wordmark-period">.</span></span></a><span>Designed &amp; built with care <span className="footer-heart">♥</span></span><span>© 2026 Edward Jion Andal</span></footer>
    </>
  )
}

export default App
