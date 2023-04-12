const { Router } = require("express");
//* REQUIRE DE CONTROLLERS
const postVideogame = require("./controllers/postVideogame");
const getVideogames = require("./controllers/getVideogames");
const getVideogameById = require("./controllers/getVideogameById");
const getVideogameByName = require("./controllers/getVideogameByName");

//?  DECLARO EL ROUTER DE /VIDEOGAMES
const videogamesRouter = Router();
//TODO                   ROUTER /VIDEOGAME !

//! RUTA GET NAME /NAME
videogamesRouter.get("/name", async (req, res) => {
  try {
    const videogames = await getVideogameByName(req.query);
    res.status(200).json({ msg: videogames });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});
//! RUTA DE POST
videogamesRouter.post("/", async (req, res) => {
  try {
    //? NEW GAME ES IGUAL A LA EJECUCION DE NUESTRO CONTROLADOR

    const newVideogame = await postVideogame(req.body);
    res.status(200).json({ msg: newVideogame });
  } catch (error) {
    //? SI CACHEO UN ERROR LO MANDO

    res.status(400).json({ err: error.message });
  }
});

//! RUTA DE GET
videogamesRouter.get("/", async (req, res) => {
  try {
    res.status(200).json({ msg: await getVideogames() });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

//! RUTA GET ID /videogames/:id
videogamesRouter.get("/:id", async (req, res) => {
  try {
    const videogame = await getVideogameById(req.params);
    res.status(200).json({ msg: videogame });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

module.exports = videogamesRouter;
