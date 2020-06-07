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
import ProductFilterForm from './Components/ProductFilterForm/ProductFilterForm';
import CatBreadandHead from './Components/catBreadandHead/catBreadandHead.js';

class App extends React.Component {
  state = {
    category: 'beds',
    colourSelector: null,
    priceSelector: null,
    materialSelector: 'metal',
    individualProduct: null,
    fullProduct: null,
    basket: [],
    favourites: [],
    products: [],
  };

  componentDidMount() {
    fetch('./productFeed.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => this.setState({ products: data.products }));
  }

  removeBasketItem = (basketItem) => {
    let updatedBasket = this.state.basket.filter(
      (item) => item.id !== basketItem.id
    );
    this.setState({ basket: updatedBasket });
  };

  removeFavouriteItem = (favouriteItem) => {
    let updatedFavourites = this.state.favourites.filter(
      (item) => item.id !== favouriteItem.id
    );
    this.setState({ favourites: updatedFavourites });
  };

  sumOfBasketItems = () => {
    let total = 0;
    const basket = this.state.basket;
    let totalArray = basket.map((item) => item.price);
    for (let i = 0; i < totalArray.length; i++) {
      total += totalArray[i];
    }
    return total;
  };

  // handleColourChange = (productColour) => {
  //   this.setState({ colourSelector: productColour });
  // };

  addProductToBasket = (fullProduct) => {
    this.removeFavouriteItem(fullProduct);
    this.setState((previousState) => ({
      basket: [...previousState.basket, fullProduct],
    }));
  };

  addProductToFavourites = (fullProduct) => {
    let filteredFavourites = this.state.favourites.filter(
      (product) => product.id !== fullProduct.id
    );
    this.setState({
      favourites: [...filteredFavourites, fullProduct],
    });
  };

  handleNavCategoryClick = (category) => {
    document.querySelector('.mobileNavWrap').classList.toggle('active');
    document.querySelector('.mobileMenuIcon').classList.toggle('burger');
    this.setState({ category: category });
  };

  handleProductClick = (product) => {
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
      favourites,
      products,
    } = this.state;
    return (
      <div className='app'>
        <Navbar
          handleNavCategoryClick={this.handleNavCategoryClick}
          basket={basket}
          favourites={favourites}
        />
        <Route exact path='/' component={Home} />
        <Route
          path='/shoppingBag'
          render={(props) => (
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
          render={(props) => (
            <Favourites
              {...props}
              favourites={favourites}
              addProductToBasket={this.addProductToBasket}
            />
          )}
        />
        <Route
          path={`/${this.state.individualProduct}`}
          // when page is refreshed there is no stored state. And so therefore renders nothing!
          render={(props) => (
            <Product
              {...props}
              individualProduct={individualProduct}
              fullProduct={fullProduct}
              addProductToBasket={this.addProductToBasket}
              addProductToFavourites={this.addProductToFavourites}
              favourites={favourites}
              removeFavouriteItem={this.removeFavouriteItem}
            />
          )}
        />
        <Route
          path={`/${this.state.category}`}
          // when page is refreshed there is no stored state. And so therefore renders nothing!
          render={(props) => (
            <div>
              <CatBreadandHead {...props} category={category} />
              <div className='productListContain'>
                <ProductFilterForm />
                <ProductList
                  {...props}
                  category={category}
                  colourSelector={colourSelector}
                  priceSelector={priceSelector}
                  materialSelector={materialSelector}
                  handleProductClick={this.handleProductClick}
                  products={products}
                />
              </div>
            </div>
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
