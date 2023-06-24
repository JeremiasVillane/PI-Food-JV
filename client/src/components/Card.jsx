import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { filtering } from "../redux/actions";

const Card = ({ id, title, image, healthScore, diets }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const handlefilter = (event) => {
    const { textContent } = event.target;
    const filters = {
      search: "",
      source: "",
      diets: {...diets, [textContent]: true},
    };
    dispatch(filtering(filters));
    if (pathname !== "/home") {
      navigate("/home");
    }
  }

  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h3>{title}</h3>
      </Link>
      <img src={image} alt={title} />
      {diets &&
        diets.map((diet, index) => (
          <button key={index} onClick={handlefilter}>
            {diet}
          </button>
        ))}
      <p>{healthScore}</p>
    </div>
  );
};

export default Card;
