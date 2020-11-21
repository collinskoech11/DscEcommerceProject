import React, { Component } from 'react';



export class Login extends Component {
    render() {
        return (
            <form>
            <div className="container">
                <h2>Login Form</h2>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter your email" name="email"></input>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname"></input>
                <label for="psw"><b>Password</b></label>
                <input type="password" id="psw" name="psw" required></input>
                <button type="submit">Login</button>
            </div>
        </form>
        )}
  }

export default Login
