// When the product category is clicked the user is re-directed to that product category page
// The product category page will then display a list of product items that are related to that category
// Products therefore must have a category element within the DB/API
// The route path should be passed up to app.js to change the state to determine which product category has been selected
// i.e. onClick from the li within the category navBar the category.name is passed up to app.js
// app will then need to fetch those category products from the API and pass them to product list to be displayed

import React from 'react';
import './ProductList.css';

class ProductList extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: 'SideTable',
        price: '£159',
        category: 'Sofas',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 2,
        name: 'SideTable',
        price: '£159',
        category: 'Sofas',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 3,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 4,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 5,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 6,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 7,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 8,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 9,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 10,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      },
      {
        id: 11,
        name: 'SideTable',
        price: '£159',
        category: 'Lighting',
        image:
          'https://res-4.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_550,q_auto:best,w_1050/v4/catalog/product/asset/8/a/e/f/8aefd9f76750e7c9a1ac2162f93a338ca3819c20_TBLCAT020NAT_UK_Catania_Garden_Bar_Polywood_LB01.jpg'
      }
    ]
  };

  filteredProducts = () => {
    let categoryProducts = this.state.products.filter(product =>
      product.category.toLowerCase().includes('lighting')
    );
    console.log(categoryProducts);
    return categoryProducts;
  };

  render() {
    return (
      <div>
        <div className='productBox'>
          {this.filteredProducts().map(product => (
            <div key={product.id} className='individualProduct'>
              <img
                src={product.image}
                width='100%'
                height='80%'
                alt='heroImg'
              />
              <p>
                {product.name} - {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
