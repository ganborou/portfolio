import { SiteFooter } from '../components/SiteFooter'
import { HeroSection } from '../sections/home/HeroSection'
import { AboutSection } from '../sections/home/AboutSection'
import { WorkNavigation } from '../sections/home/WorkNavigation'
import { ApproachSection } from '../sections/home/ApproachSection'

export function HomePage() {
  return <>
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <AboutSection />
      <WorkNavigation />
      <ApproachSection />
    </main>
    <SiteFooter />
  </>
}
