import React from 'react';
import PamelaReifeImg from '../../assets/images/PamelaReifeImg.png';
import SpecialMessageImg from '../../assets/images/SpecialMessageImg.png';
import Stack from 'react-bootstrap/Stack';

const LatestBanner: React.FC = () => {
  return (
    <>
      <Stack direction="horizontal" gap={4} className="_banner">
        <img src={PamelaReifeImg} alt="Placeholder" />
        <img src={SpecialMessageImg} alt="Placeholder" />
      </Stack>
    </>
  );
};

export default LatestBanner;
