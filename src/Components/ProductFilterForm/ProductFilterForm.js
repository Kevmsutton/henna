import React from 'react';
import './ProductFilterForm.css';

class ProductFilterForm extends React.Component {
  state = {
    value: 0
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className='productFilterForm'>
        <form>
          <div className='checkBoxBlock'>
            <label>Colour:</label>
            <div className='labelBlock'>
              <input type='checkbox' name='red' />
              <label>Red</label>
            </div>
            <div className='labelBlock'>
              <input type='checkbox' name='blue' />
              <label>Blue</label>
            </div>
            <div className='labelBlock'>
              <input type='checkbox' name='green' />
              <label>Green</label>
            </div>
          </div>
          <div className='checkBoxBlock'>
            <label>Material:</label>
            <div className='labelBlock'>
              <input type='checkbox' name='Wood' />
              <label>Wood</label>
            </div>
            <div className='labelBlock'>
              <input type='checkbox' name='Copper' />
              <label>Copper</label>
            </div>
            <div className='labelBlock'>
              <input type='checkbox' name='Metal' />
              <label>Metal</label>
            </div>
          </div>
          <div className='checkBoxBlock'>
            <label>Price:</label>
            <div className='priceValueWrap'>
              <h4 className='priceRange'>Min: £{this.state.value}</h4>
              <h4 className='priceRange'>Max: £2500</h4>
            </div>
            <input
              type='range'
              min='0'
              max='2500'
              step='50'
              value={this.state.value}
              onChange={this.handleChange}
              className='rangeFinder'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductFilterForm;
