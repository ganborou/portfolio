import { ResumeLink } from '../../components/Links'
import { PortfolioImage } from '../../components/PortfolioImage'

export function AboutSection() {
  return (
    <section id="about" className="about-section page-container" aria-labelledby="about-title">
      <div className="section-heading">
        <h2 id="about-title" className="section-label">Привет, я Аня</h2>
        <p className="statement about-statement">Ведущий дизайнер<br className="mobile-break" /> c фокусом<br className="wide-break" /> на яркие визуальные стратегии<br className="wide-break" /> и системный подход</p>
      </div>
      <PortfolioImage src="/media/home/portrait.png" className="about-portrait" alt="Аня Лаврова" sizes="(max-width: 767px) 235px, 324px" width="324" height="324" loading="lazy" />
      <div className="body-column about-copy">
        <p>Работала в знаковых дизайн-студиях (Sulliwan, Charmer, Tuman) и в коллаборациях с бигтехом — Яндекс, Сбер, Авито, а также частными клиентами и бизнесами. Запускала крупные всероссийские спецпроекты и оформляла локальные мероприятия.</p>
        <p>Умею выстраивать визуальную стратегию проекта и управлять процессом на всех этапах — от брифа до запуска. Балансирую между визуальной выразительностью и коммерческой эффективностью, выбирая гибкую стратегию под конкретную задачу.</p>
        <ResumeLink full className="about-resume" />
      </div>
    </section>
  )
}
