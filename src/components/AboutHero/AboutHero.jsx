import React from 'react';

import home1 from '../../assets/img/home1.png';

const AboutHero = () => (
  <div>
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>I work to make</h2>
        </div>
        <div className="hide">
          <h2>
            Your
            <span>dreams</span>
            come
          </h2>
        </div>
        <div className="hide">
          <h2>true.</h2>
        </div>
      </div>
      <p>Contact me for any tech ideas you have. I am a professional with amazing skills.</p>
      <button type="button">Contact</button>
    </div>
    <div className="image">
      <img src={home1} alt="Huy with camera" />
    </div>
  </div>
);

export default AboutHero;
