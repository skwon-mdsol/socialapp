import React from 'react';

const Card = ({ header, children }) => {
  return <div className='card'>
    <div className='card-header'>
      { header }
    </div>
    <div className='card-body'>
      { children }
    </div>
  </div>;
}

export default Card;