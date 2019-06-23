import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='helpDiv'>
        <br />
        <p className='help'>Help</p>
        <ul>
          <li>Track an Order</li>
          <li>FAQ</li>
          <li>Returns and Refunds</li>
        </ul>
        <br />
      </div>
      <div className='aboutDiv'>
        <br />
        <p className='about'>About</p>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Reviews</li>
        </ul>
        <br />
      </div>
      <div className='moreDiv'>
        <br />
        <p className='more'>More</p>
        <ul>
          <li>Buy vouchers</li>
          <li>Introduce a friend</li>
          <li>Affiliates</li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default Footer;
