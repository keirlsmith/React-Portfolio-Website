import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img/bee1.jpg';
import IMG2 from '../../assets/img/bird1.jpg';
import IMG3 from '../../assets/img/car1.jpg';
import IMG4 from '../../assets/img/duck1.jpg';
import IMG5 from '../../assets/img/grove1.jpg';
import IMG6 from '../../assets/img/butterfly1.jpg';

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
      My Work
      </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      
          <article className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
              </div>
              <h3>Projects I've Completed</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/19689266-Storage-Rent-Mobile-App-iOS-Android-UI" className='btn btn-primary' target="_blank">Live Demo</a>
          </article>
          <article className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
              </div>
              <h3>Projects I've Completed</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/19689266-Storage-Rent-Mobile-App-iOS-Android-UI" className='btn btn-primary' target="_blank">Live Demo</a>
          </article>
          <article className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
              </div>
              <h3>Projects I've Completed</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/19689266-Storage-Rent-Mobile-App-iOS-Android-UI" className='btn btn-primary' target="_blank">Live Demo</a>
          </article>
          <article className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
              </div>
              <h3>Projects I've Completed</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/19689266-Storage-Rent-Mobile-App-iOS-Android-UI" className='btn btn-primary' target="_blank">Live Demo</a>
          </article>
          <article className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
              </div>
              <h3>Projects I've Completed</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/19689266-Storage-Rent-Mobile-App-iOS-Android-UI" className='btn btn-primary' target="_blank">Live Demo</a>
          </article>
          <article className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
              </div>
              <h3>Projects I've Completed</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/19689266-Storage-Rent-Mobile-App-iOS-Android-UI" className='btn btn-primary' target="_blank">Live Demo</a>
          </article>
        
      </div>
    </section>
  )
}

export default portfolio;