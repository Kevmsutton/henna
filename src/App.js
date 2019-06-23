import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
