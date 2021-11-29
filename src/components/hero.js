import React from 'react';

const HeroSection = () => (
    <section id="hero-area" className="header-area header-eight">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="header-content">
            <h1>Corporate & Business Site Template by Ayro UI.</h1>
            <p>
              We are a digital agency that helps brands to achieve their
              business outcomes. We see technology as a tool to create amazing
              things.
            </p>
            <div className="button">
              <a href="/" className="btn primary-btn">Get Started</a>
              <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                className="glightbox video-button">
                <span className="btn icon-btn rounded-full">
                  <i className="lni lni-play"></i>
                </span>
                <span className="text">Watch Intro</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="header-image">
            <img src="assets/images/header/hero-image.jpg" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;