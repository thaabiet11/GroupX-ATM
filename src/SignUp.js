import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./atm.css";
import Login from "./"

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [id, setID] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {

    /*const response = await axios.post('https://localhost:7020/api/PersonalInfo/testdrive', newUser);
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setDate('');
      setTime('');
      alert('Booking sent Succesfully !!!');
    } catch (error) {
      console.log(error);
    }*/
    event.preventDefault();
    try {
      const newUser={firstName, lastName, age, id, pin};
      const response = await axios.post('https://localhost:7026/api/ATM/signup', newUser);
      setFirstName('');
      setLastName('');
      setAge('');
      setID('');
      setPin('');
      alert('Sign up successful');
      navigate('/Login');
      setErrorMessage('');
    } catch (error) {
      console.log(error);
      alert('Sign up unsuccessful');
    }
  }
  function goBack() {
    navigate({Login});
  }

  return (
    <div className="signup-container">
      <form className="formSignup" onSubmit={handleSubmit}>
        <h1>ATM Sign Up</h1>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        />
        <label>Age:</label>
        <input
          type="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
        <label>ID number:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setID(e.target.value)}
          placeholder="Enter your ID number"
        />
        <label>PIN:</label>
        <input
          type="password"
          id="pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Enter your PIN"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <button type="button" onClick={goBack}>Back</button>
    </div>
  );
}

export default SignUp;