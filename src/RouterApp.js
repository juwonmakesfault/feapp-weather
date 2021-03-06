import React from 'react';
import  { Route } from 'react-router-dom';
import Weather from './Component/Weather';
import About from './Component/About';
import Header from './Header';


const RouterApp = () => {
  const city = "Daejeon";

  return (
    <div className = "App">
      <Header city = {city}/>
      <Route path="/about" component={About}/>
      <Route path="/weather" component={Weather}/>
    </div>
  );
};

export default RouterApp;
