import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters"

import {Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAgain } from "../../redux/actions";
import s from "./NavBar.module.css"
function NavBar() {
  const dispatch= useDispatch()
  const handlerGetAgain=()=>{
   dispatch(getAgain())
   
  }
    return (
      <div className={s.fondo}>
       <SearchBar/>
       <Filters/>
       <Link to="/creategame">
      <button className={s.butt}>CREATE GAME</button>
      </Link>
      <button className={s.butt} onClick={handlerGetAgain}>GET ALL GAMES</button>
      </div>
    );
  }
  
  export default NavBar;
  