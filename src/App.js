import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './RouterApp';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
          <h1>Weather Crawler</h1>
      </header>
      <RouterApp />
      <header className="App-footer"></header>
    </BrowserRouter>
  );
}

export default App;
