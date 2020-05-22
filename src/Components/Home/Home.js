import React from 'react';
import leader from './leader.png';
import './Home.css';
import power from './power.png';
import Button from '../Button/Button.js';
import sale from './sale.png';
import HeroBox from '../Hero/Hero.js';
import designer from './designer.png';

class Home extends React.Component {
  render() {
    return (
      <div className='homeContain'>
        <div className='headImageDiv'>
          <div className='textHeadImage'>
            <p className='leaderP'>
              Unbelievable style <strong>From</strong>
            </p>
            <br />
            <p className='leaderPrice'>
              <strong>£259</strong>
            </p>
            <Button />
          </div>
        </div>
        <div className='power'>
          <div className='powerProduct'>
            <p className='p1'>Courtyard Heaven and </p>
            <p className='p2'>Summer Specials</p>
            <img src={power} width='85%' height='60%' alt='powerImg' />
          </div>
          <div className='sale'>
            <img src={sale} width='auto' height='90%' alt='saleImg' />
            <p className='p1'>Clearance</p>
            <p className='p2'>Before it's all gone</p>
            <div className='saleButton'>
              <Button />
            </div>
          </div>
        </div>
        <HeroBox />
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
