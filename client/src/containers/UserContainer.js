import React from 'react';
import { connect } from 'react-redux';
import { sessionStatus,logout } from '../actions/user/userActions'
import NavBar from "../components /Navbar"

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.sessionStatus()
    }

    handleLogout = () =>{
       this.props.logout()
    }

    render() {
        return (
            <div>
                <NavBar logged_in={this.props.logged_in} handleLogout={this.handleLogout}/>
            </div>
        )
    }

}

const mapStateToProps = ({ userReducer }) => {
    return {
        user: userReducer.currentUser,
        logged_in: userReducer.logged_in,
        error: userReducer.errors
    }
}

export default connect(mapStateToProps, { sessionStatus,logout})(UserContainer);
