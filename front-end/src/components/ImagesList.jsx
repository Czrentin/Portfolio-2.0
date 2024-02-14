import { useParams } from 'react-router-dom'
import data from '../data/data.json'

function ImagesList() {
  const { id: projectIdFromUrl } = useParams()
  const projects = data.projets

  // Filtrer les projets en fonction de l'ID de l'URL
  const filteredProjects = projects.filter((project) => project.id === projectIdFromUrl)

  return (
    <div className='card-container'>
      {filteredProjects.map((project) =>
        project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.titre} illustration ${index + 1}`}
          />
        ))
      )}
    </div>
  )
}

export default ImagesList
