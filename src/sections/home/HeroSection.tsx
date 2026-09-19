import { useState } from 'react'
import { ResumeLink } from '../../components/Links'

export function HeroSection() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner page-container">
        <header className="hero-header">
          <p className="hero-role">Ведущий дизайнер</p>
          <h1 id="hero-title" className="hero-name">Лаврова<br />Аня</h1>
          <ResumeLink className="hero-resume" />
        </header>
        <div className={`portrait-reveal ${revealed ? 'is-revealed' : ''}`}>
          <button
            className="portrait-trigger"
            type="button"
            aria-label={revealed ? 'Скрыть портрет Ани' : 'Показать портрет Ани'}
            aria-expanded={revealed}
            aria-controls="hero-portrait"
            onClick={() => setRevealed(!revealed)}
            onKeyDown={(event) => { if (event.key === 'Escape') setRevealed(false) }}
          ><span /></button>
          <img id="hero-portrait" className="hero-portrait" src="/media/home/portrait.png" width="343" height="343" alt="Портрет Ани Лавровой" />
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
