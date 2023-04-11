import s from "./Loader.module.css"
const Loader=()=>{
return(
    <div className={s.fondo}>
     <img className={s.img} src="https://media.tenor.com/2NUKJBD2c8IAAAAd/anime-ps4.gif" alt="NOT FOUND"/>
     <div className={s.loadingBox}>
          <h1 className={s.texto}>LOADING</h1>
          <h1 className={s.primero}>.</h1>
          <h1 className={s.segundo}> .</h1>
          <h1 className={s.tercero}> .</h1>
     </div>
   
    </div>
)
}
export default Loader