import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Accessories from "./Accessories";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1><img src="https://asset.vg247.com/gamestop-logo1.jpg/BROK/resize/1920x1920%3E/format
          /jpg/quality/80/gamestop-logo1.jpg" alt="GameStop"></img></h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Video Games</NavLink></li>
            <li><NavLink to="/contact">Video Game Consoles</NavLink></li>
            <li><NavLink to="/accessories">Accessories</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/stuff" element={<Stuff />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/accessories" element={<Accessories/>}/>

            </Routes>  
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;