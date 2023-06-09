import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateForm from "./components/CreateForm/CreateForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videogames" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/creategame" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
