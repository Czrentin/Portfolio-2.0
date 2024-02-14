import data from '../data/data.json'

function ProjectsLink() {
  const experiences = data.parcours.experiences

  return (
    <div className='experience-list'>
      {experiences.map((experience, index) => (
        <div
          className='experience-container'
          key={index}
        >
          <p className='title-p'>{`${experience.titre} - ${experience.entreprise}`}</p>
          <p className='date-p'>{experience.dates}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectsLink
