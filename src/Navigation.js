import React from "react";
import {Link, NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div class="navi">
            <NavLink to="/"><a>Home</a></NavLink>
            <Link to="/about"><a>About</a></Link>
            <Link to="/weather"><a>Weather</a></Link>
        </div>
    );
};

export default Navigation;
