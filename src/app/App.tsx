import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { HomePage } from '../pages/HomePage'
import { CategoryPage } from '../pages/CategoryPage'
import { ProjectPage } from '../pages/ProjectPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { categories } from '../data/categories'
import { projects } from '../data/projects'

function PageNavigation() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    const category = categories.find((item) => pathname === `/work/${item.id}`)
    const project = projects.find((item) => pathname === `/projects/${item.slug}`)
    const name = category?.title ?? project?.title
    document.title = name ? `${name} — Аня Лаврова` : pathname === '/' ? 'Аня Лаврова — дизайнер' : 'Страница не найдена — Аня Лаврова'
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export function App() {
  return <>
    <a className="skip-link" href="#main-content">Перейти к&nbsp;содержимому</a>
    <PageNavigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/:category" element={<CategoryPage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
}
