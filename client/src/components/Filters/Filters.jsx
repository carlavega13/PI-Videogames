import { useDispatch, useSelector } from "react-redux"
import { filterCards } from "../../redux/actions"
const Filters=()=>{
    const dispatch=useDispatch()
    const {genres}=useSelector(status=>status)
//?    HANDLER SELECT CHANGE
const handlerSelectChange=(event)=>{
    console.log(event.target.name);
    if(event.target.name==="order"){
        // dispatch(orderCards(event.target.value))
    }
    if(event.target.name==="filter"){
        dispatch(filterCards(event.target.value))
    }
    }
    return(
        <div>
            {/* //!  ORDENAMIENTO */}
            <select value="order" >
            <option >Alphabetical Order</option>
             <option value="A-Z">A-Z</option>
             <option value="Z-A">Z-A</option>
            </select>

            <select value="order">
            <option >Rating</option>
                <option value="Upward">Upward</option>
                <option value="Downward">Downward</option>
            </select>

                {/* //! FILTROS */}
            <select onChange={handlerSelectChange} name="filter">
                <option>Genres</option>
                {
                    genres?.map((genre)=>{
                        return <option value={genre.name}>{genre.name}</option>
                    })
                }
            </select>

            <select onChange={handlerSelectChange} name="filter">
                <option>Created/existing</option>
            <option value="Created">Created</option>
                <option value="Existing">Existing</option>

            </select>
        </div>
    )
}
export default Filters