import React from 'react';
import './Navbar.scss';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Sofas' },
  { name: 'Chairs' },
  { name: 'Tables' },
  { name: 'Beds' },
  { name: 'Lighting' },
  { name: 'Liefstyle' },
  { name: 'Garden' },
  { name: 'Storage' },
  { name: 'Designer' }
];

class Navbar extends React.Component {
  render() {
    const { handleNavCategoryClick } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className='topNav'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            <p>HENNA</p>
          </Link>
          <ul>
            <Link style={{ textDecoration: 'none' }} to='/favourites'>
              <li className='favourites'>
                <MaterialIcon icon='favorite_border' size='40' />
              </li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/shoppingBag'>
              <li>
                <MaterialIcon icon='work' size='40' />
              </li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/personalAccount'>
              <li>
                <MaterialIcon icon='person' size='40' />
              </li>
            </Link>
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
                <li onClick={() => handleNavCategoryClick(category.name)}>
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
