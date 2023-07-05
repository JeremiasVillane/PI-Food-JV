import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validateField from "../helpers/validateField";
import {
  getAllRecipes,
  getDiets,
  newRecipe,
  resetDetail,
  setAlert,
} from "../redux/actions";
import { Button } from "../styles/common/Button";
import {
  FormContainer,
  FormTitle,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormStepList,
  FormStepInput,
  FormCheckboxContainer,
  FormCheckboxLabel,
  FormRangeInput,
  FormImageInput,
  ErrorBubble,
} from "../styles/StyledForm.styled";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipes = useSelector((state) => state.recipes.recipes);
  const diets = useSelector((state) => state.recipes.diets);
  const detail = useSelector((state) => state.recipes.detail);
  const [isRecipeCreated, setIsRecipeCreated] = useState(false);
  const [recipeData, setRecipeData] = useState({
    title: "",
    summary: "",
    steps: [],
    diets: [],
    healthScore: 50,
    image: "",
  });
  const [errors, setErrors] = useState({ title: "", summary: "", diets: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(resetDetail());
  }, [dispatch]);

  useEffect(() => {
    !recipes.length && dispatch(getAllRecipes());
    !diets.length && dispatch(getDiets());
  }, [dispatch]);

  useEffect(() => {
    if (isRecipeCreated) {
      if (detail.id) {
        dispatch(setAlert({ success: "Recipe successfully created" }));
        navigate(`/detail/${detail.id}`);
      } else return;
    }
  }, [isRecipeCreated, navigate, detail.id]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
  
    setRecipeData((prevRecipeData) => {
      let updatedRecipeData = { ...prevRecipeData };
  
      if (["title", "summary", "healthScore", "image"].includes(name)) {
        updatedRecipeData = {
          ...prevRecipeData,
          [name]: value,
        };
      } else {
        const updatedDiets = { ...prevRecipeData.diets };
        if (checked) {
          updatedDiets[value] = true;
        } else {
          delete updatedDiets[value];
        }
        updatedRecipeData = {
          ...prevRecipeData,
          diets: updatedDiets,
        };
      }
  
      const updatedErrors = validateField(updatedRecipeData);
      setErrors(updatedErrors);
  
      return updatedRecipeData;
    });
  };
  

  const handleSteps = (event, index) => {
    const { value } = event.target;
    const updatedSteps = [...recipeData.steps];
    updatedSteps[index] = { ...updatedSteps[index], step: value };
    setRecipeData({
      ...recipeData,
      steps: updatedSteps,
    });
  };

  const handleAddStep = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const stepNum = recipeData.steps.length + 1;
    setRecipeData((prevRecipeData) => ({
      ...prevRecipeData,
      steps: [...prevRecipeData.steps, { number: stepNum, step: value }],
    }));
  };

  const handleRemoveStep = (event) => {
    event.preventDefault();
    const endIndex = recipeData.steps.length - 1;
    setRecipeData({
      ...recipeData,
      steps: [...recipeData.steps.slice(0, endIndex)],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await dispatch(newRecipe(recipeData)).then(() => {
      setIsRecipeCreated(true);
      setRecipeData({
        title: "",
        summary: "",
        steps: [],
        diets: [],
        healthScore: 50,
        image: "",
      });
      dispatch(getAllRecipes());
    });
  };

  return (
    <FormContainer>
      <FormTitle>Create new recipe:</FormTitle>
      <div>
        <form>
          <FormField>
            <FormLabel>Title:</FormLabel>
            <FormInput
              name="title"
              value={recipeData.title}
              type="text"
              onChange={handleChange}
              placeholder="Title of your recipe..."
              autoFocus={true}
            />
          </FormField>
          {errors.title && <ErrorBubble>{errors.title}</ErrorBubble>}
          <FormField>
            <FormLabel>Sumary:</FormLabel>
            <FormTextarea
              name="summary"
              value={recipeData.summary}
              type="text"
              onChange={handleChange}
              placeholder="Description of your recipe..."
              rows="4"
              cols="60"
            />
          </FormField>
          {errors.summary && <ErrorBubble>{errors.summary}</ErrorBubble>}
          <FormField>
            <FormLabel>Steps:</FormLabel>
            <Button
              kind="primary"
              onClick={handleAddStep}
              disabled={recipeData.steps.length === 12}
            >
              Add step
            </Button>
            <Button
              kind="primary"
              onClick={handleRemoveStep}
              disabled={!recipeData.steps.length}
            >
              Remove step
            </Button>
            <FormStepList>
              {recipeData.steps.map((step, index) => (
                <li key={index}>
                  <FormStepInput
                    type="text"
                    name={step.number}
                    value={step.step}
                    onChange={(event) => handleSteps(event, index)}
                  />
                </li>
              ))}
            </FormStepList>
          </FormField>
          <FormField>
            <FormLabel>Related diets:</FormLabel>
            <div>
              {diets.map((diet, index) => (
                <FormCheckboxContainer key={index}>
                  <input
                    key={index}
                    type="checkbox"
                    value={diet}
                    checked={recipeData.diets[diet] || false}
                    onChange={handleChange}
                  />
                  <FormCheckboxLabel>
                    {diet}
                  </FormCheckboxLabel>
                </FormCheckboxContainer>
              ))}
            </div>
            <br />
            {errors.diets && <ErrorBubble>{errors.diets}</ErrorBubble>}
          </FormField>
          <FormField>
            <FormLabel>
              Health Score: <span>{recipeData.healthScore}</span>
            </FormLabel>
            <FormRangeInput
              name="healthScore"
              value={recipeData.healthScore}
              type="range"
              min="1"
              max="100"
              onChange={handleChange}
              placeholder="How healthy is your recipe..."
            />
          </FormField>
          <FormField>
            <FormLabel>Image:</FormLabel>
            <FormImageInput
              name="image"
              value={recipeData.image}
              type="text"
              onChange={handleChange}
              placeholder="URL for your image..."
            />
          </FormField>
          {errors.image && <ErrorBubble>{errors.image}</ErrorBubble>}
          <br />
          <Button
            kind="primary"
            onClick={handleSubmit}
            disabled={Object.keys(errors).length > 0}
          >
            Create
          </Button>
        </form>
      </div>
    </FormContainer>
  );
};

export default Form;
