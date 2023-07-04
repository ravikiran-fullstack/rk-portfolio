import React from 'react';
import hero from '../assets/hero_2.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Ravikiran Yadava</h1>
          <h3>Fullstack Developer</h3>
          <p>
            With over 9 years of experience in fullstack webapplication
            development, I have gained skills to efficiently design, develop,
            build and manage web applications. I have special interest in
            building apps using ReactJS in the frontend and Java with Spring
            Boot in the backend
          </p>
        </div>
        <div className="img-container">
          <img src={hero} alt="hero" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
