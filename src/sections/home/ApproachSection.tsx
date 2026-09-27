import { OptionalLink, ResumeLink } from '../../components/Links'
import { profile } from '../../data/profile'

export function ApproachSection() {
  return (
    <section className="approach-section page-container" aria-labelledby="approach-title">
      <div className="section-heading">
        <h2 id="approach-title" className="section-label">Подход</h2>
        <p className="statement">Точность,<br className="mobile-break" /> глубокое погружение в контекст, системное мышление, эмпатия и Human-Centered Design.</p>
      </div>
      <div className="body-column approach-copy">
        <p>В индустрии бытует мнение, что интересоваться всем — значит не разбираться ни в чём. Я смотрю на это иначе: интерес к разным сферам науки и искусства помогает тоньше чувствовать контекст и выбирать по-настоящему изящные и точные решения, а эмпатия и глубокое понимание процессов позволяет воплощать масштабные проекты: создавать для людей и вместе с людьми.</p>
        <div id="contact" className="contact-links">
          <OptionalLink href={profile.contact} className="statement contact-link">Написать мне →</OptionalLink>
          <ResumeLink full className="mobile-resume statement" />
        </div>
      </div>
    </section>
  )
}
