import React from 'react'
import './about.css'
import ME from '../../assets/SelfPhoto.png'
import {FaGooglePlay} from 'react-icons/fa'
import {GoMarkGithub} from 'react-icons/go'
import {BsLinkedin} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h2 className='text-title'>Sobre Min</h2>
      <div className='about about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="MyPhoto" />
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <a href="" 
              className='text-decoration'
              target='blank'>
                <FaGooglePlay className='about__icon'/>
                <h5>GooglePlay</h5>
                <small>Projetos Publicados</small>
              </a>
            </article>
            <article className='about__card'>
              <a href="" 
              className='text-decoration'
              target='blank'>
                <GoMarkGithub className='about__icon'/>
                <h5>GitHub</h5>
                <small>Profile</small>
              </a>
            </article>
            <article className='about__card'>
              <a href="" 
              className='text-decoration'
              target='blank'>
                <BsLinkedin className='about__icon'/>
                <h5>LinkedIn</h5>
                <small>Profile</small>
              </a>
            </article>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Laborum perferendis unde fugiat, nostrum odit excepturi,
            quasi inventore dolore recusandae, nam illo veritatis dolores.
            Ea nam nobis vel optio! Iure, rem?
          </p>
        </div>
      </div>
    </section>
  )
}

export default About