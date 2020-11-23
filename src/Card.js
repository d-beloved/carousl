import React from "react";

const Card = ({ name }: props) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        minWidth: '49%',
        maxWidth: '50%',
        height: "28vh",
        textAlign: "center",
        marginRight: "10px",
        borderRadius: '12px',
      }}
    >
      <p style={{ color: "white" }}>{name}</p>
    </div>
  );
};

export default Card;
