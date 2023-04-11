import s from "./Card.module.css"
import { Link } from "react-router-dom";

function Card(props) {
  //! este array va a guardar cuantas estrellas renderizar 
 let estrellitas=[]
 for (let i = 1; i <=Math.floor(props?.rating) ; i++) {
  //!agrego cada estrella al array
estrellitas.push(i)
  
 }
    return (
      <Link to={`/detail/${props.id}`}>
        <div className={s.principalBox}>
          {/*//? NAME DEL JUEGO */}
          <h1 className={s.name}>{props?.name}</h1>
             {/*//? RAITING DEL JUEGO */}
          <span>{props?.rating}</span>
          <div className={s.conteinerEstrellita}>
            {
           //!mapeo el array de estrellitas y renderizo 1 por cada elemento
           estrellitas.map(()=><span className={estrellitas.length>3? s.estrellas:s.estrellasRoja}>★</span>)
          }  
           </div>
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


  
  export default Card;
  