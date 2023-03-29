//*  REQUIERO AXIOS
const axios = require("axios");
//*  REQUIERO EL WHERE DE SEQUELIZE
const { where } = require("sequelize");
const { response } = require("./src/app");
//* REQUIERO LA API KEY
const { API_KEY } = process.env;
//* REQUIERO EL MODELO DE GENRE DESDE LA DB
const { Genre } = require("./src/db");

const getGenresIntoDB = async () => {
  try {
    //! HAGO LA PETICION A LA API PARA QUE ME TRAIGA LOS GENEROS CON AXIOS
    const response = await axios
      .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then(
        (res) => res.data,
        (err) => err.message
      );

    //! MAPEO EL RESULTADO A LA LLAMADA A LA API PARA OBTENER UN ARRAY DE STRINGS CON LOS GENEROS
    let arrGenres = response.results.map((genre) => genre.name);
    //! ITERO EL ARRAY DE STRINGS DE MANERA QUE BUSQUE O ME CREE EN LA DB EL GENERO CON EL NOMBRE
    arrGenres.forEach((genre) => {
      //? ACA BUSCO O CREO EL GENERO EN LA DB
      Genre.findOrCreate({ where: { name: genre } });
    });
  } catch (error) {
    return error.message;
  }
};
module.exports = getGenresIntoDB;
