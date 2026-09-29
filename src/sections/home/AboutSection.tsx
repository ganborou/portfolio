import { ResumeLink } from '../../components/Links'
import { PortfolioImage } from '../../components/PortfolioImage'

export function AboutSection() {
  return (
    <section id="about" className="about-section page-container" aria-labelledby="about-title">
      <div className="section-heading">
        <h2 id="about-title" className="section-label">Привет, я&nbsp;Аня</h2>
        <p className="statement about-statement">Ведущий дизайнер<br className="mobile-break" /> с&nbsp;фокусом<br className="wide-break" /> на&nbsp;яркие визуальные стратегии<br className="wide-break" /> и&nbsp;системный подход</p>
      </div>
      <PortfolioImage src="/media/home/portrait.png" className="about-portrait" alt="Аня Лаврова" sizes="(max-width: 767px) 235px, 324px" width="324" height="324" loading="lazy" />
      <div className="body-column about-copy">
        <p>Работала в&nbsp;знаковых дизайн-студиях (Sulliwan, Charmer, Tuman) и&nbsp;в&nbsp;коллаборациях с&nbsp;бигтехом — Яндекс, Сбер, Авито, а&nbsp;также частными клиентами и&nbsp;бизнесами. Запускала крупные всероссийские спецпроекты и&nbsp;оформляла локальные мероприятия.</p>
        <p>Умею выстраивать визуальную стратегию проекта и&nbsp;управлять процессом на&nbsp;всех этапах — от&nbsp;брифа до&nbsp;запуска. Балансирую между&nbsp;визуальной выразительностью и&nbsp;коммерческой эффективностью, выбирая гибкую стратегию под&nbsp;конкретную задачу.</p>
        <ResumeLink full className="about-resume" />
      </div>
    </section>
  )
}
