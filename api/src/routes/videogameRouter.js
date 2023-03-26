const { Router } = require("express");
const postVideogame = require("./controllers/PostVideogame");

const videogamesRouter = Router();
videogamesRouter.post("/", (req, res) => {
  try {
    res.status(200).json({ msg: postVideogame(req.body) });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});
module.exports = videogamesRouter;
