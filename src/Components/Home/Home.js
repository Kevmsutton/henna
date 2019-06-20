import React from 'react';
import leader from './leader.png';
import './Home.css';
import power from './power.png';
import Button from '../Button/Button.js';

console.log(leader);
console.log(window.innerWidth);
console.log(window.innerHeight);

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='imageDiv'>
          <img src={leader} width='100%' height='auto' alt='largeImg' />
          <p className='leaderP'>
            Unbelievable style <strong>From</strong>
          </p>
          <br />
          <p className='leaderPrice'>
            <strong>£259</strong>
          </p>
          <Button />
        </div>
        <div className='power'>
          <div className='powerProduct'>
            <p className='p1'>Courtyard Heaven and </p>
            <p className='p2'>Summer Specials</p>
            <img src={power} width='85%' height='60%' alt='powerImg' />
          </div>
          <div className='sale'>
            <p className='p1'>Clearance</p>
            <p className='p2'>Before it's all gone</p>
            <img />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
