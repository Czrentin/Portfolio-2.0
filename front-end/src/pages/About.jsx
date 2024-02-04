import data from '../data/data.json'
import StackList from '../components/StackList'

function About() {
  return (
    <main>
      <section className='about-me-section'>
        <h2>À propos de moi</h2>
        <p>{data.parcours.details}</p>
      </section>
      <section className='stack-section'>
        <h2>Ma stack technique</h2>
        <StackList />
      </section>
      <section className='experience-section'>
        <h2>Mes expériences</h2>
      </section>
    </main>
  )
}

export default About
