const { Router } = require("express");
const postVideogame = require("./controllers/PostVideogame");
//?  DECLARO EL ROUTER DE /VIDEOGAMES
const videogamesRouter = Router();
videogamesRouter.post("/", async (req, res) => {
  try {
    const newVideogame = await postVideogame(req.body);
    res.status(200).json({ msg: newVideogame });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});
module.exports = videogamesRouter;
