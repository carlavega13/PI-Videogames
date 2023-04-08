import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postVideogame } from "../../redux/actions";
import validator from "./validator"
import {useNavigate,Link} from "react-router-dom"

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
//* estado errors
let errors={
    name:"",
    description:"",
    img:"",
    released:"",
    rating:"",
    genres:"",
    platforms:""
}
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
 errors =validator(formInf,errors)
//! si no tengo ningun error ....
if(!errors.name&&!errors.description&&!errors.img&&!errors.released&&!errors.rating&&!errors.genres&&!errors.platforms){
    //! despacho la action que postea
    dispatch(postVideogame(formInf))

    //! tiro un alert para decir que se posteo el game
    alert("Your game has been posted")
    //! y me muevo al home 
    navigate("/videogames")

}else{
  
    alert("Data is missing or incorrect")
}
}

    return(
        <div>
            <form onSubmit={handlerSubmit}>
                {/* //!NAMES */}
            <label name="name">Name: </label>
            <input onChange={handlerInputChange} value={formInf?.name} type="text" name="name" />  

              {/* //! DESCRIPTION */}
            <label name="descrition">Description: </label>
            <input onChange={handlerInputChange} value={formInf.description} type="text" name="description" />

                {/* //! IMAGE */}
            <label name="img">Image: </label>
            <input onChange={handlerInputChange} value={formInf.img} type="text" name="img" />

                 {/* //! RELEASED */}
            <label name="released">Released: </label>
            <input onChange={handlerInputChange} value={formInf.released} type="date" name="released"/>


                 {/* //! RATING */}
            <label name="rating">Rating: </label>
            <input onChange={handlerInputChange} value={formInf.rating} type="number" name="rating"/>

{/* //!generos/////////// */}
 <label name="genres">Genres:</label>
            <div>
               {
                genres?.map(({name,id})=>{
                 return(
                    <label key={id} name={name}>{name}
                     <input onClick={handlerCheckbox} name="genres" value={name} type="checkbox"/>
                     </label>
                 )
                })
               }
            </div>
{/* //! ////////// */}

{/* //!  //////platforms////// */}
<label name="plataforms">Plataforms: </label>
<div>
    {
        platforms?.map((platform)=>{

         return( 
         <label> {platform}
            <input onClick={handlerCheckbox} name="platforms" value={platform} type="checkbox"/>
         </label>)
        })
    }
</div>

<button type="submit">Enviar</button>

</form>
<Link to="/videogames">
        <button>HOME</button>
        </Link>

        </div>
    )
}
export default CreateForm