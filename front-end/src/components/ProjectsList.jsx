import { Link, useParams } from 'react-router-dom'
import data from '../data/data.json'

function ProjectsLink() {
  const { id: projectIdFromUrl } = useParams()
  const projects = data.projets

  // Filtrer les projets en fonction de l'ID de l'URL
  const filteredProjects = projects.filter((project) => project.id !== projectIdFromUrl)

  return (
    <ul className='card-container'>
      {filteredProjects.map((project) => (
        <li key={project.id}>
          <Link to={`/project/${project.id}`}>
            <div className='card'>
              <div className='content-card'>
                <h3 className='h3-style'>{project.titre}</h3>
                <img
                  src={project.cover}
                  alt={`${project.titre} cover`}
                />
                <div className='overlay-card'></div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ProjectsLink
