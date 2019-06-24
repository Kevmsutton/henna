import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import shoppingBag from './Components/ShoppingBag/ShoppingBag';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/shoppingBag' component={shoppingBag} />

        <Footer />
      </div>
    );
  }
}

export default App;
