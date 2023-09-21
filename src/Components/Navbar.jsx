
import React, { Component } from 'react';
import Catalog from "./Catalog";
import DogInfo from "./DogInfo";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';



const Navbar = () => {
    return(
        <Router>
        <div className="Navbar">
            <ul className="Navbar-header">
            <li className='focus'>
                <Link to="/Welcome">Home page</Link>
            </li>
            <li className='focus'>
                <Link to="/Catalog">Dog Catalog</Link>
            </li>
            <li className='focus'>
                <Link to="/DogInfo">DogInfo</Link>
            </li>
            </ul>
        <Routes>
                <Route exact path='/Welcome' element={< Welcome />}></Route>
                <Route exact path='/Catalog' element={< Catalog />}></Route>
                <Route exact path='/DogInfo' element={< DogInfo />}></Route>
        </Routes>
        </div>
    </Router>
    )
}

export default Navbar;