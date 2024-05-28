import React from 'react';
import '../styles/skills.css';
import ring from '../assets/images/pattern-rings.svg';

const Skills = () => {
  return (
    <>
      <div className='skills-sec'>
        <div className='skill-wrapper'>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>HTML</h3>
              <span className='skill-date'>4 Years Experience</span>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>CSS</h3>
              <span className='skill-date'>4 Years Experience</span>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Javascript</h3>
              <span className='skill-date'>4 Years Experience</span>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Accessibility</h3>
              <span className='skill-date'>4 Years Experience</span>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>React</h3>
              <span className='skill-date'>3 Years Experience</span>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Sass</h3>
              <span className='skill-date'>3 Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className='ring-skill-wrapper'>
        <img src={ring} alt={ring} className='ring-skill' />
      </div>
    </>
  );
};

export default Skills;
