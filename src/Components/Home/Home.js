import React from 'react';
import leader from './leader.png';
import './Home.css';
import Button from '../Button/Button.js';
import HeroBox from '../Hero/Hero.js';
import designer from './designer.png';
import PowerProductHome from '../PowerProductHome/PowerProductHome';

class Home extends React.Component {
  render() {
    return (
      <div className='homeContain'>
        <div className='headImageDiv'>
          <div className='textHeadImage'>
            <p className='leaderP'>Contemporary dining style</p>
            <Button />
          </div>
        </div>
        <div>
          <PowerProductHome />
        </div>

        <div className='designerBlock'>
          <img src={designer} width='42%' height='90%' alt='desImage' />
          <div className='designerText'>
            <p>Meet The Designer</p>
            <p>
              Alex Nyarko is a game-changing designer, the latest in a line of
              colour block crowd pleasers. Her pieces are breaking ground for a
              new era of statement elegance...
            </p>
            <p>
              <u>
                <strong>SEE HER LATEST DESIGNS</strong>
              </u>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
