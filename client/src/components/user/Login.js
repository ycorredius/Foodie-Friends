import React from 'react';
import {connect} from 'react-redux'
import {authenticate,sessionStatus} from '../../actions/user/userActions'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      errors:[]
    }
  }

  componentDidMount(){
    this.props.sessionStatus()
  }

  handleOnChange = (event) => {
    const {name,value} =  event.target
    this.setState({
      [name]: value
    })
  }
  //TODO: Create a password recovery or reset system.
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.authenticate(this.state)
      .then((result) => {
        if(result.type === 'AUTHENTICATION_FAILURE'){
          this.setState({
            errors: result.errors
          })
        }else{
          this.props.history.push("/recipes")
          window.location.reload()
        }
        }
      )
  }

  render(){
    const {email,password} = this.state
    return (
      <div class="container w-full max-w-xs object-center mt-32 mb-64 pb-64">
        <div class="flex flex-col justify-center items-center">
          <div class="flex font-bold text-blue-dark justify-center">
            <h1>Login Here!</h1>
          </div>
          <div class="flex flex-col item-center">
            <div class="w-96 ">
              <form
                class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ">
                    Email:{" "}
                  </label>
                  <input
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    name="email"
                    placeholder="email"
                    onChange={this.handleOnChange}
                  />
                </div>
                <br />
                <div>
                  <label class="block text-gray-700 text-sm font-bold mb-2 ">
                    Password:{" "}
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.handleOnChange}
                  />
                </div>
                <br />
                <div class="flex items-center justify-center">
                  <button
                    class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 export default connect(null,{authenticate,sessionStatus})(Login);