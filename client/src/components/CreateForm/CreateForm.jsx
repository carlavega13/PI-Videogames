import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllVideogames, postVideogame } from "../../redux/actions";
import validator from "./validator"
import {useNavigate,Link} from "react-router-dom"
import s from "./CreateForm.module.css"
const CreateForm=()=>{
    const dispatch=useDispatch()
    //* estado de la info del form
const[formInf,setFormInf]=useState({
    name:"",
    description:"",
    img:"",
    released:"",
    rating: 0,
    genres:[],
    platforms:[]
})
// const[flag,setFlag]=useState(false)
//* estado errors
const [errors,setErrors]=useState({
    name:"",
    description:"",
    img:"",
    released:"",
    rating:"",
    genres:"",
    platforms:""
})

const navigate=useNavigate()

    const {genres,allVideogames}=useSelector((status)=>status)
    //!este array es para guardar las plataformas sin repetir
    let platforms=[]
    //! este foreach quita todas las plataformas y las mete en un array  
    allVideogames?.forEach((juego)=>{

    //     //! este for recorre cada array de plataformas del juego  
     for (let i = 0; i <  juego?.platforms?.length; i++) {

        //!si el juego no existe lo agrego al array plataforms
     if(!(platforms?.includes(juego?.platforms[i]?.platform?.name))){
        platforms.push(juego?.platforms[i]?.platform?.name)
     }
        
     }
})
//! este handler settea lo mismo que contenga el input en el estado correspondiente
const handlerInputChange=(event)=>{

    
    setFormInf({
        ...formInf,
       [event.target.name]:event.target.value
    })

}


//! este handler settea los array de plataforms y genres a los checkbox seleccionados 
const handlerCheckbox=(event)=>{

if(event.target.checked){
setFormInf({
    ...formInf,
[event.target.name]:[...formInf[event.target.name],event.target.value]
})
}else{
    setFormInf({
        ...formInf,
    [event.target.name]:formInf[event.target.name].filter((e)=>e!==event.target.value)
    }) 
}
}

 

//? este handler es del submit
const handlerSubmit=(event)=>{
event.preventDefault()
//!valido la info
setErrors(validator(formInf))
//   setFlag(!flag)
  console.log("errors despues de redefinir",errors);
//! si no tengo ningun error ....
if(!errors.name&&!errors.description&&!errors.img&&!errors.released&&!errors.rating&&!errors.genres&&!errors.platforms){
    //! despacho la action que postea
    dispatch(postVideogame(formInf))

    //! tiro un alert para decir que se posteo el game
    alert("Your game has been posted")
    dispatch(getAllVideogames())
    //! y me muevo al home 
    navigate("/videogames")

}else{


    alert("Data is missing or incorrect")
}
}
useEffect(()=>{
setErrors(validator(formInf))
// console.log("RENDERING FORM",errors);
},[formInf])
// console.log("pasa",errors);
    return(
        <div className={s.fondo}>
            <h1 className={s.titulo}>Create your Game</h1>

            <form  onSubmit={handlerSubmit}>
              <div className={s.inputsBox}>
                {/* //!NAMES */}
                <label className={s.labes} name="name">Name: </label>
                <input className={s.inputs} onChange={handlerInputChange} value={formInf?.name} type="text" name="name" />  
                  {errors.name?<p className={s.error}>{errors.name}</p>:""}
                  {/* //! DESCRIPTION */}
                <label className={s.labes} name="descrition">Description: </label>
                <textarea className={s.inputsDes} onChange={handlerInputChange} value={formInf.description}  name="description" />
                {errors.description?<p className={s.error}>{errors.description}</p>:""}
                    {/* //! IMAGE */}
                <label className={s.labes} name="img">Image: </label>
                <input className={s.inputs} onChange={handlerInputChange} value={formInf.img} type="text" name="img" />
                {errors.img?<p className={s.error}>{errors.img}</p>:""}
                     {/* //! RELEASED */}
                <label className={s.labes} name="released">Released: </label>
                <input className={s.inputs} onChange={handlerInputChange} value={formInf.released} type="date" name="released"/>
                {errors.released?<p className={s.error}>{errors.released}</p>:""}

                     {/* //! RATING */}
                <label className={s.labes} name="rating">Rating: </label>
                <input className={s.inputs} onChange={handlerInputChange} value={formInf.rating} type="number" name="rating"/>
                {errors.rating?<p className={s.error}>{errors.rating}</p>:""}
              </div>
                {/* //!generos/////////// */}
              <div className={s.checkbox}>
                <label className={s.labes} name="genres">Genres:</label>
                <div>
                   {
                    genres?.map(({name,id})=>{
                     return(
                        <label className={s.labelCheck} key={id} name={name}>{name}
                         <input  onClick={handlerCheckbox} name="genres" value={name} type="checkbox"/>
                         </label>
                     )
                    })
                   }
                         {errors.genres?<p className={s.error}>{errors.genres}</p>:""}
                </div>
                    {/* //!  //////platforms////// */}
                <label className={s.labes} name="plataforms">Plataforms: </label>
                <div>
                    {
                        platforms?.map((platform)=>{
                        
                         return( 
                         <label className={s.labelCheck} > {platform}
                            <input  onClick={handlerCheckbox} name="platforms" value={platform} type="checkbox"/>
                         </label>)
                        })
                    }
                          {errors.platforms?<p className={s.error}>{errors.platforms}</p>:""}
                </div>
              </div>
            </form>

            <div className={s.buttBox}>
              <button className={s.butt} onClick={handlerSubmit}>ENVIAR</button>
              <Link to="/videogames">
                <button className={s.butt}>HOME</button>
              </Link>
            </div>
        </div>
    )
}
export default CreateForm