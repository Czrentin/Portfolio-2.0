import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to='/'>
        <h2>Corentin B.</h2>
      </Link>
      <div className='toggle-language'>
        <p>FR</p>
      </div>
    </header>
  )
}

export default Header
