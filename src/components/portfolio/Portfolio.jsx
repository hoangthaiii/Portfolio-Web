import React from 'react'
import "./portfolio.css"
import por1 from '../../asset/por1.webp'
import por2 from '../../asset/por2.jpg'
import por3 from '../../asset/por3.jpg'
import por4 from '../../asset/por4.jpg'
import por5 from '../../asset/por5.jpg'
import por6 from '../../asset/por6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'className='more-sec'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-img'>
            <img src={por1} alt='' className='portfolio_item-img' />
          </div>
          <h3>Social Media App </h3>
          <div className='item-btn'>
            <a href='https://github.com/hoangthaiii/React-Social-App' className='btn' target='_blank' >Github</a>
            <a href='https://dribbble.com/shots/17733146/attachments/12896400?mode=media' className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-immg'>
            <img src={por2} alt='' className='portfolio_item-img' />
          </div>
          <h3>Tìm việc làm - Python</h3>
          <div className='item-btn'>
            <a href='https://github.com/hoangthaiii/Timvieclam_Python' className='btn' target='_blank' >Github</a>
            <a href='https://dribbble.com/shots/17733146/attachments/12896400?mode=media' className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-immg'>
            <img src={por3} alt='' className='portfolio_item-img' />
          </div>
          <h3>Portfolio Website</h3>
          <div className='item-btn'>
            <a href='http://github.com' className='btn' target='_blank' >Github</a>
            <a href='https://dribbble.com/shots/17733146/attachments/12896400?mode=media' className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-immg'>
            <img src={por4} alt='' className='portfolio_item-img' />
          </div>
          <h3>Quản lý cửa hàng C#</h3>
          <div className='item-btn'>
            <a href='http://github.com' className='btn' target='_blank' >Github</a>
            <a href='https://dribbble.com/shots/17733146/attachments/12896400?mode=media' className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-immg'>
            <img src={por5} alt='' className='portfolio_item-img' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='item-btn'>
            <a href='http://github.com' className='btn' target='_blank' >Github</a>
            <a href='https://dribbble.com/shots/17733146/attachments/12896400?mode=media' className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-immg'>
            <img src={por6} alt='' className='portfolio_item-img' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='item-btn'>
            <a href='http://github.com' className='btn' target='_blank' >Github</a>
            <a href='https://dribbble.com/shots/17733146/attachments/12896400?mode=media' className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio