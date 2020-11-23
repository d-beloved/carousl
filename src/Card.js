import React from "react";
import './Card.scss';

const Card = ({ name }: props) => {
  return (
    <div className='card'>
      <p className='text'>{name}</p>
    </div>
  );
};

export default Card;
