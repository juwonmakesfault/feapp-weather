import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div class ="navi">
      <NavLink to="/">Home</NavLink>
      <Link to= "/about">About</Link>
      <Link to= "/weather">Weather</Link>
    </div>
  );
};

export default Navigation;
