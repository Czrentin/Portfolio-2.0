import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <main className='error-container'>
      <p className='p-large-style error-text'>Ceci est un message d'erreur.</p>
      <Link
        to='/'
        className='link p-large-style error-link'
      >
        Accueil <i className='fa-solid fa-right-to-bracket'></i>
      </Link>
    </main>
  )
}

export default ErrorPage
