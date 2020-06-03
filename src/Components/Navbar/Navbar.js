import React from 'react';
import './Navbar.css';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Sofas' },
  { name: 'Chairs' },
  { name: 'Tables' },
  { name: 'Beds' },
  { name: 'Lighting' },
  { name: 'Lifestyle' },
  { name: 'Garden' },
  { name: 'Storage' },
  { name: 'Designer' },
];

class Navbar extends React.Component {
  state = {};

  handleMenuCloseClick = () => {
    document.querySelector('.mobileNavWrap').style.display = 'none';
  };

  handleBurgerMenuClick = () => {
    document.querySelector('.mobileNavWrap').style.display = 'block';
  };

  render() {
    const { handleNavCategoryClick } = this.props;
    return (
      <div className='allNav'>
        <div className='topNav'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            <p>HENNA</p>
          </Link>
          <ul>
            <div className='lgScreenAcNav'>
              <Link style={{ textDecoration: 'none' }} to='/favourites'>
                <li className='favourites'>
                  <MaterialIcon icon='favorite_border' />
                </li>
              </Link>
              <Link style={{ textDecoration: 'none' }} to='/shoppingBag'>
                <li className='bag'>
                  <MaterialIcon icon='work' />
                </li>
              </Link>
              <Link style={{ textDecoration: 'none' }} to='/personalAccount'>
                <li className='account'>
                  <MaterialIcon icon='person' />
                </li>
              </Link>
            </div>
          </ul>

          <ul className='categoryDD'>
            <li
              className='mobileMenuIcon'
              onClick={() => this.handleBurgerMenuClick()}
            >
              <MaterialIcon icon='reorder' />
            </li>
            <Link style={{ textDecoration: 'none' }} to='/personalAccount'>
              <li className='account'>
                <MaterialIcon icon='person' />
              </li>
            </Link>
          </ul>
        </div>
        <div className='topNavYellowUnderLine' />
        <div className='categoryNav'>
          <ul>
            {categories.map((category) => (
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/${category.name}`}
                key={category.name}
              >
                <li
                  className='categoryEl'
                  onClick={() => handleNavCategoryClick(category.name)}
                >
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='mobileNavWrap'>
          <div className='mobileBoxHead'>
            <h6>Menu</h6>
            <MaterialIcon
              icon='clear'
              onClick={() => this.handleMenuCloseClick()}
            />
          </div>
          <div className='mobileNavBox'>
            <ul>
              {categories.map((category) => (
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/${category.name}`}
                  key={category.name}
                >
                  <li
                    className='categoryEl'
                    onClick={() => handleNavCategoryClick(category.name)}
                  >
                    {category.name}
                    <MaterialIcon icon='keyboard_arrow_right' />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
