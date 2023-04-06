import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideogames,getGenres } from "../../redux/actions";
import { useEffect } from "react";
const LandingPage=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        //! pido la informacion cuando levanto el server 
     dispatch( getAllVideogames())
     dispatch(getGenres())
    },[dispatch])
return(
    <div>
        <h1> LANDING PAGE</h1>
     <Link to="/videogames">
        <button>GO</button>
        </Link>
        <img src="https://prod.assets.earlygamecdn.com/images/Nunu-and-Willump-Bee-Skin.jpg?transform=article3x_webp"></img>
    </div>
)
}
export default LandingPage