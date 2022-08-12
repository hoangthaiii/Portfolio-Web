import React from 'react'
import "./about.css"
import about from '../../asset/about.jpg'
import avt1 from '../../asset/avt1.jpg'
import { FaAward } from 'react-icons/fa'

import { FiUsers } from 'react-icons/fi'
import { BsFolder } from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container' >
        <div className='about_me'>
          <div className='about_me-img'>
              <img src={about} alt="About Me" />
          </div>
        </div>

        <div className='about_content' >
          <div className='about_cards' >
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Month Working</small>
            </article>
            
            <article className='about_card'>
              <BsFolder className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Hello everyone. My full name is Dinh Hoang Thai, I'm currently a final year student at Hutech, my major is information technology and I'm going in the direction of working on Website. I have taught myself about Reactjs and I have some small projects for myself below. Contact me if you are interested
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About
