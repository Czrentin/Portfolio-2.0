import { Link } from 'react-router-dom'
import data from '../data/data.json'

function ProjectsLink() {
  return (
    <ul className='card-container'>
      {data.projets.map((projet) => (
        <li key={projet.id}>
          <Link to={'/logements/' + projet.id}>
            <div className='card'>
              <div className='content-card'>
                <h3>{projet.titre}</h3>
                <img
                  src='https://picsum.photos/600'
                  alt={`${projet.titre} cover`}
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
