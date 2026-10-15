import { portfolio as p } from './content/portfolio'
import { Arrow } from './components/Arrow'
import { WorkFeature } from './components/WorkFeature'

export default function App() {
  const base = import.meta.env.BASE_URL

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="shell masthead">
          <a className="brand" href="#main" aria-label={`${p.name}, home`}><span className="brand-symbol" aria-hidden="true">[cr]</span><span>{p.name}</span></a>
          <nav aria-label="Main navigation">
            {p.navigation.map((link, index) => <a key={link.id} href={`#${link.id}`}><span aria-hidden="true">0{index + 1}</span>{link.label}</a>)}
          </nav>
          <a className="header-contact" href={`mailto:${p.email}`} aria-label={p.hero.contactLabel}><Arrow diagonal /></a>
        </div>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell">
            <div className="hero-overline"><p className="eyebrow">{p.hero.eyebrow}</p><span className="eyebrow">{p.location}</span></div>
            <div className="hero-layout">
              <div className="hero-editorial">
                <p className="eyebrow hero-kicker">{p.name} / {p.role}</p>
                <h1 id="hero-title">Software<br /><span>Engineer<span className="title-period">.</span></span></h1>
                <p className="hero-description">{p.hero.description}</p>
                <div className="hero-links">
                  <a className="underlined-link" href={`mailto:${p.email}`}>{p.hero.contactLabel}<Arrow diagonal /></a>
                  <a href={p.links.linkedin} target="_blank" rel="noreferrer">{p.contact.linkedinLabel}<Arrow diagonal /></a>
                  <a href={p.links.github} target="_blank" rel="noreferrer">{p.contact.githubLabel}<Arrow diagonal /></a>
                </div>
              </div>
              <figure className="portrait">
                <div className="portrait-frame">
                  <img src={`${base}${p.portrait.src}`} srcSet={`${base}${p.portrait.smallSrc} 640w, ${base}${p.portrait.src} 1200w`} sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 43vw, 510px" alt={p.portrait.alt} width={p.portrait.width} height={p.portrait.height} fetchPriority="high" decoding="async" />
                  <span className="photo-index" aria-hidden="true">CR / 01</span>
                </div>
                <figcaption><span>{p.name}</span><span className="eyebrow">{p.location}<br />{p.role}</span></figcaption>
              </figure>
            </div>
            <div className="hero-footnote">
              <p>{p.hero.title[0]}<br />{p.hero.title[1]}</p>
              <ul aria-label="Primary technologies">{p.hero.stack.map(item => <li key={item}>{item}</li>)}</ul>
              <a className="work-jump" href="#work"><span>{p.hero.workLabel}</span><span className="circle-arrow"><Arrow /></span></a>
            </div>
          </div>
        </section>
        <section id="about" className="section shell about" aria-labelledby="about-title">
          <div className="section-label"><p className="eyebrow">{p.about.label}</p><span aria-hidden="true">↙</span></div>
          <div className="about-layout">
            <div className="about-narrative"><h2 id="about-title">{p.about.title}</h2><div className="about-copy">{p.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
            <aside className="engineering-principles"><h3 className="eyebrow">{p.hero.focusLabel}</h3><ol>{p.hero.focus.map(text => <li key={text}>{text}</li>)}</ol></aside>
          </div>
          <dl className="facts">{p.about.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}{'detail' in fact && <small>{fact.detail}</small>}</dd></div>)}</dl>
        </section>
        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-label"><p className="eyebrow">{p.work.label}</p><span aria-hidden="true">↙</span></div>
            <div className="section-heading"><h2 id="work-title">{p.work.title}</h2><p>{p.work.introduction}</p></div>
            <div className="work-features">{p.work.items.map(work => <WorkFeature key={work.number} work={work} />)}</div>
            <details className="earlier-experience">
              <summary><span><span className="eyebrow">{p.experience.label}</span><span className="earlier-title">{p.experience.title}</span></span><span className="expand-label">{p.experience.expandLabel}<span className="plus" aria-hidden="true">+</span></span></summary>
              <div className="experience-list">{p.experience.items.map(item => <article key={item.company}><div><h3>{item.company}</h3><p>{item.role}</p><small>{item.dates}</small></div><p>{item.description}</p></article>)}</div>
            </details>
          </div>
        </section>
        <section id="expertise" className="section shell expertise" aria-labelledby="skills-title">
          <div className="section-label"><p className="eyebrow">{p.skills.label}</p><span aria-hidden="true">↙</span></div>
          <div className="section-heading"><h2 id="skills-title">{p.skills.title}</h2><p>{p.skills.introduction}</p></div>
          <div className="skills-list">{p.skills.groups.map((group, index) => <div className="skill-row" key={group.title}><span className="eyebrow skill-number">0{index + 1}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
          <aside className="confidentiality"><p className="eyebrow">{p.confidentiality.label}</p><div><h3>{p.confidentiality.title}</h3><p>{p.confidentiality.description}</p></div></aside>
        </section>
        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="shell">
            <div className="section-label"><p className="eyebrow">{p.contact.label}</p><span aria-hidden="true">↗</span></div>
            <div className="contact-layout"><h2 id="contact-title">{p.contact.title}</h2><div className="contact-note"><p>{p.contact.description}</p><a className="contact-email" href={`mailto:${p.email}`}><span>{p.contact.emailLabel}<small>{p.email}</small></span><Arrow diagonal /></a></div></div>
            <div className="contact-bottom"><p className="eyebrow">{p.name} / {p.role}</p><div className="contact-profiles"><a href={p.links.linkedin} target="_blank" rel="noreferrer">{p.contact.linkedinLabel}<Arrow diagonal /></a><a href={p.links.github} target="_blank" rel="noreferrer">{p.contact.githubLabel}<Arrow diagonal /></a></div></div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="shell footer-inner"><span>© {new Date().getFullYear()} {p.name}</span><span>{p.footer}</span><a href="#main">Back to top <span aria-hidden="true">↑</span></a></div></footer>
    </>
  )
}
