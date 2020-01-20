import React from 'react';
import './product.scss';
import ProductButton from '../ProductButton/ProductButton.js';
import MaterialIcon from 'material-icons-react';

class Product extends React.Component {
  render() {
    const {
      fullProduct,
      addProductToBasket,
      addProductToFavourites
    } = this.props;
    console.log(addProductToBasket);
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
              width='100%'
              height='auto'
            />
          </div>
          <div className='productDetail'>
            <div
              onClick={() => addProductToFavourites(fullProduct)}
              className='heartIcon'
            >
              <p className='heart'>
                <MaterialIcon icon='favorite_border' size='40' />
              </p>
            </div>
            <h2>{fullProduct.name}</h2>
            <p>{fullProduct.description}</p>
            <h2>£{fullProduct.price}</h2>
            <div onClick={() => addProductToBasket(fullProduct)}>
              <ProductButton></ProductButton>
            </div>
            <div className='colorWrapper'>
              <div className='colorOne'></div>
              <div className='colorTwo'></div>
            </div>
          </div>
        </div>
        <div className='productDetailWrapper'>
          <div className='productDetailInner'>
            <div className='extraDetailOne'>
              <h3>Dimensions Detail</h3>
              <p>
                <strong>Height</strong>....................{' '}
                {fullProduct.dimensions.Height}cm
              </p>
              <p>
                <strong>Width</strong>.....................{' '}
                {fullProduct.dimensions.Width}cm
              </p>
              <p>
                <strong>Depth</strong>.....................{' '}
                {fullProduct.dimensions.Depth}cm
              </p>
              <p>
                <strong>Seat Height</strong>...............{' '}
                {fullProduct.dimensions.Seat}cm
              </p>
              <p>
                <strong>Arm Height</strong>................{' '}
                {fullProduct.dimensions.Arm}cm
              </p>
            </div>
            <div className='extraDetailTwo'>
              <h3>Product Detail</h3>
              <p>
                <strong>Frame:</strong> {fullProduct.longMaterial.Frame}
              </p>
              <p>
                <strong>Seat Cushion:</strong>{' '}
                {fullProduct.longMaterial.SeatCushion}
              </p>
              <p>
                <strong>Back Cushion:</strong>{' '}
                {fullProduct.longMaterial.BackCushion}
              </p>
              <p>
                <strong>Legs:</strong> {fullProduct.longMaterial.Legs}
              </p>
              <p>
                <strong>Upholstery:</strong>{' '}
                {fullProduct.longMaterial.Upholstery}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
