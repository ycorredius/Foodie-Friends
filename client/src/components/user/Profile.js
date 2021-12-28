import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return <div>{this.props.user.email}</div>;
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    user: userReducer.currentUser,
  };
};
export default connect(mapStateToProps)(Profile);
