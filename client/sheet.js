let gamesCopia = [{ made: true }, {}];
gamesCopia = gamesCopia.filter((juego) => !juego.made);
console.log(gamesCopia);
