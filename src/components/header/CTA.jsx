import React from 'react';
import KSResume from '../../assets/KSResume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={KSResume} download className='btn' >Download Resume </a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;