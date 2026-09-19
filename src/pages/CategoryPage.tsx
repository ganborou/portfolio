import { Link, useParams } from 'react-router'
import { PageHeader } from '../components/Links'
import { categories } from '../data/categories'
import { NotFoundPage } from './NotFoundPage'

export function CategoryPage() {
  const { category: id } = useParams()
  const category = categories.find((item) => item.id === id)
  if (!category) return <NotFoundPage />

  return <>
    <PageHeader />
    <main id="main-content" tabIndex={-1} className="category-page page-container">
      <div className="category-description">
        <h1 className="statement">{category.title}</h1>
        <div className="category-copy">{category.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <div className="category-projects">
        {category.projects.map((project) => {
          const content = <>
            <img src={project.image} width="443" height="528" alt="" className="project-cover" />
            <h2 className="project-title">{project.title}</h2>
          </>
          return project.available
            ? <Link key={project.slug} to={`/projects/${project.slug}`} className="project-card group">{content}</Link>
            : <article key={project.slug} className="project-card">{content}</article>
        })}
      </div>
    </main>
  </>
}
