import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {

  componentDidMount() {
    this.setState({
      username: "",
      password: "",
      email: "",
      isSuccess: false
    });
  }
  usernameHandler = e => {
    this.setState({ username: e.target.value });
  };
  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };
  emailHandler = e => {
    this.setState({ email: e.target.value });
  };

  mySubmitHandler = async event => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    console.log(user);

    try {
      event.target.reset();
      let response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      });

      let result = await response.json();
      console.log(result);
      this.setState({
        isSuccess: true
      });
    } catch (err) {
      console.log(err);
    }
    // this.setState({
    //   email: "",
    //   password: "",
    //   username: "",
    //   isSuccess: true
    // });
  };
  // this.state.isSuccess === false
  render() {
    if (this.state === null) {
      return (
        <div className="pageloader is-active">
          <span className="title">Pageloader</span>
        </div>
      );
    } else {
      console.log(this.state);
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
              {this.state.isSuccess === true ? (
                <div className="button is-success m-bottom">{`Username ${this.state.username} created successfully!!`}</div>
              ) : (
                ""
              )}

              <form onSubmit={this.mySubmitHandler}>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="username"
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
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      onChange={this.emailHandler}
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
                    <button className="button is-info is-small">Sign Up</button>
                  </p>
                  <div className="content flex-center">
                    <p className="is-size-7">
                      Already have an account?{" "}
                      <Link to="/login" className="no-link">
                        Login here.
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default SignUp;
