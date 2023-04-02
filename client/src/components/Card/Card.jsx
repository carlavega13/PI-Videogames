import s from "./Card.module.css"
import { Link } from "react-router-dom";
function Card(props) {
  if(props.inicio==="inicio"){
    return (
      <Link to={`/detail/${props.id}`}>
    <div className={s.principalBox}>
      {/*//? NAME DEL JUEGO */}
   <h1 className={s.name}>{props?.name}</h1>
      {/*//? RAITING DEL JUEGO */}
   <span>{props?.rating}</span>
     {/*//? MAP PARA RENDERIZAR UN P POR GENERO  */}
     <div>
   {
     props?.genres?.map((genre)=>{
       return <p className={s.genres} key={Math.random()}>{genre.name}</p>
      })
    }
   </div>
   <img className={s.imagen} src={props?.img} alt="Not Found"/>
    </div>
    </Link>
  
  );
  }else{
    return (
      <Link to={`/detail/${props.id}`}>
    <div className={s.principalBox}>
      {/*//? NAME DEL JUEGO */}
   <h1 className={s.name}>{props?.name}</h1>
      {/*//? RAITING DEL JUEGO */}
   <span>{props?.rating}</span>
     {/*//? MAP PARA RENDERIZAR UN P POR GENERO  */}
     <div>
   {
     props?.genres?.map((genre)=>{
       return <p className={s.genres} key={Math.random()}>{genre.name}</p>
      })
    }
   </div>
   <img className={s.imagen} src={props?.img} alt="Not Found"/>
    </div>
    </Link>
  
  );
  }


  }
  
  export default Card;
  