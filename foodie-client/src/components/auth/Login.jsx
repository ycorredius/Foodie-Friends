import {useForm} from 'react-hook-form'
import axios from 'axios'

export default function Login () {
  const {register, handleSubmit, formState:{errors}} = useForm()

  //TODO: Create a password recovery or reset system.

  const onSubmit = (data) => {
    axios.post('http://localhost:3000/login', {data}, {withCredentials: true})
    .then((res) => {
      console.log(res)
    })
  };
    return (
      <div>
        {errors.username && <span>Username required</span>}
        {errors.password && <span>Password required</span>}
        <div>
          <h1>Login Here!</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label >
              Username:
            </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              {...register("username", {required: true})}
            />
          </div>
          <br />
          <div>
            <label >
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {required: true})}
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
