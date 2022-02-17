import React, {useState} from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom';

const Login = ({setLoginUser}) => {
  const [user, setUser] = useState({
    email: "",
    password:""
  })

  const history = useHistory();
  console.log(history, "history")

  const handleChange = (e) =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = (e) =>{
    e.preventDefault()
    console.log(('click'));
    axios.post("http://localhost:3001/login", user)
      .then(
        res =>
         {
           console.log("id", res.data.user._id)
          setLoginUser(res.data.user)
          history.push("/books")

        }
      )
      .catch((err) =>{
        console.log(err);
      })
    }
  return (

    <div>
      <div>
        Login
      </div>

      <form onSubmit={login}>
        <div>
          <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
        </div>
        <div>
          <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"/>
        </div>
        <button type="submit" >Log in
        </button>
      </form>
      <div>
        Don't have an account? Sign up <Link to="/register">here</Link>
      </div>
    </div>
  )
}

export default Login
