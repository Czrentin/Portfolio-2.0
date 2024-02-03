import { Link } from 'react-router-dom'
import data from '../data/data.json'

function ProjectsLink() {
  const projects = data.projets

  return (
    <ul className='card-container'>
      {projects.map((project) => (
        <li key={project.id}>
          <Link to={`/project/${project.id}`}>
            <div className='card'>
              <div className='content-card'>
                <h3>{project.titre}</h3>
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
