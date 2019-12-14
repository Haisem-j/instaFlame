import React from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, loginToken } from "../actions/index";
import { connect } from "react-redux";

class Navbar extends React.Component {
  logoutHandler = async () => {
    let token = {
      token: this.props.setToken
    };
    try {
      this.props.isLoggedIn(false);

      let response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(token),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
      await response.json();
    } catch (err) {
      console.log(err);
    }
  };

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
            <Link to={`/profile/${this.props.getUser}`}>
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
            <div className="navbar-item btn" onClick={this.logoutHandler}>
              <span className="icon is-size-1">
                <ion-icon name="power"></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  isLoggedIn,
  loginToken
})(Navbar);
