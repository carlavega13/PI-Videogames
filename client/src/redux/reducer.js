import { GET_ALL_VIDEOGAMES } from "./actionsType";

const initialState = { allVideogames: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
      };

    default:
      break;
  }
};
export default reducer;
