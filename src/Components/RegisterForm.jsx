import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Assets/RegisterForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register', { username, password });

      console.log(response.status); // Log the status code
      console.log(response.data); // Log the response data

      if (response.status === 200 || response.status === 201) {
        console.log('User created');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
      } else {
        console.error('User creation failed');
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  // const onSubmitForm = (e) => {
  //   e.preventDefault();
  //   var userAccount = {
  //     "userName": userName,
  //     "password": password,
  //     "email": email,
  //     "firstName": firstName,
  //     "lastName": lastName,
  //     "dateOfBirth": dateOfBirth,
  //     "street": street,
  //     "city": city,
  //     "province": province,
  //     "zipcode": zipcode,
  //     "country": country
  //   }
  //   console.log(JSON.stringify(userAccount));
  //   axios.post("http://99.234.6.118:50023/UserAccount", 
  //   JSON.stringify(userAccount), 
  //   {headers: { "Content-Type": "application/json"}})
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err.response.data))
  // }

  return (
    <div className="wrapper2">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        <div className="input-box2">
          <input type="text" placeholder="Username" value={username} onChange={e => {setUsername(e.target.value)}} required />
          <FaUser className="icon"/>
        </div>

        <div className="input-box2">
          <input type="password" placeholder="Password" value={password} onChange={e => {setPassword(e.target.value)}} required />
          <FaLock className="icon"/>
        </div>

        <button type="submit">Register</button>

        <div className="login-link">
          <p>Already have an account? <NavLink to="/login" className="login-click">Sign In</NavLink></p>
        </div>
        
      </form>

      {showPopup && (
        <div className="popup">
          <p>User created successfully!</p>
        </div>
      )}
    </div>
  )
}
