import React from 'react';
import './Navbar.css';
import MaterialIcon, { colorPalette } from 'material-icons-react';

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='topNav'>
          <p>HENNA</p>
          <ul>
            <li className='endLi'>
              <MaterialIcon icon='favorite_border' size='40' />
            </li>
            <li>
              <MaterialIcon icon='work' size='40' />
            </li>
            <li>
              <MaterialIcon icon='person' size='40' />
            </li>
          </ul>
        </div>

        <div className='middleSep' />
        <div className='catNav'>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
            <li>Category 5</li>
            <li>Category 6</li>
            <li>Category 7</li>
            <li>Category 8</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
