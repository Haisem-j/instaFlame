import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

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

    try {
      let response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      });
      let result = await response.json();
      // console.log(result);
      // event.target.reset();
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
                    type="username"
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
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    onChange={this.emailHandler}
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
                  <button class="button is-info is-small">Sign Up</button>
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

export default SignUp;
