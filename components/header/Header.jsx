import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import About from '../about/About'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Ola! Meu nome é</h5>
        <h2 className='text-title'></h2>
        <h5 className='text-light'>Desenvolvedor Front-end e Unity</h5>
        <CTA />
        <About />
      </div>
    </header>
  )
}

export default Header