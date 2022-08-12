import React from 'react'

import {IoLogoYoutube} from 'react-icons/io'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.facebook.com/hoangthaihh1/' className='social-icon' target="_blank" ><BsFacebook/></a>
        <a href='https://www.instagram.com/' className='social-icon' target="_blank" ><IoLogoYoutube/></a>
        <a href='https://www.youtube.com/' className='social-icon' target="_blank" ><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials