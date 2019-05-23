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