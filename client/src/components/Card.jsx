import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, image, healthScore, diets }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h3>{title}</h3>
      </Link>
      <img src={image} alt={title} />
      <p>{diets}</p>
      <p>{healthScore}</p>
    </div>
  );
};

export default Card;
