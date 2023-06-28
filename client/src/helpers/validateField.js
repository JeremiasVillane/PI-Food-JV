const validateField = (input) => {
  let { title, summary } = input;
  let errors = {};

  if (!title.length) errors.title = "The recipe must have a title";
  if (title.length > 50) errors.title = "The recipe title cannot be longer than 50 characters";
  if (!summary.length) errors.summary = "The recipe must have a summary";
  if (summary.length > 500) errors.summary = "The summary cannot be longer than 500 characters";

  return errors;
};

export default validateField;