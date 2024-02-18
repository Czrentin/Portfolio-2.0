function Footer() {
  const actualDate = new Date()
  const actualYear = actualDate.getFullYear()

  return <footer className='h2-style'>{actualYear}</footer>
}

export default Footer
