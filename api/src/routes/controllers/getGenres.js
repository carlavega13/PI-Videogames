const { Videogame, Genre } = require("../../db");
const getGenres = async () => {
  const genres = await Genre.findAll();
  return genres;
};
module.exports = getGenres;
