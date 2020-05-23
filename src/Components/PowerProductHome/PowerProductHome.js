import React from 'react';
import './PowerProductHome.css';
import power from './power.png';
import Button from '../Button/Button.js';
import sale from './sale.png';

const PowerProductHome = () => {
  return (
    <div className='promoSlotTwoContainer'>
      <div className='power'>
        <div className='powerProduct'>
          <p>
            Courtyard Heaven and <br></br>
            Summer Specials
          </p>
          <img src={power} alt='powerImg' />
        </div>
      </div>
      <div className='saleContainer'>
        <div className='sale'>
          <img src={sale} alt='saleImg' />
          <div className='saleText'>
            <p>Clearance</p>
            <p>Before it's all gone</p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerProductHome;
