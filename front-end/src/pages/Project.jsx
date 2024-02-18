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
          <h2 className='h2-style'>{project.titre}</h2>
          <img
            src={project.cover}
            alt=''
          />
        </div>
        <div className='presentation-project-container'>
          <h3 className='h3-style'>Présentation</h3>
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
          <h3 className='h3-style'>La stack</h3>
          <div>
            <ul>
              {project.stack.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='description-project-container'>
          <h3 className='h3-style'>Le projet</h3>
          <div className='container-paragraphe'>
            {project.description.map((description, index) => (
              <p key={index}>
                {description}
                <br />
              </p>
            ))}
          </div>
          <h4>Les objectifs de ce projet :</h4>
          <ul>
            {project.objectifs.map((objectifs) => (
              <li key={objectifs}>{objectifs}</li>
            ))}
          </ul>
          <ImagesList />
        </div>
        <div className='other-project-container'>
          <h3 className='h3-style'>Autres projets</h3>
          <ProjectsList />
        </div>
      </main>
    )
  }
}

export default Project
