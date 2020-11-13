import React from 'react';

import Clock from '../../assets/img/clock.svg';
import Diaphragm from '../../assets/img/diaphragm.svg';
import Money from '../../assets/img/money.svg';
import Teamwork from '../../assets/img/teamwork.svg';

import home2 from '../../assets/img/home2.png';

const Services = () => (
  <div className="services">
    <div className="description">
      <h2>High <span>quality</span> services</h2>
      <div className="cards">
        <div className="icon">
          <img src={Clock} alt="efficient" />
          <h3>Efficient</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="cards">
        <div className="icon">
          <img src={Teamwork} alt="Teamwork" />
          <h3>Teamwork</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="cards">
        <div className="icon">
          <img src={Diaphragm} alt="Diaphragm" />
          <h3>Diaphragm</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="cards">
        <div className="icon">
          <img src={Money} alt="affordable" />
          <h3>Affordable</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div className="image">
      <img src={home2} alt="services" />
    </div>
  </div>
);

export default Services;
