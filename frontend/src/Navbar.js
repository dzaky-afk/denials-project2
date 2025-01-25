import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from'./componen web 2/logo.png';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Toko" className="logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink 
            to="/" 
            className="navbar-link" 
            activeClassName="active"
            exact
          >
            Beranda
          </NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li className="navbar-item">
              <NavLink 
                to="/profil" 
                className="navbar-link" 
                activeClassName="active"
              >
                Profil
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink 
                to="/keranjang" 
                className="navbar-link" 
                activeClassName="active"
              >
                Keranjang
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink 
                to="/pesan" 
                className="navbar-link" 
                activeClassName="active"
              >
                Pesan
              </NavLink>
            </li>
            {/* Show Admin Panel only for admin users */}
            <li className="navbar-item">
              <NavLink 
                to="/admin-panel" 
                className="navbar-link" 
                activeClassName="active"
              >
                Admin Panel
              </NavLink>
            </li>
          </>
        ) : (
          <li className="navbar-item">
            <NavLink 
              to="/login" 
              className="navbar-link" 
              activeClassName="active"
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
