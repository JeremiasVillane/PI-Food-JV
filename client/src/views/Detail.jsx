import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../redux/actions";

const Detail = ({ handleDiet }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeDetail(id));
  }, [dispatch]);

  const recipe = useSelector((state) => state.detail);
  const { title, image, healthScore, diets, summary, steps } = recipe;
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{healthScore}</p>
      {diets &&
        diets.map((diet, index) => (
          <button key={index} onClick={handleDiet}>
            {diet}
          </button>
        ))}
      <p>
        <span dangerouslySetInnerHTML={{ __html: summary }} />
      </p>
      <section>Steps:</section>
      {steps && (
        <ol>
          {Object.entries(steps).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Detail;
