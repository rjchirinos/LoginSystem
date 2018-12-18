import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  render() {
    return (
      <div className="has-background-info" style={{ height: "100vh" }}>
        <div
          className="container"
          style={{
            maxWidth: "400px",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        >
          <div className="box is-clear-fix">
            <h1 className="title">Log in!</h1>
            <div className="field">
              <label>Email</label>
              <div className="control has-icons-left">
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="control has-icons-left">
                <input
                  name="password"
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <Link className="button is-text is-left" to="/signup">
                  Sign Up
                </Link>
              </div>
              <div className="control">
                <button className="button is-primary">
                  <span className="icon">
                    <i className="fas fa-check" />
                  </span>
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
