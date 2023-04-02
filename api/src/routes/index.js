const { Router } = require("express");
// Importar todos los routers;
const videogameRouter = require("./videogameRouter");

const router = Router();
router.use("/videogames", videogameRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
