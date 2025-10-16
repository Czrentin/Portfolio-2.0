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
      const scrollerInner = scroller.querySelector('.scroller-inner')

      // attendre que toutes les images à l'intérieur soient chargées
      const imgs = Array.from(scrollerInner.querySelectorAll('img'))
      const waitForImages = Promise.all(
        imgs.map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) resolve()
              else img.addEventListener('load', resolve)
              // si l'image échoue, on résout quand même pour ne pas bloquer
              img.addEventListener('error', resolve)
            })
        )
      )

      waitForImages.then(() => {
        // re-vérifier qu'on n'a pas été animé entre-temps
        if (scroller.getAttribute('data-animated')) return

        const scrollerContent = Array.from(scrollerInner.children)

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true)
          duplicatedItem.setAttribute('aria-hidden', true)
          scrollerInner.appendChild(duplicatedItem)
        })

        // activer l'animation après duplication
        scroller.setAttribute('data-animated', true)
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
