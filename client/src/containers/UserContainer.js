import React from 'react';
import { connect } from 'react-redux';
import { sessionStatus,logout } from '../actions/user/userActions'
import NavigationBar from "../components/NavigationBar";
import { Redirect} from "react-router-dom";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.sessionStatus()
    }

    handleLogout = () =>{
       this.props.logout()
    }

    render() {
        if(this.props.logged_in && this.props.user){
        return (
            <div>
                <NavigationBar logged_in={this.props.logged_in} handleLogout={this.handleLogout} userId={this.props.user.id}/>
            </div>
        )} else{
           return (
             <div>
               <NavigationBar
                 logged_in={this.props.logged_in}
               />
             </div>
           ); 
        }
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
