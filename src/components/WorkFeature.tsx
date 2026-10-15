import { portfolio } from '../content/portfolio'

type Work = (typeof portfolio.work.items)[number]

export function WorkFeature({ work }: { work: Work }) {
  return (
    <article className={`work-feature ${work.theme}`} aria-labelledby={`work-${work.number}`}>
      <header className="work-heading">
        <span className="work-number" aria-hidden="true">{work.number}</span>
        <div className="work-identity">
          <p className="eyebrow">{work.category}</p>
          <h3 id={`work-${work.number}`}>{work.company}</h3>
          <p className="work-context">{work.context}</p>
        </div>
        <span className="work-mark" aria-hidden="true">↗</span>
      </header>
      <div className="work-detail">
        <div className="work-story">
          <h4>{work.title}</h4>
          <p>{work.description}</p>
          <ul className="technology-list" aria-label="Technologies and practices">
            {work.technologies.map(technology => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        <div className="work-contributions">
          <h4 className="eyebrow">{portfolio.work.contributionLabel}</h4>
          <ul>{work.contributions.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <div className="work-scope">
        <div><p className="eyebrow">{work.visual.label}</p><p className="scope-title">{work.visual.title}</p></div>
        <ul>{work.visual.rows.map(row => <li key={row}>{row}</li>)}</ul>
        <p className="scope-note">{work.visual.footer}</p>
      </div>
    </article>
  )
}
