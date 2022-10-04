import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {AiOutlineCamera} from 'react-icons/ai';
import {AiOutlineMessage} from 'react-icons/ai';
import {useState} from 'react';

const Nav = () => {
  const [activeName, setActiveNav] = useState('#');
  return (
    <nav>
        <a href="#" className='active'><AiOutlineHome /></a>
        <a href="#about"><AiOutlineUser /></a>
        <a href="#experience"><BiBook /></a>
        <a href="#photography"><AiOutlineCamera /></a>
        <a href="#contact"><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav;