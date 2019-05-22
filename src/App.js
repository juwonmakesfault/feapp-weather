import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './RouterApp';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RouterApp />
        <header className="App-header">
        </header>
    </BrowserRouter>
  );
}

export default App;
