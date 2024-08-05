import NavBar from "./teste";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./sobre";
import Home from "./home";
import Config from "./config";


function App(){
  return (
    <div>
      <NavBar cor = "red" paragrafo = {true}/>
      <NavBar cor = "purple"/>
          <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/sobre" element = {<Sobre/>}/>
            <Route path="/config" element = {<Config/>}/>
          </Routes>
          </BrowserRouter>
          
    </div>
  )
  
};


export default App