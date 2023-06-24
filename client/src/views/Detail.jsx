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

  // const replaceLinksInSummary = () => {
  //   if (!summary) {
  //     return "";
  //   }
  //   const regex = /<a href="https:\/\/spoonacular\.com\/recipes\/.+?-(\d+)">(.+?)<\/a>/g;
  //   const matches = summary.matchAll(regex);
  //   let modifiedText = summary;
  
  //   for (const match of matches) {
  //     const [fullMatch, id, linkText] = match;
  //     const link = `/detail/${id}`;
  //     const replacedText = `<Link to="${link}">${linkText}</Link>`;
  //     modifiedText = modifiedText.replace(fullMatch, replacedText);
  //   }
  
  //   return modifiedText;
  // };

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
