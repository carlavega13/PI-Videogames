import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";

const SearchBar=()=>{
    //! este name capturara lo que el input para mandarlo a la action y de ahi al back para buscar por numero 
    const [name,setName]=useState("")
    const dispatch=useDispatch()

    //! esta funcion me permite no usar el boton buscar y usar el enter 
    const enter=(event)=>{
        if(event.keyCode===13){
dispatch(getVideogamesByName(name))
     setName("")
  }
     }

     const handlerButton=()=>{
        dispatch(getVideogamesByName(name))
        setName("")
     }

    return(

        <div>
            <input type="text" value={name} onKeyUp={enter} onChange={(e)=>setName(e.target.value)}/>
            
            <button onClick={handlerButton}>Buscar</button>
       
         </div>
    )
}
export default SearchBar