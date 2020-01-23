import React from 'react';
import './Favourites.css';
import BasketListBox from '../BasketListBox/BasketListBox';
import Product from '../ProductPage/product';
import ProductButton from '../ProductButton/ProductButton';

class Favourites extends React.Component {
  render() {
    const { favourites, addProductToBasket } = this.props;
    console.log(favourites);
    return (
      <div className='favouritesContainer'>
        <div className='favProductWrap'>
          {favourites.length < 1 ? (
            <div>You haven't selected any favourite products</div>
          ) : (
            <>
              {favourites.map(product => (
                <div className='favProductDetail' key={product.id}>
                  <div className='favProductTop'>
                    <img src={product.image} />
                  </div>
                  <div className='favProductBottom'>
                    <p>Some text</p>
                    <p>Some more text here text</p>
                    <p>And then some more text</p>
                  </div>
                  <div onClick={() => addProductToBasket(product)}>
                    <ProductButton />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Favourites;
