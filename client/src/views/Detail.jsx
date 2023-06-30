import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllRecipes, getDiets, getRecipeDetail } from "../redux/actions";
import { DetailContainer, DetailTitle, DetailImage, DetailHealthScore, DetailDiets, DetailSummary, DetailSteps, DetailStepList, DetailInfo, DetailMain, DetailSummaryLabel } from "../styles/StyledDetail.styled";

const Detail = ({ handleDiet }) => {
  const { id } = useParams();
  const recipesGlobal = useSelector((state) => state.recipes);
  const dietsGlobal = useSelector((state) => state.diets);
  const recipe = useSelector((state) => state.detail);
  const { title, image, healthScore, diets, summary, steps } = recipe;
  const dispatch = useDispatch();

  useEffect(() => {
    !recipesGlobal.length && dispatch(getAllRecipes());
    !dietsGlobal.length && dispatch(getDiets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecipeDetail(id));
  }, [dispatch]);

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
          <span
      dangerouslySetInnerHTML={{__html: summary}}
    />
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
