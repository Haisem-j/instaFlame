import React from "react";
import { connect } from "react-redux";
import { isLoggedIn, loginToken, setUser} from "../../actions";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.setState({
      password: "",
      username: ""
    });
  }

  usernameHandler = e => {
    this.setState({ username: e.target.value });
  };
  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };

  mySubmitHandler = async event => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    try {
      let response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      });
      let result = await response.json();
      this.props.setUser(user.username);
      this.props.loginToken(result.token)
      this.props.isLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <section className="hero has-background-light is-fullheight ">
        <div className="custom-login">
          <div className="box">
            <div className="custom-flex">
              <span className="icon is-size-1" style={{ marginTop: "5px" }}>
                <ion-icon name="flame"></ion-icon>
              </span>

              <h1 className="is-size-4">InstaFlame</h1>
            </div>

            <form onSubmit={this.mySubmitHandler}>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="user"
                    name="username"
                    placeholder="Username"
                    onChange={this.usernameHandler}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.passwordHandler}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control custom-login-button">
                  <button className="button is-success is-small">Login</button>
                  <Link to="/register">
                    <button className="button is-info is-small">Sign Up</button>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  isLoggedIn,
  loginToken,
  setUser
})(Login);
