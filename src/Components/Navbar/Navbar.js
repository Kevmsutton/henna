import React from 'react';
import './Navbar.css';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox.js';

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

  handleBurgerMenuClick = () => {
    document.querySelector('.mobileNavWrap').classList.toggle('active');
    document.querySelector('.mobileMenuIcon').classList.toggle('burger');
  };

  render() {
    const { handleNavCategoryClick, searchBarEvent } = this.props;
    return (
      <div className='allNav'>
        <div className='topNav'>
          <ul className='logoNavWrap'>
            <li
              className='mobileMenuIcon'
              onClick={() => this.handleBurgerMenuClick()}
            >
              <MaterialIcon icon='reorder' />
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                <p>HENNA</p>
              </Link>
            </li>
            <SearchBox searchBarEvent={searchBarEvent} />
          </ul>

          <ul>
            <div className='lgScreenAcNav'>
              <Link style={{ textDecoration: 'none' }} to='/favourites'>
                {this.props.favourites.length < 1 ? (
                  <li className='favourites'>
                    <MaterialIcon icon='favorite_border' />
                  </li>
                ) : (
                  <li className='favouritesFull'>
                    <MaterialIcon icon='favorite_border' />
                  </li>
                )}
              </Link>
              <Link style={{ textDecoration: 'none' }} to='/shoppingBag'>
                {/* Could split this into component for favourites */}
                <li className='bag'>
                  {this.props.basket.length > 0 ? (
                    <div className='bagNumber'>{this.props.basket.length}</div>
                  ) : (
                    <></>
                  )}
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
                  // add close burger menu function to handle cat nav click
                >
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='mobileScreenNavbar'>
          <div className='mobileNavWrap'>
            <div className='mobileBoxHead'>
              <h6>Menu</h6>
              <MaterialIcon
                icon='clear'
                onClick={() => this.handleBurgerMenuClick()}
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
                      {category.name.toUpperCase()}
                      <MaterialIcon icon='keyboard_arrow_right' />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//still need to adjust mobile nav to full height of the application or limit the window height when the
// mobile nav is open

export default Navbar;
