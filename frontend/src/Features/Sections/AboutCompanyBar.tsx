import React from 'react';
import { NavLink } from 'react-router-dom';
import IconCutomerSupport from '../assets/images/icon-cutomer-support.png';
import IconDeliveryReturn from '../assets/images/icon-Delivery-return.png';
import IconPayment from '../assets/images/icon-payment.png';
import InfoBox from '../Components/InfoBox';

const AboutCompanyBar: React.FC = () => {
  return (
    <section className="infoFooter">
      <div className="__continer row row-cols-1 row-cols-md-2 g-4 row-cols-lg-4">
        <div className="info-box">
          <NavLink to="/products">
            <InfoBox
              src={IconCutomerSupport}
              title="Customer Support"
              description="Village did removed enjoyed explain talking."
            />
          </NavLink>
        </div>
        <div className="info-box">
          <NavLink to="/products">
            <InfoBox
              src={IconPayment}
              title="Secured Payment"
              description="Village did removed enjoyed explain talking."
            />
          </NavLink>
        </div>
        <div className="info-box">
          <NavLink to="/products">
            <InfoBox
              src={IconDeliveryReturn}
              title="Free Home Delivery"
              description="Village did removed enjoyed explain talking."
            />
          </NavLink>
        </div>
        <div className="info-box">
          <NavLink to="/products">
            <InfoBox
              src={IconDeliveryReturn}
              title="30 Day Reuters"
              description="Village did removed enjoyed explain talking."
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanyBar;
