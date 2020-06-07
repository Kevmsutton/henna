import React from 'react';
import './Favourites.css';
import BasketListBox from '../BasketListBox/BasketListBox';
import Product from '../ProductPage/product';
import ProductButton from '../ProductButton/ProductButton';

class Favourites extends React.Component {
  render() {
    const { favourites, addProductToBasket, removeFavouriteItem } = this.props;
    console.log(favourites);
    return (
      <div className='favouritesContainer'>
        <h3>Favourites</h3>
        <div className='favProductWrap'>
          {favourites.length < 1 ? (
            <div>You haven't selected any favourite products</div>
          ) : (
            <>
              {favourites.map((product) => (
                <div className='favProductDetail' key={product.id}>
                  <div className='favProductTop'>
                    <img src={product.image} />
                  </div>
                  <div className='favProductBottom'>
                    <p>
                      <strong>{product.name}</strong>
                    </p>
                    <p>{product.description}</p>
                    <p>
                      <strong>£{product.price}</strong>
                    </p>
                  </div>
                  <div onClick={() => addProductToBasket(product)}>
                    <ProductButton />
                  </div>
                  <div
                    className='removeBasketDiv'
                    onClick={() => removeFavouriteItem(product)}
                  >
                    <h3>Remove this from Favourites</h3>
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
