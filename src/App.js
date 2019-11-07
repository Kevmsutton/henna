import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import ShoppingBag from './Components/ShoppingBag/ShoppingBag';
import Login from './Components/Login/Login';
import Favourites from './Components/Favourites/Favourites';
import { Route } from 'react-router-dom';
import ProductList from './Components/ProductList/ProductList';
import Header from './Components/Header/Header';
import Product from './Components/ProductPage/product';

class App extends React.Component {
  state = {
    category: null,
    colourSelector: 'black',
    priceSelector: 10000,
    materialSelector: 'metal',
    individualProduct: ''
  };

  handleNavCategoryClick = category => {
    this.setState({ category: category });
  };

  handleProductClick = product => {
    console.log(product);
    this.setState({ individualProduct: product.name });
  };

  render() {
    const {
      category,
      colourSelector,
      priceSelector,
      materialSelector
    } = this.state;
    return (
      <div className='app'>
        <Navbar handleNavCategoryClick={this.handleNavCategoryClick} />
        <Route exact path='/' component={Home} />
        <Route path='/shoppingBag' component={ShoppingBag} />
        <Route path='/personalAccount' component={Login} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/productPage' component={Product} />
        <Route
          path={`/${this.state.category}`}
          render={props => (
            <ProductList
              {...props}
              category={category}
              colourSelector={colourSelector}
              priceSelector={priceSelector}
              materialSelector={materialSelector}
              category={category}
              handleProductClick={this.handleProductClick}
            />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
