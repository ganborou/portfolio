import { ResumeLink } from './Links'

export function HomeHeader() {
  return (
    <header className="home-header">
      <div className="home-header-inner page-container">
        <p className="hero-role">Ведущий дизайнер</p>
        <ResumeLink className="hero-resume" />
      </div>
    </header>
  )
}
