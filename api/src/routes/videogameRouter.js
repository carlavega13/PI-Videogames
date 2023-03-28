const { Router } = require("express");
//* REQUIRE DE CONTROLLERS
const postVideogame = require("./controllers/PostVideogame");
const getVideogames = require("./controllers/getVideogames");

//?  DECLARO EL ROUTER DE /VIDEOGAMES
const videogamesRouter = Router();
//TODO                   ROUTER /VIDEOGAME !

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

//! RUTA GET /videogames/:idVideogame
videogamesRouter.get("/:idVideogame", (req, res) => {});

module.exports = videogamesRouter;
