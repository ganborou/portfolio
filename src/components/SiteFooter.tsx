import { profile } from '../data/profile'
import { OptionalLink, ResumeLink } from './Links'

export function SiteFooter() {
  return (
    <footer className="site-footer page-container" aria-label="Контакты">
      <img src="/media/home/signature.svg" width="66" height="111" className="signature" alt="" loading="lazy" />
      <div className="footer-socials">
        {profile.socials.map(({ label, href }) => <OptionalLink key={label} href={href}>{label}</OptionalLink>)}
      </div>
      <ResumeLink full className="footer-resume" />
    </footer>
  )
}
