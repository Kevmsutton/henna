import React from 'react';
import './HomeDesignerSpotlight.css';
import designer from './designer.png';

const HomeDesignerSpotlight = () => {
  return (
    <div className='designerBlock'>
      <div className='designerImageandText'>
        <div className='designerImageBlock'>
          <img src={designer} alt='desImage' />
        </div>
        <div className='designerTextBlock'>
          <p>Meet The Designer</p>
          <p>
            Alex Nyarko is a game-changing designer, the latest in a line of
            colour block crowd pleasers. Her pieces are breaking ground for a
            new era of statement elegance...
          </p>
          <p>
            <strong>SEE HER LATEST DESIGNS >></strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignerSpotlight;
