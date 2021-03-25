import React from 'react';
import {connect} from 'react-redux'
import {authenticate} from '../../actions/user/userActions'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      errors:''
    }
  }

  handleOnChange = (event) => {
    const {name,value} =  event.target
    this.setState({
      [name]: value
    })
  }
  //TODO: Create a way to display errors when loging fail.
  //TODO: Create a password recovery or reset system.
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.authenticate(this.state)
      .then(() => {
        this.props.history.push("/recipes")})
  }

  render(){

    const {email,password} = this.state
    return(
      <div>
        <h1>Login Here!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label >Email: </label>
            <input type="text" 
            value={email}
            name="email"
            placeholder="email"
            onChange={this.handleOnChange}
            />
            
          </div>
          <br/>
          <div>
            <label>Password: </label>
            <input type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleOnChange}/>
          </div>
          <br/>
            <input type="submit"
            value="Login"/>
        </form>
      </div>
    )
  }
}
 export default connect(null,{authenticate})(Login);