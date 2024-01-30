import { Link } from 'react-router-dom'
const x = 1

function CardLink({ value }) {
  return (
    <Link to={x}>
      <div class='card'>
        <div className='content-card'>
          <h3>{value}</h3>
          <img
            src='https://picsum.photos/600'
            alt=''
          />
          <div className='overlay-card'></div>
        </div>
      </div>
    </Link>
  )
}

export default CardLink
