import React from "react";
import {Link, NavLink} from 'react-router-dom';
import './App.css';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/"><h3>Home</h3></NavLink>
            <Link to="/about"><h3>About</h3></Link>
            <Link to="/weather"><h3>Weather</h3></Link>
        </div>
    );
};

export default Navigation;
