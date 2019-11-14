import React from 'react';
import './ShoppingBag.scss';
import BasketListBox from '../BasketListBox/BasketListBox';

class ShoppingBag extends React.Component {
  render() {
    const { basket, sumOfBasketItems, removeBasketItem } = this.props;
    return (
      <div className='shoppingBag'>
        <div className='shoppingBagHeader'>
          <h3>Shopping Basket</h3>
        </div>
        <div className='basketItemTitles'>
          <p className='imgTitle'></p>
          <p className='descTitle'>Product Description</p>
          <p className='availabilityTitle'>Availability</p>
          <p className='unitPriceTitle'>Unit Price</p>
        </div>
        <BasketListBox
          basket={basket}
          removeBasketItem={removeBasketItem}
        ></BasketListBox>
        <div className='subTotalBasket'>
          <p>Subtotal: £{sumOfBasketItems}</p>
        </div>
        <div className='actionButton'>
          <p>Complete Order</p>
        </div>
      </div>
    );
  }
}

export default ShoppingBag;
