import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";
import { useEffect } from "react";
const LandingPage=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
     dispatch( getAllVideogames())
     
    },[])
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