import React from 'react';
import './ProductFilterForm.css';

class ProductFilterForm extends React.Component {
  state = {
    value: 0,
    colours: [
      { id: 1, value: 'Black', isChecked: false },
      { id: 2, value: 'Brown', isChecked: false },
      { id: 3, value: 'Green', isChecked: false },
    ],
  };

  handleSliderChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleColourChangeCheckBox = (event) => {
    let changedColour = this.state.colours.filter(
      (colour) => colour.id == event.target.value
    );

    changedColour[0].isChecked = !changedColour[0].isChecked;
    this.setState((prevState) => ({ isChecked: !prevState.colours.isChecked }));
  };

  render() {
    return (
      <div className='productFilterForm'>
        <form>
          <div className='checkBoxBlock'>
            <label>Colour:</label>

            <div className='labelBlock'>
              <ul>
                {this.state.colours.map((colour) => (
                  <li>
                    <input
                      key={colour.id}
                      onChange={this.handleColourChangeCheckBox}
                      type='checkbox'
                      checked={colour.isChecked}
                      value={colour.id}
                    />
                    {colour.value}
                  </li>
                ))}
              </ul>
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
              onChange={this.handleSliderChange}
              className='rangeFinder'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductFilterForm;
