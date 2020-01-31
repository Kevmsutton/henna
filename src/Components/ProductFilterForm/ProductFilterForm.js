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
      <div className='FormContainer'>
        <div className='regForm'>
          <form>
            <label>Colour:</label>
            <input type='text' name='colour' />
            <label>Material:</label>
            <input type='text' name='materialType' />
            <label>Price:</label>
            <h4 class='priceRange'>£{this.state.value}</h4>
            <input
              type='range'
              min='100'
              max='3000'
              value={this.state.value}
              onChange={this.handleChange}
              class='demo'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ProductFilterForm;
