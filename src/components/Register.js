import React, {useState} from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email:"",
    password:""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const history = useHistory();

  const register = (e) =>{
    e.preventDefault();
    const { first_name, last_name, username, email, password } = user
    if ( first_name && last_name && username && email && password ){
      axios.post("http://localhost:3001/register", user)
      .then(
        res => {
          console.log(user);
          setUser({
            ...user
          })
        history.push("/")
      }
      ).catch ((err) => {console.log(err);
      alert("invalid input", err)})
    }
  }

  return (
    <div>
      <div>
        Create a new account
      </div>
      <div>
        Already have an account? <Link to="/login"> Log in </Link>
      </div>

      <form onSubmit={register} >
        <div>
          <input type="text" name="first_name" value={user.first_name} onChange={handleChange} placeholder="First Name"/>
        </div>
        <div>
          <input type="text" name="last_name" value={user.last_name} onChange={handleChange} placeholder="Last Name"/>
        </div>
        <div>
          <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username"/>
        </div>
        <div>
          <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
        </div>
        <div>
          <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"/>
        </div>
        <button type="submit"> Register
        </button>
      </form>
    </div>
  )
}

export default Register
