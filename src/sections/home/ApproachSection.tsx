import { OptionalLink, ResumeLink } from '../../components/Links'
import { profile } from '../../data/profile'

export function ApproachSection() {
  return (
    <section className="approach-section page-container" aria-labelledby="approach-title">
      <div className="section-heading">
        <h2 id="approach-title" className="section-label">Подход</h2>
        <p className="statement">Точность,<br className="mobile-break" /> глубокое погружение в&nbsp;контекст, системное мышление, эмпатия и&nbsp;Human-Centered Design.</p>
      </div>
      <div className="body-column approach-copy">
        <p>В&nbsp;индустрии бытует мнение, что интересоваться всем — значит не&nbsp;разбираться ни&nbsp;в&nbsp;чём. Я&nbsp;смотрю на&nbsp;это иначе: интерес к&nbsp;разным сферам науки и&nbsp;искусства помогает тоньше чувствовать контекст и&nbsp;выбирать по-настоящему изящные и&nbsp;точные решения, а&nbsp;эмпатия и&nbsp;глубокое понимание процессов позволяет воплощать масштабные проекты: создавать для&nbsp;людей и&nbsp;вместе с&nbsp;людьми.</p>
        <div id="contact" className="contact-links">
          <OptionalLink href={profile.contact} className="statement contact-link">Написать мне →</OptionalLink>
          <ResumeLink full className="mobile-resume statement" />
        </div>
      </div>
    </section>
  )
}
