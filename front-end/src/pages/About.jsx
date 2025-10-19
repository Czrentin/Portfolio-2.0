import data from '../data/data.json'
import StackList from '../components/StackList'
import ExperienceList from '../components/ExperienceList'
import ProjectsList from '../components/ProjectsList'

function About() {
  return (
    <main>
      <section className='about-me-section'>
        <h2 className='h3-style'>À propos de moi</h2>
        <div className='p-container'>
          {data.parcours.details.map((detail, index) => (
            <p
              className='p-normal-style'
              key={index}
            >
              {detail}
              <br />
            </p>
          ))}
        </div>
      </section>
      <section className='stack-section'>
        <h2 className='h3-style'>Ma stack technique</h2>
        <StackList />
      </section>
      <section className='experience-section'>
        <h2 className='h3-style'>Mes expériences</h2>
        <ExperienceList />
      </section>
      <div className='other-project-container'>
        <h3 className='h3-style'>Mes projets</h3>
        <ProjectsList />
      </div>
    </main>
  )
}

export default About
