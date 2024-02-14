import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/data.json'
import ErrorPage from './ErrorPage'
import ProjectsList from '../components/ProjectsList'
import ImagesList from '../components/ImagesList'

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
          <div className='container-paragraphe'>
            {project.contexte.map((contexte, index) => (
              <p key={index}>
                {contexte}
                <br />
              </p>
            ))}
          </div>
          <Link
            to={project.lien}
            className='link'
            target='_blank'
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
          <div className='container-paragraphe'>
            {project.description.map((description, index) => (
              <p key={index}>
                {description}
                <br />
              </p>
            ))}
          </div>
          <h5>Les objectifs de ce projet :</h5>
          <ul>
            {project.objectifs.map((objectifs) => (
              <li key={objectifs}>{objectifs}</li>
            ))}
          </ul>
          <ImagesList />
        </div>
        <div className='other-project-container'>
          <h4>Autres projets</h4>
          <ProjectsList />
        </div>
      </main>
    )
  }
}

export default Project
