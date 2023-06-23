import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, image, healthScore, diets, handleDiet }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h3>{title}</h3>
      </Link>
      <img src={image} alt={title} />
      {diets &&
        diets.map((diet, index) => (
          <button key={index} onClick={handleDiet}>
            {diet}
          </button>
        ))}
      <p>{healthScore}</p>
    </div>
  );
};

export default Card;
