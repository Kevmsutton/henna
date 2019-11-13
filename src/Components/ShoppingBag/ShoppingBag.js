import React from 'react';
import './ShoppingBag.scss';
import BasketListBox from '../BasketListBox/BasketListBox';

class ShoppingBag extends React.Component {
  render() {
    const { basket, sumOfBasketItems } = this.props;
    return (
      <div className='shoppingBag'>
        <BasketListBox
          basket={basket}
          sumOfBasketItems={sumOfBasketItems}
        ></BasketListBox>
      </div>
    );
  }
}

export default ShoppingBag;
