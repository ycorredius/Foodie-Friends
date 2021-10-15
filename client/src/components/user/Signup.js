import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/user/userActions'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            email: '',
            password: '',
            password_confirmation: '',
            errors: []
         } 
    }

    handleOnChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    //TODO: CREATE AN ERROR MESSAGE FOR INVALID EMAIL. AND PASSWORD CONFIRMATION AND PASSWORD DONT MATCH
    //POTENTIALLY INCORPORATE A HOOK TO HANDLE ERRORS FOR US. 
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state)
            .then((result) => {
                  if (result.type === "AUTHENTICATION_FAILURE") {
                    this.setState({
                      errors: result.errors,
                    });
                  } else {
                    this.props.history.push("/recipes");
                  }
            })
    }

    render() {
        const { userName, email, password, password_confirmation } = this.state
        return (
          <div class="container object-center mt-36 mb-32pb-64">
            <div class="flex flex-col justify-center items-center">
              <div class="flex font-bold text-blue-dark justify-center">
                <h1>Signup Here!</h1>
              </div>
              <div class="flex flex-col item-center">
                <div class="w-96 ">
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
                      <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        User Name
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <br />
                    <div>
                      <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        Email
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <br />
                    <div>
                      <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        Password
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <br />
                    <div>
                      <label class="block text-gray-700 text-sm font-bold mb-2 ">
                        Password Confirmation:
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
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

export default connect(null, { signup })(Signup)
