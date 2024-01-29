function Footer() {
  const actualDate = new Date()
  const actualYear = actualDate.getFullYear()

  return <footer>{actualYear}</footer>
}

export default Footer
