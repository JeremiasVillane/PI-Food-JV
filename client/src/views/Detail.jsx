import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeDetail(id));
  }, [dispatch]);

  const recipe = useSelector((state) => state.detail);
  const { title, image, healthScore, diets, summary } = recipe;
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{healthScore}</p>
      <p>{diets}</p>
      <div>
        <span dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    </div>
  );
};

export default Detail;
