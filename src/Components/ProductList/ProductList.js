// When the product category is clicked the user is re-directed to that product category page
// The product category page will then display a list of product items that are related to that category
// Products therefore must have a category element within the DB/API
// The route path should be passed up to app.js to change the state to determine which product category has been selected
// i.e. onClick from the li within the category navBar the category.name is passed up to app.js
// app will then need to fetch those category products from the API and pass them to product list to be displayed

import React from 'react';
import './ProductList.scss';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';
// import white_table from './assets/white_table.png';
import Products from '../productFeed.js';

class ProductList extends React.Component {
  state = {
    products: Products,
    window: window.innerWidth
  };

  filteredProducts = () => {
    // if their is a price i only want to show products less than that price
    // if their is a material selected i only want to show products with that material
    // if their is a colour selected only products with that colour
    let categoryProducts = this.state.products.filter(product => {
      if (this.props.priceSelector) {
        return (
          product.category
            .toLowerCase()
            .includes(this.props.category.toLowerCase()) &&
          product.price <= this.props.priceSelector
        );
      } else if (this.props.materialSelector) {
        return (
          product.category
            .toLowerCase()
            .includes(this.props.category.toLowerCase()) &&
          product.material === this.props.materialSelector
        );
      } else if (this.props.colourSelector) {
        return (
          product.category
            .toLowerCase()
            .includes(this.props.category.toLowerCase()) &&
          product.colour === this.props.colourSelector
        );
      } else if (
        this.props.colourSelector &&
        this.props.materialSelector &&
        this.props.priceSelector
      ) {
        return (
          product.category
            .toLowerCase()
            .includes(this.props.category.toLowerCase()) &&
          product.colour === this.props.colourSelector &&
          product.price <= this.props.priceSelector &&
          product.material === this.props.materialSelector
        );
      } else {
        return product.category
          .toLowerCase()
          .includes(this.props.category.toLowerCase());
      }
    });
    return categoryProducts;
  };

  render() {
    const { handleProductClick } = this.props;
    return (
      <div className='productListContainer'>
        <div>
          <p className='breadCrumb'>
            <strong>
              <span className='clickToGo'>HOME </span>
              <span className='noClickBreadCrumb'>
                / {this.props.category.toUpperCase()}
              </span>
            </strong>
          </p>
        </div>
        <div className='categoryHeading'>
          <p>
            <strong>{this.props.category.toUpperCase()}</strong>
          </p>
          <p className='filterText'> Filter</p>
          <p className='filterIcon'>
            <MaterialIcon icon='keyboard_arrow_down' size='40' />
          </p>
        </div>
        <div className='filterProductsBy'>
          <ul className='individualProductFilters'>
            <li>
              Colour
              <p>
                <MaterialIcon icon='keyboard_arrow_down' size='40' />
              </p>
            </li>
            <li>
              Material
              <p>
                <MaterialIcon icon='keyboard_arrow_down' size='40' />
              </p>
            </li>
            <li>
              Price
              <p>
                <MaterialIcon icon='keyboard_arrow_down' size='40' />
              </p>
            </li>
          </ul>
        </div>
        <div className='productBoxWrapper'>
          <div className='productBox'>
            {this.filteredProducts().map(product => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className='individualProduct'
              >
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/${product.name}`}
                  key={product.name}
                >
                  <img
                    src={product.image}
                    width='80%'
                    height='85%'
                    alt='heroImg'
                  />
                  <p>
                    {product.name} - £{product.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
