import React from 'react';
import { Link } from 'react-router-dom';

class BasketListBox extends React.Component {
  render() {
    return (
      <div className='productBoxWrapper'>
        <div className='productBox'>
          {this.filteredProducts().map(product => (
            <div key={product.id} className='individualProduct'>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/${product.name}`}
                key={product.name}
              >
                <img
                  src={product.image}
                  width='80%'
                  height='85%'
                  alt='productImg'
                />
                <p>
                  {product.name} - £{product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BasketListBox;
