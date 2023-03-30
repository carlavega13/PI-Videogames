
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";

import s from"./Home.module.css"

function Home() {
 
    return (
      <div className={s.principalBox}>
        <h1>COMPONENTE HOME</h1>
        <NavBar/>
        <Cards/>
      </div>
    );
  }
  
  export default Home;
  