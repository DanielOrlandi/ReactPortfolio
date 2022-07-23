import React from 'react'
import './footer.css'
import {FaGooglePlay} from 'react-icons/fa'
import {GoMarkGithub} from 'react-icons/go'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo text-decoration'></a>
      <ul className='permalinks'>
        <li><a href="#about" className='text-decoration'>About</a></li>
        <li><a href="#portfolio" className='text-decoration'>Portfolio</a></li>
        <li><a href="#experience" className='text-decoration'>Experience</a></li>
        <li><a href="#certificates" className='text-decoration'>Certificates</a></li>
        <li><a href="#contact" className='text-decoration'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href=""><FaGooglePlay/></a>
        <a href=""><GoMarkGithub/></a>
        <a href=""><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer