import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/user/userActions";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: [],
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  //TODO: CREATE AN ERROR MESSAGE FOR INVALID EMAIL. AND PASSWORD CONFIRMATION AND PASSWORD DONT MATCH
  //POTENTIALLY INCORPORATE A HOOK TO HANDLE ERRORS FOR US.
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state).then((result) => {
      if (result.type === "AUTHENTICATION_FAILURE") {
        this.setState({
          errors: result.errors,
        });
      } else {
        this.props.history.push("/recipes");
      }
    });
  };

  render() {
    const { userName, email, password, password_confirmation } = this.state;
    return (
      <div class="container object-center mt-36 mb-32pb-64">
        <h1>New User</h1>
        <form
          class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={this.handleOnSubmit}
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
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              value={userName}
              placeholder="User Name"
              onChange={this.handleOnChange}
            />
          </div>
          <br />
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleOnChange}
            />
          </div>
          <br />
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleOnChange}
            />
          </div>
          <br />
          <div>
            <label>Password Confirmation:</label>
            <input
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              placeholder="Confirm Password"
              onChange={this.handleOnChange}
            />
          </div>
          <br />
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
