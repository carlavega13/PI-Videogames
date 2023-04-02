import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/actions";
import { useEffect } from "react";
const LandingPage=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        //! pido la informacion cuando levanto el server 
     dispatch( getAllVideogames())
     
    },[dispatch])
return(
    <div>
        <h1> LANDING PAGE</h1>
     <Link to="/videogames">
        <button>GO</button>
        </Link>
    </div>
)
}
export default LandingPage