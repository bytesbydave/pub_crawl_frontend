import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';

const Header = () => {
  return (
    <div className="ui inverted menu">
      <div className="ui container">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/crawls/" className="item">
          All Crawls
        </Link>
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
