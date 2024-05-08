import React from 'react';
import CookieCons from '../cookieConsent';

export default () => {
  const styling = {
    backgroundImage: `url('../../illus/InnovatEd Tech Club Brochure.png')`,
  };

  return (
    <div id="home-landing" style={styling}>
      <div className="overlay">
        <div id="landing-btn">
          <a
            href="#home-section-1"
            className="fa fa-chevron-down animated infinite bounceOutDown delay-2s slow p-4"
          />
        </div>
        <div id="landing-info">
          <div>
            <h1>
              Welcome to <span>Iowa Tech Education</span>
            </h1>
            <p className="d-none d-md-block">
              Iowa Tech Education is a club ran at Central Campus in Des Moines, Iowa. As technology advances at a rapid pace, it's essential to connect theoretical knowledge with real-world applications. Our goal is to bridge this gap by offering hands-on training with certifications, competitions, and immersive experiences in a modern tech work environment.
            </p>
          </div>
          <CookieCons />
        </div>
      </div>
    </div>
  );
};
