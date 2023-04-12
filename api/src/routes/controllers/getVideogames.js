const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../../db");
const getVideogames = async () => {
  try {
    console.log("get videogames");
    //todo      ESTO ES DE LA API
    //*VARIABLES
    let id = 1;
    const arrPromises = [];
    const arrId = [];
    let p;
    //* ////////////////
    //!  WHILE HASTA QUE SE LLENE EL ARRAY DE IDS A BUSCAR
    while (arrId.length < 200) {
      //! GENERO UN ID RANDOM ENTRE 1 Y 500000
      id = Math.round(Math.random() * (500 - 1) + 1);
      //! ME FIJO SI YA TENGO ESE NUMERO EN EL ARRAY
      const found = arrId.find((arrId) => arrId === id);
      //! SI LO TENGO CORTO ESTA VUELTA DE WHILE
      if (found) continue;
      //! SI NO LO TENGO EN EL ARRAY PUSHEO EL ID A MI ARRAY DE IDS
      arrId.push(id);
      //! P SE CONVIERTE EN UNA NUEVA PROMESA CON EL ID RANDOM GENERADO
      p = axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`).then(
        (res) => res.data,
        (err) => err.message
      );

      //! PUSHEO LA PROMESA AL ARRAY DE PROMESAS
      arrPromises.push(p);
    }
    //!SALGO DEL WHILE
    //! ACA CREO MI ARRAY DE RESULTADOS USANDO PROMISE ALL
    let arrResult = await Promise.all(arrPromises).then((res) => res);
    //! MAPEO MI ARRAY DE RESULTADO PARA DEJAR LAS PROPIEDADES QUE ME INTERESAN
    arrResult = arrResult.map(
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
          // made: false,
        };
      }
    );
    ///! FILTRO POR SI ME LLEGARON JUEGOS SIN IMAGENES
    arrResult = arrResult.filter((j) => j.img !== null);
    //todo API//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //*   ACA LOS DE LA BASE DE DATO  */

    // !     ME GUARDO UNA PROMESA CON TODOS LOS JUEGOS DE LA DB QUE INCLUYAN LA RELACION CON LA TABLA DE GENEROS
    let bd = await Videogame.findAll({ include: [{ model: Genre }] });

    // ! PASO ESE ARRAY BD A OBJ JS
    bd = JSON.parse(JSON.stringify(bd));

    // ! SI LA BD ESTA VACIA LE RESPONDO CON LA API NADA MAS

    if (bd.length === 0) {
      return arrResult;
    }
    // ! SI LA BD TIENE COSAS RESPONDO CON LAS 2 COSAS JUNTAS
    arrResult = [...arrResult, ...bd];
    return arrResult;
  } catch (error) {
    return error.message;
  }
};

module.exports = getVideogames;
