import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { sessionStatus, logout } from "../actions/user/userActions";
import NavigationBar from "../components/NavigationBar";

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.sessionStatus();
  }

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div>
        {this.props.logged_in ? (
          <div>
            <NavigationBar
              logged_in={this.props.logged_in}
              handleLogout={this.handleLogout}
              userId={this.props.user.id}
            />
          </div>
        ) : (
          <div>
            <NavigationBar logged_in={this.props.logged_in} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    user: userReducer.currentUser,
    logged_in: userReducer.logged_in,
    error: userReducer.errors,
  };
};

export default connect(mapStateToProps, { sessionStatus, logout })(
  UserContainer
);
