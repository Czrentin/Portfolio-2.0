import { Link } from 'react-router-dom'

function LinkButton({ label, value }) {
  return (
    <Link
      to={value}
      target='_blank'
      className='link-button p-large-style'
    >
      {label}
      <i className='fa-solid fa-right-to-bracket'></i>
    </Link>
  )
}

export default LinkButton
