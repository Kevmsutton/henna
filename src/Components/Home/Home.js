import React from 'react';
import leader from './leader.png';
import './Home.css';

import PowerProductHome from '../PowerProductHome/PowerProductHome';
import HomeHero from '../HomeHero/HomeHero.js';
import HomeDesignerSpotlight from '../HomeDesignerSpotlight/HomeDesignerSpotlight.js';

class Home extends React.Component {
  render() {
    return (
      <div className='homeContain'>
        <HomeHero />
        <PowerProductHome />
        <HomeDesignerSpotlight />
      </div>
    );
  }
}

export default Home;
