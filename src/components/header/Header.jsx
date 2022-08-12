import React from 'react'
import CTA from './CTA'
import "./header.css"
import me from "../../asset/me.jpg"
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Hoang Thai</h1>
        <h5 className="text-light">FrontEnd Intern</h5>
        <CTA />
        <HeaderSocials />
        <div>
          <img src={me} alt="me" className='me' />
        </div>
        <a href='#contact' className='srcoll__down'> Srcoll Down </a>
      </div>
    </header>
  )
}

export default Header