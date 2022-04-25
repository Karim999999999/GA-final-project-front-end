import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { getUserById } from '../../api/auth';
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [userId, setUserId] = useState(null);

  useEffect(async () => {
    if (sessionStorage.getItem('token')) {
      const userId = jwtDecode(sessionStorage.getItem('token')).sub;
      setUserId(userId);
    }
  }, [userId]);

  return (
    <nav className="navBar">
      <div className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <div className="button" onClick={handleToggle}>
          {navbarOpen ? (
            <div className="openhamburger">
              <div className="patty"></div>
              <div className="patty"></div>
            </div>
          ) : (
            <div className="closehamburger">
              <div className="patty"></div>
              <div className="patty"></div>
              <div className="patty"></div>
            </div>
          )}
        </div>
        <div className="logo">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
        </div>
        <div className="navcontainer">
          {!sessionStorage.token ? (
            <div>
              <Link className="#" to="/login">
                Login
              </Link>
              <Link className="#" to="/register">
                Register
              </Link>
            </div>
          ) : (
            <Link to={`/user/${userId}`}>Profile</Link>
          )}
          <Link className="#" to="/discover">
            Discover Coops
          </Link>
          <Link className="#" to="/singlecoop">
            Single Coop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
