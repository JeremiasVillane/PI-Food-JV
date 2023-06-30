const validateField = (input) => {
  const { title, summary, image } = input;
  let errors = {};
  const titleRegex = /\d+/;
  const summaryRegex =
  /^(?=.*\s)(?=.*[a-zA-Z])(?!.*([a-zA-Z])\1{4})(?!.*\d{6,})(?!.*\b(\d)\2{6,}\b)[\s\S]+$/;
  const imageRegex = /^(https?:\/\/)?(?:www\.)?\S+\.(?:jpg|jpeg|png|gif)$/i;

  // Título
  if (!title.length) errors.title = "The recipe must have a title";
  if (title.length && title.length < 4)
    errors.title = "The title must have more than 3 characters";
  if (titleRegex.test(title)) errors.title = "The title cannot contain numbers";
  if (title.length > 50)
    errors.title = "The title cannot be longer than 50 characters";

  // Descripción
  if (!summaryRegex.test(summary))
    errors.summary = "The recipe must have a valid summary";
  if (summary.length > 200)
    errors.summary = "The summary cannot be longer than 200 characters";

  // Imagen
  if (image.length && !imageRegex.test(image))
    errors.image = "It must be a valid image url";

  return errors;
};

export default validateField;
