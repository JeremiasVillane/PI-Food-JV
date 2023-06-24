module.exports = summaryCleaner = (summary) => {
  if (!summary) {
    return null;
  }

  // Modifico el summary reemplazando
  // los enlaces a Spoonacular
  const modifiedText = summary.replace(
    /<a href="https:\/\/spoonacular\.com\/recipes\/.+?-\d+">(.+?)<\/a>/g,
    '<strong>$1</strong>'
  );

  return modifiedText;
};
