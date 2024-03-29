import React from 'react'
import { NavLink } from 'react-router-dom'
import './Assets/LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon"/>
        </div>

        <div className="input-box">
          <input type="text" placeholder="Password" required />
          <FaLock className="icon"/>
        </div>

        <div className="remember-me">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit"><NavLink to="/home" className="login-link">Login</NavLink></button>

        <div className="register-link">
          <p>Don't have an account? <NavLink to="/register" className="register-click">Register</NavLink></p>
        </div>
        
      </form>
    </div>
  )
}
