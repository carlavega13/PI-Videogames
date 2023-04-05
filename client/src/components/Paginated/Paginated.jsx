const Paginates=(props)=>{
    //! numbers va a guardar los numeros que van a ser renderizados en los botones de paginado
    let numbers=[]
    //! aux va a ir cambiando para pushearse a numbers
let aux=1
//!la copia de la cantidad de juegos que tengo
let cantidad=props?.gamesCopia

//!  un while que resta 15 (cantidad de paginas), y conrta cuando cantidad llegue a 0 , pushea a numbers a aux y lo incrementa  
while(cantidad>0){
cantidad=cantidad-15

if(cantidad>0){
    
    numbers.push(aux)
    aux++
    
}
}
 //! este handlres cuando apretemos cualquier numero setea el page en el numero que apretemos 
const handlerPaginater=(numero)=>{
props.setPage(numero)
}
//! este handler maneja la flechita de adelante 
const handlerAdelante=()=>{
    if(props.page<aux-1){
         props.setPage(props.page+1)
    }}

    //! este handler maneja la flechita de atras 
    const handlerAtras=()=>{
        if(props.page>1){
             props.setPage(props.page-1)
        }

}
//! solo se renderiza si tengo mas de 15 juegos
if(numbers.length!==0){
  return(
    <div>
         <button onClick={handlerAtras}>{"<"}</button>
        {
            numbers?.map(numero=>{
                return <button onClick={()=>handlerPaginater(numero)} key={numero}>{numero}</button>
            })
        }
        <button onClick={handlerAdelante}>{">"}</button>
    </div>
)
}
return (
    <div></div>
)

}
export default Paginates