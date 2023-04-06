import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters"

import {Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAgain } from "../../redux/actions";

function NavBar() {
  const dispatch= useDispatch()
  const handlerGetAgain=()=>{
   dispatch(getAgain())
  }
    return (
      <div>
       <SearchBar/>
       <Filters/>
       <Link to="/creategame">
      <button>Create Game</button>
      </Link>
      <button onClick={handlerGetAgain}>GET ALL GAMES</button>
      </div>
    );
  }
  
  export default NavBar;
  