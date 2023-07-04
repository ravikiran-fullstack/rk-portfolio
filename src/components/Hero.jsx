import React from 'react';
import hero from '../assets/hero_2.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            voluptatem temporibus perferendis commodi vel quidem mollitia quia
            eius minima excepturi.
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
