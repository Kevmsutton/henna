import React from 'react';
import './Hero.css';

const products = [
  {
    id: 1,
    name: 'SideTable',
    price: '£159',
    image:
      'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
  },
  {
    id: 2,
    name: 'SideTable',
    price: '£159',
    image:
      'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
  },
  {
    id: 3,
    name: 'SideTable',
    price: '£159',
    image:
      'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
  },
  {
    id: 4,
    name: 'SideTable',
    price: '£159',
    image:
      'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
  }
];

const HeroBox = () => {
  console.log(products);
  return (
    <div className='heroContainer'>
      <div className='HeroBox'>
        {products.map(product => (
          <div className={'heroProduct'} key={product.id}>
            <img src={product.image} width='90%' height='80%' alt='heroImg' />
            <p>
              {product.name} - {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBox;
