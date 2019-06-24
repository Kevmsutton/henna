import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import ShoppingBag from './Components/ShoppingBag/ShoppingBag';
import Login from './Components/Login/Login';
import Favourites from './Components/Favourites/Favourites';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/shoppingBag' component={ShoppingBag} />
        <Route exact path='/personalAccount' component={Login} />
        <Route exact path='/favourites' component={Favourites} />
        <Footer />
      </div>
    );
  }
}

export default App;
