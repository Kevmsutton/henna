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
        <div className='productBreadCrumb'>
          Home/{fullProduct.category}/{fullProduct.name}
        </div>
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
            <div className='colorWrapper'>
              <div className='colorOne'></div>
              <div className='colorTwo'></div>
            </div>
          </div>
        </div>
        <div className='productDetailWrapper'></div>
      </div>
    );
  }
}

export default Product;
