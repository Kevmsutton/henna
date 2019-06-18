import React from 'react';
import leader from './leader.png';
import './Home.css';

console.log(leader);
console.log(window.innerWidth);
console.log(window.innerHeight);

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='imageDiv'>
          <img
            src={leader}
            width='100%'
            height='auto'
            border='0'
            alt='largeImg'
          />
          <p className='leaderP'>
            Unbelievable style <strong>From</strong>
          </p>
          <br />
          <p className='leaderPrice'>
            <strong>£259</strong>
          </p>
          <div className='buttonOuter'>
            <div className='buttonInner'>Take A Look</div>
          </div>
        </div>
        <div className='power'>
          <div className='power1'>
            <p className='p1'>Courtyard Heaven and </p>
            <p className='p2'>Summer Specials</p>
            <img />
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
