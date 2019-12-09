import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-spaced custom-center"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/">
            <div className="navbar-item">
              <span className="icon is-size-1 right">
                <ion-icon name="flame"></ion-icon>
              </span>
              <h1 className="is-size-4">InstaFlame</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start auto-left">
            <div className="navbar-item">
              <input className="input" type="text" placeholder="Search Users" />
            </div>
          </div>
          <div className="navbar-end">
            <Link to="/profile">
              <div className="navbar-item right">
                <span className="icon is-size-1">
                  <ion-icon name="person"></ion-icon>
                </span>
              </div>
            </Link>
            <Link to="/upload">
            <div className="navbar-item right">
              <span className="icon is-size-1">
                <ion-icon name="cloud-upload"></ion-icon>
              </span>
            </div>
            </Link>
            <a className="navbar-item">
              <span className="icon is-size-1">
                <ion-icon name="power"></ion-icon>
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
