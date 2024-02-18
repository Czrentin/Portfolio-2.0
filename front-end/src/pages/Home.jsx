import { Link } from 'react-router-dom'
import Portrait from '../data/portrait.jpg'
import ContactButton from '../components/ContactButton'
import LinkButton from '../components/LinkButton'
import ProjectsList from '../components/ProjectsList'

function Home() {
  return (
    <main className='home-page'>
      <section className='title-about-wrapper'>
        <div className='title-container'>
          <img
            src={Portrait}
            alt='Portrait de Corentin Braud'
          />
          <h1 className='h1-style'>Développeur web</h1>
        </div>
        <div className='about-container'>
          <h2 className='h2-style'>À propos de moi</h2>
          <p className='p-normal-style'>
            Bonjour, je suis un développeur web français, vivant dans le nord de la région
            parisienne. Passionné par le développement web et l’expérience utilisateur, j'adore
            explorer de nouvelles technologies web et je suis toujours en quête de nouvelles
            compétences à acquérir.
          </p>
          <Link
            to='/about'
            className='link p-large-style'
          >
            En savoir plus <i className='fa-solid fa-right-to-bracket'></i>
          </Link>
        </div>
      </section>
      <article className='social-contact-wrapper'>
        <div className='social-container'>
          <h2 className='h2-style'>Social</h2>
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
          <h2 className='h2-style'>Contact</h2>
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
      <section className='projects-card-wrapper'>
        <div className='projects-card-container'>
          <h2 className='h2-style'>Projets</h2>
          <ProjectsList />
          <Link
            to='https://github.com/Czrentin'
            className='link p-large-style'
            target='_blank'
          >
            Pour plus de projets <i className='fa-solid fa-right-to-bracket'></i>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
