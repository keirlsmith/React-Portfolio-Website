import React from 'react';
import './about.css';
import ME2 from '../../assets/img/KJ.jpg';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div>
                    <img className="about__me-image" src={ME2} alt="About Image" />
                </div>
              </div>
          

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>
                            Experience
                        </h5>
                        <small>
                            2+ years of Experience
                        </small>
                    </article>
                    <article className='about__card'>
                        <FaUsers className='about__icon' />
                        <h5>
                            Users
                        </h5>
                        <small>
                            20 Clients
                        </small>
                    </article>
                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon' />
                        <h5>
                            Projects
                        </h5>
                        <small>
                            15 Projects Completed
                        </small>
                    </article>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quibusdam culpa impedit.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About