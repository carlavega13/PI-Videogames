import axios from "axios";
import host from "../localhost";

import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_GENRES,
  POST_VIDEOGAME,
  GET_AGAIN,
  FILTER_CARDS,
  ORDER_CARDS,
  DELETE_ALL,
} from "./actionsType";

// //!  GET ALL VIDEO GAMES
export const getAllVideogames = () => {
  return async (dispatch) => {
    try {
      //? HAGO MI REQUEST A MI BACK QUE TRAE JUEGOS DE LA API Y DE LA DB
      let videogames = await axios
        .get(`${host}/videogames`)
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

//!     GET VIDEOGAMES BY NAME
export const getVideogamesByName = (name) => {
  return async (dispatch) => {
    try {
      const videogamesByName = await axios
        .get(`${host}/videogames/name?name=${name}`)
        .then((res) => res.data.msg);

      return dispatch({
        type: GET_VIDEOGAMES_BY_NAME,
        payload: videogamesByName,
      });
    } catch (error) {
      return error.message;
    }
  };
};

//! GET GENRES
export const getGenres = () => {
  return async (dispatch) => {
    try {
      const genres = await axios
        .get(`${host}/genres`)
        .then((res) => res.data.msg);

      return dispatch({ type: GET_GENRES, payload: genres });
    } catch (error) {
      return error.message;
    }
  };
};

//! POST VIDEOGAME
export const postVideogame = (videogame) => {
  return async (dispatch) => {
    try {
      await axios.post(`${host}/videogames/`, videogame);

      return dispatch({ type: POST_VIDEOGAME });
    } catch (error) {
      return error.message;
    }
  };
};

//! GET AGAIN
export const getAgain = () => {
  return { type: GET_AGAIN };
};

//! FILTER CARD
export const filterCards = (element) => {
  return { type: FILTER_CARDS, payload: element };
};
export const deleteAll = () => {
  return { type: DELETE_ALL };
};

//! ORDER CARD
export const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};
