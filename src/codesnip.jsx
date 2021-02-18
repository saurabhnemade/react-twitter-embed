import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.css";
class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
    error: false,
    hidden: true,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleError = () => {
    this.setState(() => ({
      error: true,
    }));
  };
  handleView = () => {
    this.setState((prevState) => ({
      hidden: !prevState.hidden,
    }));
  };

  render() {
    const { username, email, password, verifyPassword } = this.state;
    const { handleSignUpSubmit, history } = this.props;
    return (
      <>
        <div className="page">
          <div className="join-us">Join the Clubs</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password === verifyPassword) {
                handleSignUpSubmit(this.state);
                history.push("/");

                this.setState({
                  username: "",
                  email: "",
                  password: "",
                });
              } else {
                this.handleError();
              }
            }}
          >
            <div className="signup-credientials">
              <input
                id="register"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />

              <br />

              <input
                id="register"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />

              <br />

              <input
                id="register"
                type={this.state.hidden ? "password" : "text"}
                name="password"
                placeholder="Password: 6+ Characters"
                value={password}
                onChange={this.handleChange}
              />
              <input
                id="register"
                type={this.state.hidden ? "password" : "text"}
                name="verifyPassword"
                placeholder="Verify Password"
                value={verifyPassword}
                onChange={this.handleChange}
              />

              <br />
              <button onClick={this.handleView} id="eye-container">
                {" "}
                <img
                  src={require("../images/eye1.png")}
                  alt="See Password"
                  id="eye"
                />{" "}
              </button>
            </div>
            {this.state.error && (
              <div className="no-match">Please enter matching passwords</div>
            )}
            <button className="submit">Submit</button>
          </form>
          <p>Already have an Account?</p>
          <Link to="/join/signin" className="link">
            Sign In
          </Link>
        </div>
      </>
    );
  }
}
export default withRouter(SignUp);
