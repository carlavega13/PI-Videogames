import axios from "axios";
import { GET_ALL_VIDEOGAMES } from "./actionsType";

// //!  GET ALL VIDEO GAMES
export const getAllVideogames = () => {
  return async (dispatch) => {
    try {
      //? HAGO MI REQUEST A MI BACK QUE TRAE JUEGOS DE LA API Y DE LA DB
      let videogames = await axios
        .get("http://localhost:3001/videogames")
        .then((res) => res.data.msg);

      //?  FILTRO LOS OBJETOS VACIOS PARA QUE NO HAYA OBJETOS VACIOS
      videogames = videogames.filter((vid) => Object.entries(vid).length !== 0);
      //?  RETORNO LA ACTION
      return dispatch({ type: GET_ALL_VIDEOGAMES, payload: videogames });
    } catch (error) {
      return error.message;
    }
  };
};
