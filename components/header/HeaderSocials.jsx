import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href=""><BsLinkedin/></a>
        <a href=""><GoMarkGithub/></a>
    </div>
  )
}

export default HeaderSocials