import React from "react";
import { connect } from "react-redux";
import { authenticate, sessionStatus } from "../../actions/user/userActions";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
    };
  }

  componentDidMount() {
    this.props.sessionStatus();
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  //TODO: Create a password recovery or reset system.

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.authenticate(this.state).then((result) => {
      if (result.type === "AUTHENTICATION_FAILURE") {
        this.setState({
          errors: result.errors,
        });
      } else {
        this.props.history.push("/recipes");
        window.location.reload();
      }
    });
  };

  render() {
    if (this.props.logged_in) {
      <Redirect to="/user" />;
    }
    const { email, password } = this.state;
    return (
      <div>
          <div >
            <h1>Login Here!</h1>
          </div>
              <form
                onSubmit={this.handleSubmit}
              >
                {this.state.errors ? (
                  this.state.errors.map((error) => (
                    <div>
                      <ul>
                        <li>{error}</li>
                      </ul>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
                <div >
                  <label >
                    Email:
                  </label>
                  <input
                    type="text"
                    value={email}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleOnChange}
                  />
                </div>
                <br />
                <div>
                  <label >
                    Password:{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleOnChange}
                  />
                </div>
                <br />
                <div >
                  <button
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
    );
  }
}
export default connect(null, { authenticate, sessionStatus })(Login);
