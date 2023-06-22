module.exports = summaryCleaner = (summary) => {
  if (!summary) {
    return null;
  }

  // Modifico el summary reemplazando los enlaces
  // a Spoonacular por rutas de la app
  const modifiedText = summary.replace(
    /<a href="https:\/\/spoonacular\.com\/recipes\/.+?-(\d+)">(.+?)<\/a>/g,
    '<a href="/detail/$1">$2</a>'
  );

  return modifiedText;
};
