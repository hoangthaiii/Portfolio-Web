import React from 'react'
import "./experience.css"
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skill i have</h5>
      <h2>Experience</h2>
      <div className='container experience_container'>
        <div className='experience-frontend'>
          <h3>FrontEnd Developments</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>React</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>TailsWin Css</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'  >Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience-backend'  >
          <h3>Backend Developments</h3>
          <div className='experience_content'  >
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'  />
              <div>
                <h4>C#</h4>
                <small className='text-light'  >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'  />
              <div>
                <h4>Java</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'  />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'  />
              <div>
                <h4>PHP</h4>
                <small className='text-light'  >Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='icon'  />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'  >Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience