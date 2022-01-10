import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.email}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    user: userReducer.currentUser,
  };
};
export default connect(mapStateToProps)(Profile);
