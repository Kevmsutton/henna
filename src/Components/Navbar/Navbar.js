import React from 'react';
import './Navbar.css';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className='topNav'>
            <p>
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                HENNA
              </Link>
            </p>
            <ul>
              <li className='personal'>
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

          <div className='topNavYellowUnderLine' />
          <div className='categoryNav'>
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
        </div>
      </Router>
    );
  }
}

export default Navbar;
