import React from 'react';
import '../styles/hero.css';
import heroBg from '../assets/images/image-profile-desktop.webp';
import ring from '../assets/images/pattern-rings.svg';
import circle from '../assets/images/pattern-circle.svg';

const Hero = () => {
  return (
    <>
      <section>
        <div className='hero-heading-wrapper'>
          <img src={ring} alt={ring} className='hero-ring' />
          <h2 className='hero-intro-heading'>
            Nice to meet you!
            <br />
            Im <span className='underline'>Adam Keyes</span>.
          </h2>
          <p className='hero-intro-details'>
            Based in the UK. Im a frontend developer
            <br />
            passionate about building accessible web apps
            <br />
            that users love.
          </p>
          <p className='contact-text'>Contact Me</p>
          {/* circle image */}
          <img src={circle} alt={circle} className='circle-img' />
        </div>
        <div className='hero-img-wrapper'>
          <img src={heroBg} alt={heroBg} className='hero-img' />
        </div>
      </section>
      <div className='underline-end'></div>
    </>
  );
};

export default Hero;
