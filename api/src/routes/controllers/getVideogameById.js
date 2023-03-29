const axios = require("axios");
const { API_KEY } = process.env;
const validator = require("validator");
const { Videogame } = require("../../db");

const getVideogameById = async ({ id }) => {
  try {
    //todo ///////  BUSCO BASE DE DATO  ///////////////////
    //! SI ES UN UUID LO VALIDO Y LO BUSCO EN LA BD Y LO RETORNO
    if (validator.isUUID(id)) {
      const found = await Videogame.findByPk(id);
      return found;
    }
    //todo  ////////////////////////////////////////////////////
    //! HAGO LA PETICION A LA API POR EL ID DESESTRUCTURADO DE REQ.PARAMS
    let result = await axios
      .get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      .then((res) => res.data);
    //! TRANSFORMO A RESULT PARA AGARRAR LAS PROPIEDADES QUE ME INTERESAN
    result = {
      id: result.id,
      name: result.name,
      image: result.background_image,
      platforms: result.platforms,
      description: result.description,
      released: result.released,
      rating: result.rating,
      genres: result.genres,
    };
    //! RETORNO EL RESULTADO
    return result;
  } catch (error) {
    return error.message;
  }
};
module.exports = getVideogameById;
