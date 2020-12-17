import React, { Component } from 'react';
import './Login.css';


export class Login extends Component {
    render() {
        return (
            <form>
            <div className="container">
                <h2>Login</h2>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname"></input>
                <label for="psw"><b>Password</b></label>
                <input type="password" id="psw" name="psw" required></input>
                <button type="submit"><a href="/">Login</a></button>

                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="reset.html">password?</a> </span>

                <span class="account">Don't have an account? <a href="/SignUp">Sign Up</a></span>
            </div>
        </form>
        )}
  }

export default Login
