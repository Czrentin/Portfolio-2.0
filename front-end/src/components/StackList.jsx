import React, { useEffect } from 'react'
import data from '../data/data.json'

const StackList = () => {
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // On met cette condition pour ceux qui ont un pc lent / peu de batterie / etc...
      addAnimation()
    }
  }, []) // Le tableau vide en tant que dépendance assure que cela ne se déclenchera qu'une seule fois après le montage initial.

  function addAnimation() {
    const scroller = document.querySelector('.scroller')
    if (scroller && !scroller.getAttribute('data-animated')) {
      scroller.setAttribute('data-animated', true)

      const scrollerInner = scroller.querySelector('.scroller-inner')
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
      })
    }
  }

  return (
    <div className='scroller'>
      <ul className='stack-list-ul scroller-inner'>
        {data.stack.map((stack, index) => (
          <li key={index}>
            <img
              className='scroller-image'
              src={stack.logo}
              alt={stack.nom}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StackList
