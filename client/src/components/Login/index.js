import React from "react";
import { connect } from "react-redux";
import { isLoggedIn } from "../../actions";
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

      console.log(result.islogged);
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
              <span class="icon is-size-1" style={{ marginTop: "5px" }}>
                <ion-icon name="flame"></ion-icon>
              </span>

              <h1 className="is-size-4">InstaFlame</h1>
            </div>

            <form onSubmit={this.mySubmitHandler}>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="user"
                    name="username"
                    placeholder="Username"
                    onChange={this.usernameHandler}
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.passwordHandler}
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control custom-login-button">
                  <button class="button is-success is-small">Login</button>
                  <Link to="/register">
                    <button class="button is-info is-small">Sign Up</button>
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
  // console.log(state);
  return state;
};

export default connect(mapStateToProps, {
  isLoggedIn
})(Login);
