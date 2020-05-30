import React from 'react';
import './catBreadandHead.css';

const CatBreadandHead = (props) => {
  return (
    <div className='productListHeadContainer'>
      <div>
        <p className='breadCrumb'>
          <strong>
            <span className='clickToGo'>HOME </span>
            <span className='noClickBreadCrumb'>
              / {props.category.toUpperCase()}
            </span>
          </strong>
        </p>
      </div>
      <div className='categoryHeading'>
        <p>
          <strong>{props.category.toUpperCase()}</strong>
        </p>
      </div>
    </div>
  );
};

export default CatBreadandHead;
