import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import s from "./Detail.module.css"
import { Link } from "react-router-dom";

const Detail=()=>{
    //? SACO  EL ID QUE ME MANDO POR PARAMS
const {id}=useParams()
//? SACO LOS VIDEOJUEGOS DEL ESTADO GLOBAL 
const videogames=useSelector(state=>state?.gamesCopia)
//?FILTRO PARA QUE QUEDE UN ARRAY CON UN OBJETO  
let juego=videogames.filter(game=>game.id===Number(id))
//? EN JUEGO TENGO UN SOLO OBJETO
juego=juego.shift()

juego.description=juego?.description?.replaceAll(/<[^>]+>/g, " ")
juego.description=juego?.description?.replaceAll("◆ ", " ")
return(

    <div>
       <Link to="/videogames">
        <button>HOME</button>
        </Link>
{/* //? ID DEL JUEGO  */}
    <span>{juego?.id}</span>
{/* //? NOMBRE DEL JUEGO  */}
    <h1>{juego?.name}</h1>
    {/*//? RAITING DEL JUEGO */}
    <span>{juego?.rating}</span>
    {/*//? MAPEO CADA GENERO Y RENDERIZO UN P POR CADA GENERO */}
    {juego.genres?.map(g=>{
        return <p key={g.genres?.id}>{g.name}</p>
    })}
    {/*//? FOTO DEL JUEGO */}
    <img className={s.detailFoto} src={juego.img} alt=" "/>
        {/*//? MAPEO CADA PLATAFORMA Y RENDERIZO UN P POR CADA GENERO */}
    {
        juego.platforms?.map(g=>{
            return <p key={g.platform?.id} className={s.platafomsP}>{g.platform.name}</p>
        })
    }
    {/*//?  FECHA DE LANZAMIENTO*/}
    <span>{juego?.released}</span>
    {/*//? DESCRIPCION DEL JUEGO */}
    <div>
        {juego?.description}
    </div>
    
    </div>
)
}
export default Detail