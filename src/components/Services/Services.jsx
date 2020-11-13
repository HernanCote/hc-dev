import React from 'react';

import {
  H2,
  H3,
  P,
  Span,
} from '../Foundation';

import Clock from '../../assets/img/clock.svg';
import Diaphragm from '../../assets/img/diaphragm.svg';
import Money from '../../assets/img/money.svg';
import Teamwork from '../../assets/img/teamwork.svg';

import home2 from '../../assets/img/home2.png';

const Services = () => (
  <div className="services">
    <div className="description">
      <H2>High <Span>quality</Span> services</H2>
      <div className="cards">
        <div className="icon">
          <img src={Clock} alt="efficient" />
          <H3>Efficient</H3>
        </div>
        <P>Lorem ipsum dolor sit amet.</P>
      </div>
      <div className="cards">
        <div className="icon">
          <img src={Teamwork} alt="Teamwork" />
          <H3>Teamwork</H3>
        </div>
        <P>Lorem ipsum dolor sit amet.</P>
      </div>
      <div className="cards">
        <div className="icon">
          <img src={Diaphragm} alt="Diaphragm" />
          <H3>Diaphragm</H3>
        </div>
        <P>Lorem ipsum dolor sit amet.</P>
      </div>
      <div className="cards">
        <div className="icon">
          <img src={Money} alt="affordable" />
          <H3>Affordable</H3>
        </div>
        <P>Lorem ipsum dolor sit amet.</P>
      </div>
    </div>
    <div className="image">
      <img src={home2} alt="services" />
    </div>
  </div>
);

export default Services;
