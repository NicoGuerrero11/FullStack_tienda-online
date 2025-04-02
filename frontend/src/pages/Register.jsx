import React from 'react'
import { useState } from 'react'
import { register } from '../services/auth.service';


function Register() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ","
  })

  const handleChange = (e) => {
    const {value, name} = e.target;

    setFormData((prevData) => {
      return{
        ...prevData,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await register(
          formData.firstName,
          formData.lastName,
          formData.email,
          formData.password
        );
        console.log(response);
      } catch(error){
        console.log(error);
      }
  }

  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="firstName">First name</label>
          <input 
            type="text" 
            id='firstName'
            name='firstName' 
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Enter first name' 
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input 
            type="text" 
            id='lastName' 
            name='lastName' 
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Enter last Name' 
          />
        </div>
        <div>
          <label htmlFor="email">Email Adresse</label>
          <input 
            type="email"  
            id="email" 
            name='email' 
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter email' 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password"  
            id="password" 
            name="password" 
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter password"
          />
        </div>
        <button onClick={handleSubmit} type='submit'>Register </button>
      </form>
    </div>
  )
}

export default Register