import {
  FILTER_CARDS,
  GET_AGAIN,
  GET_ALL_VIDEOGAMES,
  GET_GENRES,
  GET_VIDEOGAMES_BY_NAME,
  ORDER_CARDS,
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
          gamesCopia: state.allVideogames.filter(
            (juego) => juego.made === true
          ),
        };
      }
      if (action.payload === "Existing") {
        return {
          ...state,
          gamesCopia: state.allVideogames.filter(
            (juego) => juego.made === false
          ),
        };
      }
      const juegosFiltrados = [];
      state.allVideogames.forEach((juego) => {
        //! si es de la db GENRES va a empezar con mayuscula
        if (juego.Genres) {
          for (let i = 0; i < juego?.Genres?.length; i++) {
            if (juego.Genres[i].name === action.payload) {
              juegosFiltrados.push(juego);
            }
          }
        }
        for (let i = 0; i < juego?.genres?.length; i++) {
          if (juego.genres[i].name === action.payload) {
            juegosFiltrados.push(juego);
          }
        }
      });

      return {
        ...state,
        gamesCopia: juegosFiltrados,
      };

    case ORDER_CARDS:
      if (action.payload === "A-Z") {
        return {
          ...state,
          gamesCopia: state.gamesCopia.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
          }),
        };
      }
      if (action.payload === "Z-A") {
        return {
          ...state,
          gamesCopia: state.gamesCopia.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
          }),
        };
      }

      if (action.payload === "Upward") {
        return {
          ...state,
          gamesCopia: state.gamesCopia.sort((a, b) => {
            if (a.rating < b.rating) {
              return 1;
            }
            if (a.rating > b.rating) {
              return -1;
            }
          }),
        };
      }
      if (action.payload === "Downward") {
        return {
          ...state,
          gamesCopia: state.gamesCopia.sort((a, b) => {
            if (a.rating < b.rating) {
              return -1;
            }
            if (a.rating > b.rating) {
              return 1;
            }
          }),
        };
      }
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
