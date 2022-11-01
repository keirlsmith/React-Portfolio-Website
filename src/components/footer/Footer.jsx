import React from 'react';
import './footer.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Keir L Smith</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">My Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://facebook.com">
                <FaFacebookSquare />
            </a>
            <a href="https://instagram.com">
                <FaTwitterSquare />
            </a>
            <a href="https://linkedin.com"> 
                <FaLinkedin />
            </a>
            <a href="https://instagram.com">
                <FaInstagramSquare />
            </a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Keir L Smith. All rights reserved.</small>
        </div>
    </footer>

  )
}

export default Footer;