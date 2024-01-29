function LinkButton({ label, value }) {
  return (
    <a
      className='link-button'
      target='_blank'
      rel='noreferrer'
      href={value}
    >
      {label}
      <i className='fa-solid fa-right-to-bracket'></i>
    </a>
  )
}

export default LinkButton
