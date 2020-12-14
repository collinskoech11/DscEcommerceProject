import React, { Component } from 'react'
import './Login.css';

export class SignUp extends Component {
    render() {
        return (
           <form>
           <div className="container">
           <h2>SignUp Form</h2>
           <label for="firstname"><b>First Name:</b></label>
           <input type="text" placeholder="First Name" name="firstname"/>
           <label for="secondname"><b>Middle Name:</b></label>
           <input type="text" placeholder="Middle Name" name="middlename"/>
           <label for="lastname"><b>Last Name:</b></label>
           <input type="text" placeholder="Last Name" name="lastname"/>
           <label for="email"><b>Email</b></label>
           <input type="text" placeholder="Enter your email" name="email"></input>
           <label for="psw">Password:</label>
           <input type="password" id="psw" name="psw" required/>
           <button type="submit" ><a href="/Login">SignUp</a></button>
           </div>
           </form>
        )
    }
}

export default SignUp
