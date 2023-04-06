const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame } = require("../../db");
const { Op } = require("sequelize");

const getVideogameByName = async ({ name }) => {
  console.log(name);
  try {
    //!  BUSCO EN LA DB SI LA QUERY CONTIENE EN EL NOMBRE DE LAS ENTIDADES
    const foundDB = await Videogame.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    console.log(foundDB);

    //! LLAMO A LA API POR LO INGRESADO POR QUERY
    let response = await axios
      .get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
      .then((res) => res.data.results);
    //!-------------llamo a la api denuevo para que me traiga en detail cada juego---------------------------------------------------------------
    response = response.map(({ id }) => id);
    let arrPromises = [];
    let p;
    for (let i = 0; i < response.length; i++) {
      p = axios
        .get(`https://api.rawg.io/api/games/${response[i]}?key=${API_KEY}`)
        .then(
          (res) => res.data,
          (err) => err.message
        );
      arrPromises.push(p);
    }

    let response1 = await Promise.all(arrPromises);

    //!--------------------------------------------------------------------------------------------

    response1 = response1.map(
      ({
        id,
        name,
        platforms,
        description,
        released,
        rating,
        genres,
        background_image,
      }) => {
        return {
          id,
          name,
          platforms,
          description,
          released,
          rating,
          genres,
          img: background_image,
        };
      }
    );
    console.log(response1.length);
    //! LA RESPUESTA LA RECORTO A 15 RESULTADOS
    if (foundDB.length === 0) {
      response1 = response1.slice(0, 15);
      return response1;
    }
    if (foundDB.length >= 3) {
      response1 = response1.slice(0, 12);
      response1 = [...response1, foundDB[0], foundDB[1], foundDB[2]];
      return response1;
    } else {
      response1 = response1.slice(0, 14);
      response1 = [...response1, ...foundDB];
      return response1;
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

module.exports = getVideogameByName;
