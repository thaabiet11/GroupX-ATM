import './css/pin.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChangePin() {
  const navigate = useNavigate();

  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [message, setMessage] = useState('');

  function handleCurrentPinChange(event) {
    setCurrentPin(event.target.value);
  }

  function handleNewPinChange(event) {
    setNewPin(event.target.value);
  }

  function handleConfirmPinChange(event) {
    setConfirmPin(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (currentPin && newPin && confirmPin) {
      if (newPin === confirmPin) {
        try {
          const response = await fetch('https://localhost:7161/api/Signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              currentPin,
              newPin,
              confirmPin
            })
          });

          const data = await response.json();

          if (response.ok) {
            setMessage(data.message);
            setCurrentPin('');
            setNewPin('');
            setConfirmPin('');
          } else {
            setMessage(data.error);
          }
        } catch (error) {
          setMessage('An error occurred. Please try again.');
        }
      } else {
        setMessage('New PIN and Confirm PIN do not match');
      }
    } else {
      setMessage('Please enter all fields');
    }
  }

  return (
    <div className="changepin-container">
      <h1>Change PIN</h1>
      <form className="form-pin" onSubmit={handleSubmit}>
        <label htmlFor="currentPin">Current PIN:</label>
        <input
          type="password"
          id="currentPin"
          value={currentPin}
          onChange={handleCurrentPinChange}
          placeholder="Enter current PIN"
        />
        <label htmlFor="newPin">New PIN:</label>
        <input
          type="password"
          id="newPin"
          value={newPin}
          onChange={handleNewPinChange}
          placeholder="Enter new PIN"
        />
        <label htmlFor="confirmPin">Confirm PIN:</label>
        <input
          type="password"
          id="confirmPin"
          value={confirmPin}
          onChange={handleConfirmPinChange}
          placeholder="Confirm new PIN"
        />
        <button type="submit">Change PIN</button>
      </form>

      {message && <p className="message">{message}</p>}

      <button className="return" onClick={() => navigate('/menu')}>
        Exit
      </button>
    </div>
  );
}

export default ChangePin;

