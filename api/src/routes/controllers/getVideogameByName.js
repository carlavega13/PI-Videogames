const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame } = require("../../db");
const { Op } = require("sequelize");

const getVideogameByName = async ({ name }) => {
  try {
    //!  BUSCO EN LA DB SI LA QUERY CONTIENE EN EL NOMBRE DE LAS ENTIDADES
    const foundDB = await Videogame.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    //! LLAMO A LA API POR LO INGRESADO POR QUERY
    let response = await axios
      .get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
      .then((res) => res.data.results);
    //! LA RESPUESTA LA RECORTO A 15 RESULTADOS
    if (foundDB.length >= 3) {
      response = response.slice(0, 12);
      response = [...response, foundDB[0], foundDB[1], foundDB[2]];
    } else {
      response = response.slice(0, 15);
      response = [...response, ...foundDB];
    }

    //! RETORNO LA RESPUESTA
    return response;
  } catch (error) {
    return error.message;
  }
};

module.exports = getVideogameByName;
