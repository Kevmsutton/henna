import React from 'react';
import './Favourites.css';
import BasketListBox from '../BasketListBox/BasketListBox';
import Product from '../ProductPage/product';

class Favourites extends React.Component {
  render() {
    const { favourites } = this.props;
    console.log(favourites);
    return (
      <div className='favouritesContainer'>
        <div className='favProductWrap'>
          {favourites.map(product => (
            <div className='favProductDetail' key={product.id}>
              <img src={product.image} />
              <p>Some text</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Favourites;
