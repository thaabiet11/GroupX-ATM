import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./atm.css";
import axios from 'axios';

function Login() {
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  function handlePinChange(event) {
    setPin(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {pin};
    try{
        const response = await axios.get('');
        setPin('');
    }catch (error){
        console.log(error);
    }
    e.preventDefault();
    if (pin === '1234') {
      console.log('Login successful');
      navigate('/Menu'); 
    } else {
      setErrorMessage('Invalid PIN');
      setPin('');
    }
    
  }
  function handleSignUp() {
    navigate('/SignUp');
  }

  return (
    <div className="login-container">
      <form className="formLogin" onSubmit={handleSubmit}>
        <h1>ATM Login</h1>
        <label htmlFor="pin">PIN:</label>
        <input
          type="password"
          id="pin"
          value={pin}
          onChange={handlePinChange}
          placeholder="Enter your PIN"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Log In</button>
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
