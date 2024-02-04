import data from '../data/data.json'

const StackList = () => {
  // const scrollers = document.querySelectorAll('.scroller')
  // Ici on imagine qu'il peut en avoir plusieurs directement

  // if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  //   // On met cette condition pour ceux qui ont un pc lent / peu de batterie / etc...
  //   addAnimation()
  // }

  // function addAnimation() {
  //   scrollers.forEach((scroller) => {
  //     scroller.setAttribute('data-animated', true)

  //     const scrollerInner = scroller.querySelector('.scroller-inner')
  //     const scrollerContent = Array.from(scrollerInner.children) // On a besoin d'un tableau au cas où il y aurait une modification du dom en cours etc

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true)
  //       duplicatedItem.setAttribute('aria-hidden', true) // Pour éviter que dans le lecteur d'écran il soit afficher 2 fois et que ça soit génant
  //       scrollerInner.appendChild(duplicatedItem)
  //     })
  //   })
  // }

  return (
    <div className='scroller'>
      <ul className='stack-list-ul scroller-inner'>
        {data.stack.map((stack, index) => (
          <li key={index}>
            <img
              src={stack.logo}
              alt={stack.nom}
            />
            <p>{stack.nom}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StackList
