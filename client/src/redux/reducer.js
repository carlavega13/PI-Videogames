import {
  FILTER_CARDS,
  GET_AGAIN,
  GET_ALL_VIDEOGAMES,
  GET_GENRES,
  GET_VIDEOGAMES_BY_NAME,
  POST_VIDEOGAME,
} from "./actionsType";

const initialState = {
  allVideogames: [],
  gamesCopia: [],
  genres: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        gamesCopia: action.payload,
      };

    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        gamesCopia: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case POST_VIDEOGAME:
      return { ...state };

    case GET_AGAIN:
      return {
        ...state,
        gamesCopia: state.allVideogames,
      };
    case FILTER_CARDS:
      if (action.payload === "Created") {
        return {
          ...state,
          gamesCopia: state.gamesCopia.filter((juego) => juego.made === true),
        };
      }
      if (action.payload === "Existing") {
        return {
          ...state,
          gamesCopia: state.gamesCopia.filter((juego) => juego.made === false),
        };
      }
    default:
      return { ...state };
  }
};
export default reducer;
