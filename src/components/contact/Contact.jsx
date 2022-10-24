import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className='contact__option'>
                    <MdOutlineEmail />
                    <h4>Email</h4>
                    <h5>keirl.smith@gmail.com</h5>
                    <a href="mailto:keirl.smith@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className='contact__option'>
                    <AiOutlineLinkedin />
                    <h4>LinkedIn</h4>
                    <h5>www.linkedin.com/in/keirlsmith</h5>
                    <a href="http://www.linkedin.com/in/keirlsmith" target="_blank">View My Profile</a>
                </article>
                <article className='contact__option'>
                    <AiOutlinePhone />
                    <h4>Phone</h4>
                    <h5>(229) 712-0032</h5>
                    <a href="tel:2297120032" target="_blank">Call or Text Me</a>
                </article>
            </div>
            <form action=""></form>
        </div>
    </section>
  )
}

export default Contact