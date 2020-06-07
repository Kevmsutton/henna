import React from 'react';
import './product.css';
import ProductButton from '../ProductButton/ProductButton.js';
import MaterialIcon from 'material-icons-react';

class Product extends React.Component {
  state = {
    heartColour: 'heartNorm',
  };

  toggleHeartColour = () => {
    this.state.heartColour === 'heartPink'
      ? this.setState({ heartColour: 'heartNorm' })
      : this.setState({ heartColour: 'heartPink' });
  };

  render() {
    const {
      fullProduct,
      addProductToBasket,
      addProductToFavourites,
      removeFavouriteItem,
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
            {this.state.heartColour === 'heartNorm' ? (
              <div
                onClick={() => addProductToFavourites(fullProduct)}
                className='heartIcon'
              >
                <p
                  className={this.state.heartColour}
                  onClick={() => this.toggleHeartColour()}
                >
                  <MaterialIcon icon='favorite_border' />
                </p>
              </div>
            ) : (
              <div
                onClick={() => removeFavouriteItem(fullProduct)}
                className='heartIcon'
              >
                <p
                  className={this.state.heartColour}
                  onClick={() => this.toggleHeartColour()}
                >
                  <MaterialIcon icon='favorite_border' />
                </p>
              </div>
            )}
            <h2>{fullProduct.name}</h2>
            <p>{fullProduct.longDescription}</p>
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
