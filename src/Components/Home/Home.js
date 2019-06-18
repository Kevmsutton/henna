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
          <img src={leader} width='100%' height='auto' />
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
        <div className='power'>Hello</div>
      </React.Fragment>
    );
  }
}

export default Home;
