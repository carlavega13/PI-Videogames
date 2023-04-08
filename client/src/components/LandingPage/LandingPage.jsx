import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideogames,getGenres } from "../../redux/actions";
import { useEffect } from "react";
import s from "./LandingPage.module.css"
import { BsGithub } from 'react-icons/bs';
const LandingPage=()=>{
    const dispatch=useDispatch()
console.log("haceindo get desde el landing");

    dispatch(getGenres())
    useEffect(()=>{
        //! pido la informacion cuando levanto el server 
    },[])
return(
    <div className={s.fondo}>
        <span className={s.texto}>Videogames PI </span >
     <Link to="/videogames">
        <button className={s.butt}>VISIT GAMES</button>
        </Link>
        <Link to="https://github.com/carlavega13">
<h1 className={s.texto}>Created by Charly    <BsGithub/></h1>
</Link>
    </div>
)
}
export default LandingPage