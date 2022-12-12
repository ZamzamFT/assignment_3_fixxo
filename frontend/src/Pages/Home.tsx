import React from 'react';
//import DiscountSection from '../Features/Sections/DiscountSection';
import FeaturedProducts from '../Features/Sections/FeaturedProducts';
import FlashSale from '../Features/Sections/FlashSale';
import LatestBanner from '../Features/Sections/LatestBanner';
import ShowCase from '../Features/Sections/ShowCase';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Fixxo.</title>
      </Helmet>
      <ShowCase />
      <FeaturedProducts title="Featured Products" />
      <LatestBanner />
      <FlashSale
        title="Up to 70% off*"
        description="Women's, Men's & Kids' Winter Fashion"
      />
    </>
  );
};

export default Home;
