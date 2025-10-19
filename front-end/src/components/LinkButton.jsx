import { Link } from 'react-router-dom'

function LinkButton({ label, value }) {
  return (
    <Link
      to={value}
      target='_blank'
      className='link-button p-large-style'
    >
      {label}
      <i class='fa-solid fa-person-walking-arrow-right'></i>
    </Link>
  )
}

export default LinkButton
