import React from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';

const Header = props => {
  const { city } = props;
  return (
    <div>
      <Navigation />

    </div>
  );
}
export default Header;

/*
import React from 'react';
import logo from './logo.svg';

const Header = props => {
  const { city } = props;
  return (
    <header className = "App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>CITY : {city}</div>
    </header>
  );
}
export default Header;

/*import React from 'react';
import logo from './logo.svg';

function Header(){
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
    </header>
  )
}
export default Header;
*/
