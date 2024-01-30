import { Link } from 'react-router-dom'

function CardLink({ value }) {
  return (
    <div class='card'>
      <div class='project-info'>
        <div class='project-bio'>
          <h3>{value}</h3>
        </div>

        <div class='project-link'>
          <Link>lien</Link>
        </div>
      </div>
    </div>
  )
}

export default CardLink
