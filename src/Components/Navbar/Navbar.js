import React from 'react';
import './Navbar.css';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const categories = [
  { name: 'Sofas' },
  { name: 'Chairs' },
  { name: 'Tables' },
  { name: 'Beds' },
  { name: 'Lighting' },
  { name: 'Lifestyle' },
  { name: 'Garden' },
  { name: 'Storage' },
  { name: 'Designer' }
];

class Navbar extends React.Component {
  render() {
    const { handleNavCategoryClick } = this.props;
    return (
      <div>
        <div className='topNav'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            <p>HENNA</p>
          </Link>
          <ul>
            <div className='lgScreenAcNav'>
              <Link style={{ textDecoration: 'none' }} to='/favourites'>
                <li className='favourites'>
                  <MaterialIcon icon='favorite_border' size='40' />
                </li>
              </Link>
              <Link style={{ textDecoration: 'none' }} to='/shoppingBag'>
                <li className='bag'>
                  <MaterialIcon icon='work' size='40' />
                </li>
              </Link>
              <Link style={{ textDecoration: 'none' }} to='/personalAccount'>
                <li className='account'>
                  <MaterialIcon icon='person' size='40' />
                </li>
              </Link>
            </div>
            <li className='categoryDD'>
              <MaterialIcon icon='reorder' size='40' />
            </li>
          </ul>
        </div>
        <div className='topNavYellowUnderLine' />
        <div className='categoryNav'>
          <ul>
            {categories.map(category => (
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/${category.name}`}
                key={category.name}
              >
                <MediaQuery query='(min-device-width: 1024px)'>
                  <li onClick={() => handleNavCategoryClick(category.name)}>
                    {category.name}
                  </li>
                </MediaQuery>
              </Link>
            ))}
            <MediaQuery query='(max-device-width: 1023px)'>
              <li>Category</li>
            </MediaQuery>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
