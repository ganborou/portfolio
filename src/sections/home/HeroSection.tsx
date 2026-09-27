import { useState } from 'react'
import { PortfolioImage } from '../../components/PortfolioImage'
import { GradientGrain } from '../../components/GradientGrain'

export function HeroSection() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="hero" aria-labelledby="hero-title">
      <GradientGrain />
      <div className="hero-inner page-container">
        <div className="hero-header">
          <h1 id="hero-title" className="hero-name">Лаврова<br />Аня</h1>
        </div>
        <div className={`portrait-reveal ${revealed ? 'is-revealed' : ''}`}>
          <button
            className="portrait-trigger"
            type="button"
            aria-label="Показать портрет Ани"
            aria-expanded={revealed}
            aria-controls="hero-portrait"
            onMouseEnter={() => setRevealed(true)}
            onMouseLeave={() => setRevealed(false)}
            onFocus={() => setRevealed(true)}
            onBlur={() => setRevealed(false)}
            onClick={() => setRevealed(true)}
            onKeyDown={(event) => { if (event.key === 'Escape') setRevealed(false) }}
          ><span /></button>
          <PortfolioImage id="hero-portrait" className="hero-portrait" src="/media/home/portrait.png" sizes="343px" width="343" height="343" alt="Портрет Ани Лавровой" />
        </div>
        <div className="hero-bottom">
          <a href="#about" className="text-link scroll-link">Скролл ↓</a>
          <div className="hero-intro">
            <p className="mb-6">8+ лет опыта</p>
            <p>Арт-дирекшен, UX/UI дизайн,<br className="desktop-break" /> коммуникационный дизайн,<br />разработка визуальных стратегий</p>
          </div>
        </div>
      </div>
    </section>
  )
}
