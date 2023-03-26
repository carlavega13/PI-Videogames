//*  REQUIERO EL MODELO VIDEOGAME
const { Videogame } = require("../../db");

//! CONTROLADOR
const postVideogame = (videogame) => {
  //? DESESTRUCTURO TODAS LAS PROPIEDSADES DE REQ.BODY (VIENE POR PARAMETRO)
  const { name, description, plataforms, image, released, rating } = videogame;
  //? VALIDO QUE ME HAYAN MANDADO TODOS LOS CAMPOS
  if (!name || !description || !plataforms || !image || !released || !rating) {
    throw new Error("required data is missing!");
  }
  //? VALIDO QUE EL NOMBRE NO TENGA MAS DE 60 CARACTERES
  if (name.length > 60) {
    throw new Error("Name must be under 60 characters");
  }
  //? VALIDO QUE LAS PLATAFORMAS NO TENGAN MAS DE 255 CARACTERES
  if (plataforms.length > 255) {
    throw new Error("Plataforms must be under 255 characters");
  }
  //? VALIDO QUE FECHA DE LANZAMIENTO NO SUPERE LOS 20 CARACTERES
  if (released.length > 20) {
    throw new Error("Released must be under 20 characters");
  }
  //? VALIDO QUE EL RATING SEA UN NUMERO
  if (typeof rating !== "number") {
    throw new Error("Rating must be a number");
  }
};

module.exports = postVideogame;
