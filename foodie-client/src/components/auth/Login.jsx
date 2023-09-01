import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export default function Login () {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const navigate = useNavigate()

  //TODO: Create a password recovery or reset system.

  const onSubmit = (data) => {
   const {email, password} = data
    axios.post('http://localhost:3001/auth/sign_in',{email: email, password: password} )
    .then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        localStorage.setItem('accessToken', res.headers['access-token'])
        navigate('/')
      }else {
        console.log(res.data.errors)
      }
      return null;
    })
    .catch((err) => {
      console.log(err)
    })
  };

    useEffect(() => {
      if (localStorage.getItem('accessToken')) {
        navigate('/')
      }
    })
    
    return (
      <div>
        {errors.email && <span>email required</span>}
        {errors.password && <span>Password required</span>}
        <div>
          <h1>Login Here!</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label >
              Email:
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              {...register("email", {required: true})}
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
