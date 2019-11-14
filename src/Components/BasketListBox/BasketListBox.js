import React from 'react';
import './BasketListBox.css';

class BasketListBox extends React.Component {
  render() {
    const { basket, removeBasketItem } = this.props;
    console.log(this.props);
    return (
      <div className='basketProductWrapper'>
        {basket.map(product => (
          <div key={product.id} className='individualBasketProduct'>
            <div className='imgBlock'>
              <img
                src={product.image}
                width='100%'
                height='100%'
                alt='productImg'
              />
            </div>
            <div className='productDescElements'>
              <div className='shortDescBlock'>
                <p>
                  {product.name}: {product.description} {product.colour}
                </p>
              </div>
              <div className='deliveryBlock'>
                <p>Delivery: {product.delivery}</p>
              </div>
              <div className='priceBlock'>
                <p>£{product.price}</p>
              </div>
              <div className='actionButton'>
                <p onClick={() => removeBasketItem(product)}>Remove item</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BasketListBox;
