import React, {useState, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from "../context/auth.context";

export const Login = () => {
    const auth = useContext(AuthContext);
    const [form, setForm] = useState({
       email: '', password: ''
    });

    const changeHandler = event => {
      setForm({...form, [event.target.name]: event.target.value})
    };

    const registrationHandler = async () => {
        await axios.post('/api/auth/register', form).then((response)=>{console.log(response)});
    };

    const loginHandler = async () => {
        await axios.post('/api/auth/login', form).then((response)=>{
            auth.login(response.data.token, response.data.userID);
        });
    };

  return(
      <div className="login-page">
          <div className="login-form">
              <h1>Login</h1>
              <div>
                  <input onChange={changeHandler} type="text" placeholder="Email" name="email"/>
                  <input onChange={changeHandler} type="password" name="password"/>
              </div>
              <div className="form-btns">
                <button onClick={loginHandler}>Log-in</button>
                <button onClick={registrationHandler}>Sign-in</button>
              </div>
          </div>
      </div>
  )
};