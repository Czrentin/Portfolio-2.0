function ContactButton({ label, value }) {
  const copyToClipboard = (copyContent) => {
    navigator.clipboard.writeText(copyContent)
  }

  return (
    <button
      className='contact-button'
      onClick={() => copyToClipboard(value)}
    >
      <p className='p-large-style'>
        {label}
        <span className='copy-content'>{value}</span>
      </p>
      <i className='fa-solid fa-copy'></i>
    </button>
  )
}

export default ContactButton
