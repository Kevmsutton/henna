import React from 'react';

class Product extends React.Component {
  render() {
    const { fullProduct } = this.props;
    return <div>{fullProduct.name}</div>;
  }
}

export default Product;
