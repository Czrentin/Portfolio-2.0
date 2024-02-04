import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/data.json'
import ErrorPage from './ErrorPage'

function Project() {
  const { id } = useParams() // Récupère l'ID depuis l'URL

  const project = data.projets.find((projet) => projet.id === id)

  if (!project) {
    return <ErrorPage />
  } else {
    return (
      <main>
        <div className='title-project-container'>
          <div className='overlay-card'></div>
          <h3>{project.titre}</h3>
          <img
            src={project.cover}
            alt=''
          />
        </div>
        <div className='presentation-project-container'>
          <h4>Présentation</h4>
          <p>{project.contexte}</p>
          <Link
            to={project.lien}
            className='link'
          >
            Le site / le GitHub <i className='fa-solid fa-right-to-bracket'></i>
          </Link>
        </div>
        <div className='stack-project-container'>
          <h4>La stack</h4>
          <div>
            <ul>
              {project.stack.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='description-project-container'>
          <h4>Le projet</h4>
          <p>{project.description}</p>
          <ul>
            {project.objectifs.map((objectifs) => (
              <li key={objectifs}>{objectifs}</li>
            ))}
          </ul>
        </div>
      </main>
    )
  }
}

export default Project
