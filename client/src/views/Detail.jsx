import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components";
import { getAllRecipes, getDiets, getRecipeDetail, resetDetail } from "../redux/actions";
import { Button } from "../styles/common/Button";
import {
  DetailContainer,
  DetailTitle,
  DetailImage,
  DetailHealthScore,
  DetailDiets,
  DetailSummary,
  DetailSteps,
  DetailStepList,
  DetailInfo,
  DetailMain,
  DetailSummaryLabel,
} from "../styles/StyledDetail.styled";

const Detail = () => {
  const { id } = useParams();
  const {
    recipes,
    diets: dietsGlobal,
    detail,
  } = useSelector((state) => state.recipes);
  const { isLoading } = useSelector((state) => state.ui);
  const { title, image, healthScore, diets, summary, steps } = detail;
  const dispatch = useDispatch();

  useEffect(() => {
    !recipes.length && dispatch(getAllRecipes());
    !dietsGlobal.length && dispatch(getDiets());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getRecipeDetail(id));
  
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch, id]);

  return (
    <>
      {isLoading && <Loader type="detail" />}
      <DetailContainer>
        <Link to="/home">
          <Button name="back-home" kind="primary">Back Home</Button>
        </Link>
        <DetailTitle>{title}</DetailTitle>
        <DetailInfo>
          <DetailMain>
            <DetailImage src={image} alt={title} />
            <DetailHealthScore>
              <strong>Health Score:</strong> {healthScore}
            </DetailHealthScore>
            <DetailDiets>
              {diets &&
                diets.map((diet, index) => (
                  <button key={index}>
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
    </>
  );
};

export default Detail;
