import React from 'react';
import img1 from '../../assets/images/showcase-img1.png';
import img2 from '../../assets/images/showcase-img-2.png';
import GeneralButton from '../Components/Buttons/GeneralButton';

const ShowCase: React.FC = () => {
  return (
    <section className="showcase bg-primary shadow-sm">
      <div className="showcase-container">
        <img src={img1} className="hero-img" alt="showcase-img-1" />
        <div className="showcase-body">
          <h1>Sale Up</h1>
          <h1>To 50% Off</h1>
          <p>Online shopping free home deliver over $100</p>
          <GeneralButton
            link="/products"
            title="SHOP NOW"
            styleling="btn-theme"
          />
        </div>

        <img src={img2} className="hero-img" alt="showcase-img-2" />
      </div>
    </section>
  );
};

export default ShowCase;
