import { Link } from 'react-router-dom'
import Portrait from '../assets/portrait.jpg'
import ContactButton from '../components/ContactButton'
import LinkButton from '../components/LinkButton'

function Home() {
  return (
    <main className='home-page'>
      <section className='title-about-wrapper'>
        <div className='title-container'>
          <img
            src={Portrait}
            alt='Portrait de Corentin Braud'
          />
          <h1>Développeur web</h1>
        </div>
        <div className='about-container'>
          <h2>À propos de moi</h2>
          <p>
            Bonjour, je suis un développeur web français, vivant dans le nord de la région
            parisienne. Passionné par le développement web et l’expérience utilisateur, j'adore
            explorer de nouvelles technologies web et je suis toujours en quête de nouvelles
            compétences à acquérir.
          </p>
          <Link
            to='/about'
            className='link'
          >
            En savoir plus <i className='fa-solid fa-right-to-bracket'></i>
          </Link>
        </div>
      </section>
      <article className='social-contact-wrapper'>
        <div className='social-container'>
          <h2>Social</h2>
          <LinkButton
            label='GitHub'
            value='https://github.com/Czrentin'
          />
          <LinkButton
            label='LinkedIn'
            value='https://www.linkedin.com/in/corentin-braud/'
          />
        </div>
        <div className='contact-container'>
          <h2>Contact</h2>
          <ContactButton
            label='Téléphone'
            value='0638668247'
          />
          <ContactButton
            label='Email'
            value='corentin.braud95@gmail.com'
          />
        </div>
      </article>
    </main>
  )
}

export default Home
