import React from "react";

const Card = ({ valor1, valor2 }) => {
    return (
      <div className="card">
        <h3>Card</h3>
        <p>Valor 1: {valor1}</p>
        <p>Valor 2: {valor2}</p>
      </div>
    );
  };

export default Card;