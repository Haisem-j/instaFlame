import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Home/Body";
import Profile from "./components/profile/Profile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreatePicture from "./components/CreatePicture";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Modal from "./components/Modal";
import { connect } from "react-redux";

class App extends React.Component {
  loggedTrue() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/register">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Body} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/upload" component={CreatePicture} />
          <SignUp />
        </Switch>
      </div>
    );
  }

  loggedFalse() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/home">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/profile">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/upload">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </div>
    );
  }
  render() {
    return (
      <div>{this.props.loggedIn ? this.loggedTrue() : this.loggedFalse()}</div>  
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, null)(App);
