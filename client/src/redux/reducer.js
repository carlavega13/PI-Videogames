import { GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME } from "./actionsType";

const initialState = {
  allVideogames: [],
  gamesCopia: [],
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
    default:
      return { ...state };
  }
};
export default reducer;
