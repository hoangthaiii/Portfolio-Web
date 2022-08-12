import React from 'react'
import "./contact.css"
import { MdOutlineMail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cyyo2ow', 'template_lfwqez1', form.current, '0bTD8ztjZBpKF3mhz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Toch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option' >
            <MdOutlineMail className='contact_opIcon' />
            <h4>Email</h4>
            <h5>tuilathaine@gmail.com</h5>
            <a href='mailto: tuilathaine@gmail.com' target='_blank' >Send a message</a>
          </article>
          <article className='contact_option' >
            <BsMessenger className='contact_opIcon'/>
            <h4>Messenger</h4>
            <h5>Dinh Hoang Thai</h5>
            <a href='http://m.me//hoangthaihh1' target='_blank' >Send a message</a>
          </article>
          <article className='contact_option' >
            <BsInstagram className='contact_opIcon'/>
            <h4>Instagram</h4>
            <h5>_thainee_</h5>
            <a href='https://www.instagram.com/_thaiine_/' target='_blank' >Send a message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail} >
            <input type='text' name='name' placeholder='Your Full Name' required  />
            <input type='email' name='email' placeholder='Your Email' required  />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact