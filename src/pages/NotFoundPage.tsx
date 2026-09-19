import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-container flex min-h-svh flex-col justify-center gap-8 py-20">
      <p>404</p>
      <h1 className="statement">Здесь пока пусто</h1>
      <Link to="/" className="text-link w-fit">← На главную</Link>
    </main>
  )
}
