function ContactButton({ label, value }) {
  const copyToClipboard = (copyContent) => {
    navigator.clipboard.writeText(copyContent)
  }

  return (
    <div className='contact-button'>
      <p>
        {label}
        <span className='copy-content'>{value}</span>
      </p>
      <i
        className='fa-solid fa-copy'
        onClick={() => copyToClipboard(value)}
      ></i>
    </div>
  )
}

export default ContactButton
