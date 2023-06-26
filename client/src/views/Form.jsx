import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRecipes, getDiets, newRecipe } from "../redux/actions";

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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    !recipes.length &&
    dispatch(getAllRecipes());
    !diets.length &&
    dispatch(getDiets())
  }, [dispatch]);

  useEffect(() => {
    if (isRecipeCreated) {
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
    // setErrors(validateField({
    //   ...recipeData,
    //   [name]: value,
    // }));
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
      steps: [...recipeData.steps.slice(0,endIndex)],
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    await dispatch(newRecipe(recipeData))
      .then(() => {
        window.alert("Recipe successfully created");
        setIsRecipeCreated(true);
        dispatch(getDiets()).then(() => dispatch(getAllRecipes()));
      });
  };

  // const handleCreateRecipe = (event) => {
  //   event.preventDefault();
  //   dispatch(newRecipe(recipeData))
  //     .then((res) => navigate(`/recipes/${res.data.id}`))
  //     .catch((error) => console.error("Error:", error));
  // };

  // const validateField = (name, value) => {
  //   let error = null;

  //   if (name === "title" && !value) {
  //     error = "El título es obligatorio.";
  //   } else if (name === "summary" && !value) {
  //     error = "Este campo es obligatorio.";
  //   } else if (name === "healthScore" && (value < 0 || value > 100)) {
  //     error = "Debe ingresar un número del 1 al 100.";
  //   }

  //   return error;
  // };

  // const isButtonDisabled = Object.keys(errors).length > 0;

  return (
    <>
      <h1>Create new recipe:</h1>
      <div>
        <form>
          <h3>Title:</h3>
          <input
            name="title"
            value={recipeData.title}
            type="text"
            onChange={handleChange}
            placeholder="Title of your recipe..."
            autoFocus={true}
          />
          <h3>Sumary:</h3>
          <textarea
            name="summary"
            value={recipeData.summary}
            type="text"
            onChange={handleChange}
            placeholder="Description of your recipe..."
            rows="4" cols="60"
          />
          <h3>Steps:</h3>
          <button onClick={handleAddStep} disabled={recipeData.steps.length === 12}>Add step</button>
          <button onClick={handleRemoveStep} disabled={!recipeData.steps.length}>Remove step</button>
          <ol>
            {recipeData.steps.map((step, index) => (
              <li key={index}>
                <input
                  type="text"
                  name={step.number}
                  value={step.step}
                  onChange={(event) => handleSteps(event, index)}
                />
              </li>
            ))}
          </ol>
          <h3>Related diets:</h3>
          <div>
            {diets.map((diet, index) => (
              <label key={index}>
                <input
                  key={index}
                  type="checkbox"
                  value={diet}
                  checked={recipeData.diets[diet] || false}
                  onChange={handleChange}
                />
                {diet.charAt(0).toUpperCase() + diet.slice(1)}
              </label>
            ))}
          </div>
          <h3>Health Score:</h3>
          <input
            name="healthScore"
            value={recipeData.healthScore}
            type="range"
            min="1"
            max="100"
            onChange={handleChange}
            placeholder="How healthy is your recipe..."
          />
          <h3>Image:</h3>
          <input
            name="image"
            value={recipeData.image}
            type="text"
            onChange={handleChange}
            placeholder="URL for your image..."
          />
          <button onClick={handleSubmit}>Create</button>
        </form>
      </div>
    </>
  );
};

export default Form;
