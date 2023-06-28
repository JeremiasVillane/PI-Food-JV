import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRecipes, getDiets, newRecipe, resetDetail } from "../redux/actions";
import { FormContainer, FormTitle, FormField, FormLabel, FormInput, FormTextarea, FormButton, FormStepList, FormStepInput, FormCheckboxContainer, FormCheckboxLabel, FormRangeInput, FormImageInput } from "../styles/StyledForm.styled";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipes, diets, detail } = useSelector((state) => state);
  const [isRecipeCreated, setIsRecipeCreated] = useState(false);
  const [recipeData, setRecipeData] = useState({
    title: "",
    summary: "",
    steps: [],
    diets: [],
    healthScore: 50,
    image: "",
  });
  const [errors, setErrors] = useState({title: "", summary: ""});

  useEffect(() => {
    dispatch(resetDetail());
  }, [dispatch]);

  useEffect(() => {
    !recipes.length && dispatch(getAllRecipes());
    !diets.length && dispatch(getDiets());
  }, [dispatch]);

  useEffect(() => {
    if (isRecipeCreated) {
      window.alert("Recipe successfully created");
      navigate(`/detail/${detail.id}`);
    }
  }, [isRecipeCreated, navigate, detail.id]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (["title", "summary", "healthScore", "image"].includes(name)) {
      setRecipeData({
        ...recipeData,
        [name]: value,
      });
      setErrors(validateField({
        ...recipeData,
        [name]: value,
      }));
    } else {
      setRecipeData((prevRecipeData) => {
        const updatedDiets = { ...prevRecipeData.diets };
        if (checked) {
          updatedDiets[value] = true;
        } else {
          delete updatedDiets[value];
        }
        return {
          ...prevRecipeData,
          diets: updatedDiets,
        };
      });
    }
  };

  // const handleSteps = (event, index) => {
  //   const { value } = event.target;
  //   const updatedSteps = [...steps];
  //   updatedSteps[index] = { ...updatedSteps[index], step: value };
  //   setSteps(updatedSteps);
  // };

  const handleSteps = (event, index) => {
    const { value } = event.target;
    const updatedSteps = [...recipeData.steps];
    updatedSteps[index] = { ...updatedSteps[index], step: value };
    setRecipeData({
      ...recipeData,
      steps: updatedSteps,
    });
  };

  // const handleAddStep = (event) => {
  //   event.preventDefault();
  //   const {value} = event.target;
  //   const stepNum = steps.length + 1;
  //   setSteps([
  //     ...steps,
  //     {number: stepNum, step: value}
  //   ])
  //   setRecipeData({
  //     ...recipeData,
  //     steps: [...steps, {number: stepNum, step: value}]
  //   })
  // };

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
      })
      dispatch(getDiets())
      dispatch(getAllRecipes());
    });
  };

  // const handleCreateRecipe = (event) => {
  //   event.preventDefault();
  //   dispatch(newRecipe(recipeData))
  //     .then((res) => navigate(`/recipes/${res.data.id}`))
  //     .catch((error) => console.error("Error:", error));
  // };

  const validateField = (input) => {
    let { title, summary } = input;
    let errors = {};

    if (!title.length) errors.title = "The recipe must have a title";
    if (title.length > 50) errors.title = "The recipe title cannot be longer than 50 characters";
    if (!summary.length) errors.summary = "The recipe must have a summary";
    if (summary.length > 500) errors.summary = "The summary cannot be longer than 500 characters";

    return errors;
  };
  // const isButtonDisabled = Object.keys(errors).length > 0;

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
          {errors.title && (
            <span>{errors.title}</span>
          )}
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
          {errors.summary && (
            <span>{errors.summary}</span>
          )}
          <FormField>
            <FormLabel>Steps:</FormLabel>
            <FormButton
              onClick={handleAddStep}
              disabled={recipeData.steps.length === 12}
            >
              Add step
            </FormButton>
            <FormButton
              onClick={handleRemoveStep}
              disabled={!recipeData.steps.length}
            >
              Remove step
            </FormButton>
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
                    {diet.charAt(0).toUpperCase() + diet.slice(1)}
                  </FormCheckboxLabel>
                </FormCheckboxContainer>
              ))}
            </div>
          </FormField>
          <FormField>
            <FormLabel>Health Score: <span>{recipeData.healthScore}</span></FormLabel>
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
          <FormButton onClick={handleSubmit} disabled={Object.keys(errors).length > 0}>Create</FormButton>
        </form>
      </div>
    </FormContainer>
  );
};

export default Form;
