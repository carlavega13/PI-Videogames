//*  REQUIERO EL MODELO VIDEOGAME
const { Videogame, Genre } = require("../../db");

//! CONTROLADOR
const postVideogame = async (videogame) => {
  //? DESESTRUCTURO TODAS LAS PROPIEDSADES DE REQ.BODY (VIENE POR PARAMETRO)
  let { name, description, platforms, img, released, rating, genres } =
    videogame;

  rating = rating.toString();
  //? VALIDO QUE ME HAYAN MANDADO TODOS LOS CAMPOS
  if (!name || !description || !platforms || !img || !released || !rating) {
    throw new Error("required data is missing!");
  }
  //? VALIDO QUE EL NOMBRE NO TENGA MAS DE 60 CARACTERES
  if (name.length > 60) {
    throw new Error("Name must be under 60 characters");
  }
  //? VALIDO QUE LAS PLATAFORMAS NO TENGAN MAS DE 255 CARACTERES
  if (platforms.length > 255 || typeof platforms !== "object") {
    throw new Error(
      "Plataforms must be under 255 characters and must be an array"
    );
  }
  //? VALIDO QUE FECHA DE LANZAMIENTO NO SUPERE LOS 20 CARACTERES
  if (released.length > 20) {
    throw new Error("Released must be under 20 characters");
  }
  //? VALIDO QUE EL RATING SEA UN NUMERO
  // if (typeof rating !== "number") {
  //   throw new Error("Rating must be a number");
  // }

  //! SI LLEGO ACA ES QUE TODOS LOS DATOS ESTAN VALIDADOS
  const newVideogame = await Videogame.create({
    name: name,
    description,
    platforms,
    img,
    released,
    rating: rating.toString(),
    made: true,
  });

  //? ACA BUSCO LOS GENEROS DE LA DB QUE SEAN IGUALES A LOS GENEROS QUE ME PASARON POR REQ.BODY
  const found = await Genre.findAll({ where: { name: genres } });
  //? AGREGO EL NUEVO VIDEOJUEGO AL LOS GENRES ENCONTRADOS
  await newVideogame.addGenre(found);
  //? RETORNO EL NUEVO VIDEOJUEGO

  return newVideogame;
};

module.exports = postVideogame;
