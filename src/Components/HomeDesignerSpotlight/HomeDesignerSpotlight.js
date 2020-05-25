import React from 'react';
import './HomeDesignerSpotlight.css';
import designer from './designer.png';

const HomeDesignerSpotlight = () => {
  return (
    <div className='designerBlock'>
      <div className='designerImageandText'>
        <div className='designerImageBlock'></div>
        <div className='designerTextBlock'>
          <h3>Meet The Designer</h3>
          <p>
            Alex Nyarko is a game-changing designer, the latest in a line of
            colour block crowd pleasers. Her pieces are breaking ground for a
            new era of statement elegance...
          </p>
          <p>
            <strong>See Her Latest Designs >></strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDesignerSpotlight;
