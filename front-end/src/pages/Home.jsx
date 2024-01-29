import ContactButton from '../components/ContactButton'
import LinkButton from '../components/LinkButton'

function Home() {
  return (
    <main className='home-page'>
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
