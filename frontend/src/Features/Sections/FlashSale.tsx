import React from 'react';
import GeneralButton from '../Components/Buttons/GeneralButton';

interface Props {
  title: string;
  description: string;
}

const FlashSale: React.FC<Props> = ({ title, description }) => {
  return (
    <section className="flashSale">
      <div className="contianer">
        <h2>{title}</h2>
        <p>{description}</p>
        <GeneralButton link="/products" title="FINAL SALE" styleling="sale-btn" />
        <div className="spacing">Spacing</div>
      </div>
    </section>
  );
};

export default FlashSale;
