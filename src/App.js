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
import Product from './Components/ProductPage/product';

class App extends React.Component {
  state = {
    category: null,
    colourSelector: null,
    priceSelector: null,
    materialSelector: 'metal',
    individualProduct: null,
    fullProduct: null,
    basket: [],
    favourites: []
  };

  removeBasketItem = basketItem => {
    let updatedBasket = this.state.basket.filter(
      item => item.id !== basketItem.id
    );
    this.setState({ basket: updatedBasket });
  };

  removeFavouriteItem = favouriteItem => {
    let updatedFavourites = this.state.favourites.filter(
      item => item.id !== favouriteItem.id
    );
    this.setState({ favourites: updatedFavourites });
  };

  sumOfBasketItems = () => {
    let total = 0;
    const basket = this.state.basket;
    let totalArray = basket.map(item => item.price);
    for (let i = 0; i < totalArray.length; i++) {
      total += totalArray[i];
    }
    return total;
  };

  addProductToBasket = fullProduct => {
    this.removeFavouriteItem(fullProduct);
    this.setState(previousState => ({
      basket: [...previousState.basket, fullProduct]
    }));
  };

  addProductToFavourites = fullProduct => {
    let filteredFavourites = this.state.favourites.filter(
      product => product.id !== fullProduct.id
    );
    this.setState({
      favourites: [...filteredFavourites, fullProduct]
    });
  };

  handleNavCategoryClick = category => {
    this.setState({ category: category });
  };

  handleProductClick = product => {
    this.setState({ individualProduct: product.name });
    this.setState({ fullProduct: product });
  };

  render() {
    const {
      category,
      colourSelector,
      priceSelector,
      materialSelector,
      individualProduct,
      fullProduct,
      basket,
      favourites
    } = this.state;
    return (
      <div className='app'>
        <Navbar handleNavCategoryClick={this.handleNavCategoryClick} />
        <Route exact path='/' component={Home} />
        <Route
          path='/shoppingBag'
          render={props => (
            <ShoppingBag
              {...props}
              basket={basket}
              sumOfBasketItems={this.sumOfBasketItems()}
              removeBasketItem={this.removeBasketItem}
            />
          )}
        />
        <Route path='/personalAccount' component={Login} />
        <Route
          path='/favourites'
          render={props => (
            <Favourites
              {...props}
              favourites={favourites}
              addProductToBasket={this.addProductToBasket}
            />
          )}
        />
        <Route
          path={`/${this.state.individualProduct}`}
          render={props => (
            <Product
              {...props}
              individualProduct={individualProduct}
              fullProduct={fullProduct}
              addProductToBasket={this.addProductToBasket}
              addProductToFavourites={this.addProductToFavourites}
            />
          )}
        />
        <Route
          path={`/${this.state.category}`}
          render={props => (
            <ProductList
              {...props}
              category={category}
              colourSelector={colourSelector}
              priceSelector={priceSelector}
              materialSelector={materialSelector}
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
