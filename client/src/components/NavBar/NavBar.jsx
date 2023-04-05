import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters"

import {Link } from "react-router-dom";

function NavBar() {
    return (
      <div>
       <SearchBar/>
       <Filters/>
       <Link to="/creategame">
      <button>Create Game</button>
      </Link>
      </div>
    );
  }
  
  export default NavBar;
  