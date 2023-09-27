
import React, { Component } from 'react';
import Catalog from "./Catalog";
import DogInfo from "./DogInfo";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';

const Navbar = () => {
    return(
        <Router>
        <div className="Navbar">
            <div className='Navbar-header'>
                <ul>
                <li>
                    <Link to="/Welcome"><img src='https://cdn.pixabay.com/photo/2012/04/25/00/43/dog-41431_960_720.png' width={80} height={80} className='nav-logo'/></Link>
                </li>

                </ul>
                <ul>
                <li>
                    <Link to="/Welcome">Home page</Link>
                </li>
                <li>
                    <Link to="/Catalog">Dog Catalog</Link>
                </li>
                <li>
                    <Link to="/DogInfo">Dog Info</Link>
                </li>
                </ul>
            </div>
        <Routes>
                <Route exact path='/Welcome' element={< Welcome />}></Route>
                <Route exact path='/Welcome' element={< Welcome />}></Route>
                <Route exact path='/Catalog' element={< Catalog />}></Route>
                <Route exact path='/DogInfo' element={< DogInfo />}></Route>
        </Routes>
        </div>
    </Router>
    )
}

export default Navbar;