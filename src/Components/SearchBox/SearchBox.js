import React from 'react';
import './SearchBox.css';
import MaterialIcon from 'material-icons-react';

const SearchBox = (props) => {
  return (
    <div className='searchBox'>
      <input
        placeholder='Search for products'
        onKeyPress={(event) => props.searchBarEvent(event)}
      ></input>
      <MaterialIcon icon='search' />
    </div>
  );
};

export default SearchBox;
