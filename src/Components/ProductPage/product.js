import React from 'react';
import './product.scss';
import ProductButton from '../ProductButton/ProductButton.js';
import MaterialIcon from 'material-icons-react';

class Product extends React.Component {
  render() {
    const { fullProduct } = this.props;
    console.log(fullProduct);
    return (
      <div className='productPageContainer'>
        <div className='productWrapper'>
          <div className='productImage'>
            <img
              src={fullProduct.image}
              alt={fullProduct.name}
              width='595px'
              height='500px'
            />
          </div>
          <div className='productDetail'>
            <div className='heartIcon'>
              <MaterialIcon icon='favorite_border' size='40' />
            </div>
            <h2>{fullProduct.name}</h2>
            <p>{fullProduct.description}</p>
            <h2>£{fullProduct.price}</h2>
            <ProductButton></ProductButton>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
