import { portfolio } from '../content/portfolio'

type Work = typeof portfolio.work.items[number]

export function WorkCard({ work }: { work: Work }) {
  return <article className={`work-card ${work.theme}`}>
    <div className="work-visual" aria-label={`Illustrative overview: ${work.visual.title}`}>
      <div className="visual-top"><span>{work.visual.label}</span><span>{work.number} / 03</span></div>
      <div className="product-diagram">
        <div className="diagram-heading"><span className="diagram-symbol" aria-hidden="true">{work.number === '01' ? '↗' : work.number === '02' ? '⌘' : '◉'}</span><h3>{work.visual.title}</h3></div>
        {work.visual.rows.map((row, index) => <div className="diagram-row" key={row}><span className="row-marker" aria-hidden="true">0{index + 1}</span><span>{row}</span><span aria-hidden="true">↗</span></div>)}
      </div>
      <p className="visual-footer">{work.visual.footer}</p>
    </div>
    <div className="work-body"><p className="eyebrow">{work.category}</p><p className="company">{work.company}</p><p className="work-context">{work.context}</p><h3>{work.title}</h3><p>{work.description}</p><h4>{portfolio.work.contributionLabel}</h4><ul>{work.contributions.map(item => <li key={item}>{item}</li>)}</ul><div className="tags">{work.technologies.map(technology => <span key={technology}>{technology}</span>)}</div></div>
  </article>
}
