import data from '../data/data.json'
import StackList from '../components/StackList'
import ExperienceList from '../components/ExperienceList'

function About() {
  return (
    <main>
      <section className='about-me-section'>
        <h2>À propos de moi</h2>
        {data.parcours.details.map((detail, index) => (
          <p key={index}>
            {detail}
            <br />
          </p>
        ))}
        <p>{data.parcours.details.join('\n')}</p>
      </section>
      <section className='stack-section'>
        <h2>Ma stack technique</h2>
        <StackList />
      </section>
      <section className='experience-section'>
        <h2>Mes expériences</h2>
        <ExperienceList />
      </section>
    </main>
  )
}

export default About
