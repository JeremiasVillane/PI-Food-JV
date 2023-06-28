import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllRecipes, getDiets, getRecipeDetail } from "../redux/actions";
import { DetailContainer, DetailTitle, DetailImage, DetailHealthScore, DetailDiets, DetailSummary, DetailSteps, DetailStepList, DetailInfo, DetailMain, DetailSummaryLabel } from "../styles/StyledDetail.styled";

const Detail = ({ handleDiet }) => {
  const { id } = useParams();
  const recipesGlobal = useSelector((state) => state.recipes);
  const dietsGlobal = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  useEffect(() => {
    !recipesGlobal.length && dispatch(getAllRecipes());
    !dietsGlobal.length && dispatch(getDiets());
  }, [dispatch]);

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
    <DetailContainer>
      <DetailTitle>{title}</DetailTitle>
      <DetailInfo>
        <DetailMain>
          <DetailImage src={image} alt={title} />
          <DetailHealthScore><strong>Health Score:</strong> {healthScore}</DetailHealthScore>
          <DetailDiets>
            {diets &&
              diets.map((diet, index) => (
                <button key={index} onClick={handleDiet}>
                  {diet}
                </button>
              ))}
          </DetailDiets>
        </DetailMain>
        <DetailSummary>
          <DetailSummaryLabel>Summary:</DetailSummaryLabel>
          <span dangerouslySetInnerHTML={{ __html: summary }} />
        </DetailSummary>
      </DetailInfo>
      <div>
      <DetailSteps>Steps:</DetailSteps>
      {steps && (
        <DetailStepList>
          {steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
        </DetailStepList>
      )}
      </div>
    </DetailContainer>
  );
};

export default Detail;
