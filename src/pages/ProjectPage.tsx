import { Link, useParams } from 'react-router'
import { PageHeader, OptionalLink } from '../components/Links'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFoundPage />
  const categoryPath = `/work/${project.category}`

  return <>
    <PageHeader backTo={categoryPath} />
    <main id="main-content" tabIndex={-1}>
      <div className="case-header page-container">
        <h1 className="statement case-title">{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <p className="case-year">{project.year}</p>
        {project.externalUrl && <a href={project.externalUrl} className="text-link resume-link case-external">Смотреть сайт →</a>}
      </div>
      <div className="case-gallery" aria-label="Материалы проекта">
        {project.images.map((image, index) => <img
          key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height}
          loading={index === 0 ? 'eager' : 'lazy'} decoding="async"
        />)}
      </div>
      <div className="page-container case-return">
        <Link className="text-link" to={categoryPath}>← Все сайты</Link>
        <OptionalLink href={profile.contact}>Написать мне →</OptionalLink>
      </div>
    </main>
  </>
}
