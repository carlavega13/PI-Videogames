const { Router } = require("express");
const getGenres = require("./controllers/getGenres");
const genresRouter = Router();
genresRouter.get("/", async (req, res) => {
  try {
    const genres = await getGenres();
    res.status(200).json({ msg: genres });
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
});
module.exports = genresRouter;
