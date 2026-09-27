import { useState } from 'react'
import { Link } from 'react-router'
import { categories } from '../../data/categories'
import type { CategoryId } from '../../types/portfolio'
import { GradientGrain } from '../../components/GradientGrain'

export function WorkNavigation() {
  const [active, setActive] = useState<CategoryId>('special-projects')
  return (
    <nav id="work" aria-label="Направления работ" className={`work-navigation active-${active}`}>
      <h2 className="sr-only">Избранные работы</h2>
      <div className="work-scene">
        <div className="work-cloud" aria-hidden="true">
          <GradientGrain color="#83dce9" />
        </div>
        <ul className="work-links">
          {categories.map(({ id, title }) => (
            <li key={id} className={`work-item work-${id}`}>
              <Link to={`/work/${id}`} onMouseEnter={() => setActive(id)} onFocus={() => setActive(id)} className="work-link">
                <span>{title}</span><span className="work-marker" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
