import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to='/'>
        <h2 className='h2-style'>Corentin B.</h2>
      </Link>
      <div className='toggle-language h2-style'>
        <p>FR</p>
      </div>
    </header>
  )
}

export default Header
