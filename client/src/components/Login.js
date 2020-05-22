import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const { push } = useHistory()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initFormValues = {
    username: '',
    password: ''
  }

  //State
  const [formValues, setFormValues] = useState(initFormValues)

  //Callbacks
  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    axios.post(`http://localhost:5000/api/login`, formValues)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
      })
      .catch(err => console.log(err))

    setFormValues(initFormValues)
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
        <label>Username:&nbsp;
          <input
            name="username"
            type="text"
            onChange={handleChange}
            value={formValues.username}
          />
        </label>

        <label>Password:
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={formValues.password}
          />
        </label>

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
