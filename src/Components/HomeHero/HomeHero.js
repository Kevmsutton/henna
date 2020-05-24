import React from 'react';
import Button from '../Button/Button.js';
import './HomeHero.css';

const HomeHero = () => {
  return (
    <div className='headImageDiv'>
      <div className='textHeadImage'>
        <p className='leaderP'>Contemporary dining style</p>
        <Button />
      </div>
    </div>
  );
};

export default HomeHero;
