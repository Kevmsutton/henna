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

class App extends React.Component {
  state = {
    category: null
  };

  handleNavCategoryClick = category => {
    this.setState({ category: category });
  };

  render() {
    return (
      <div className='app'>
        <Navbar handleNavCategoryClick={this.handleNavCategoryClick} />
        <Route exact path='/' component={Home} />
        <Route exact path='/shoppingBag' component={ShoppingBag} />
        <Route exact path='/personalAccount' component={Login} />
        <Route exact path='/favourites' component={Favourites} />
        <Route exact path='/Lighting' component={ProductList} />
        <Footer />
      </div>
    );
  }
}

export default App;
