import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn-second text-decoration'>Baixar Currículo</a>
      <a href='#contact' className='btn-first text-decoration'>Entre em contato.</a>
    </div>
  )
}

export default CTA