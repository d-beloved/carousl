import React from "react";

const Card = ({ name }: props) => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <p style={{ color: 'white' }}>{name}</p>
    </div>
  );
};

export default Card;
