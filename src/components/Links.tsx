import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { profile } from '../data/profile'

export function OptionalLink({ href, children, className = '', download }: {
  href: string | null | undefined
  children: ReactNode
  className?: string
  download?: boolean
}) {
  return href ? (
    <a href={href} className={`text-link ${className}`} download={download || undefined}>
      {children}
    </a>
  ) : <span className={className}>{children}</span>
}

export function ResumeLink({ full = false, className = '' }: { full?: boolean; className?: string }) {
  return <OptionalLink href={profile.resume} download className={`resume-link ${className}`}>{full ? 'Скачать резюме' : 'Резюме'} ↓</OptionalLink>
}

export function PageHeader({ backTo = '/#work' }: { backTo?: string }) {
  return (
    <header className="page-header page-container flex items-center justify-between gap-6">
      <Link to={backTo} className="text-link back-link">← Назад</Link>
      <ResumeLink />
    </header>
  )
}
