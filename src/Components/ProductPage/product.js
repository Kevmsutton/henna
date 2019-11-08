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
        <div className='productDetailWrapper'>
          <div className='extraDetailOne'>
            <h3>Dimensions Detail</h3>
            <p>Width : Y anomda</p>
            <p>Height : Z bit more</p>
            <p>Depth : B some more</p>
            <p>Other : N some more</p>
          </div>
          <div className='extraDetailTwo'>
            <h3>Product detail</h3>
            <p>Detail 1 : X and some</p>
            <p>Detail 2 : Z bit more</p>
            <p>Detail 3 : B and more</p>
            <p>Other : 5 and more</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
