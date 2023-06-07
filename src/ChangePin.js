import React, { useState } from 'react';

function ChangePin() {
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

  function handleSubmit(event) {
    event.preventDefault();

    // Perform change PIN logic here
    // Replace the code below with your actual implementation
    if (currentPin && newPin && confirmPin) {
      if (newPin === confirmPin) {
        setMessage('PIN changed successfully');
        setCurrentPin('');
        setNewPin('');
        setConfirmPin('');
      } else {
        setMessage('New PIN and Confirm PIN do not match');
      }
    } else {
      setMessage('Please enter all fields');
    }
  }

  return (
    <div className="change-pin">
      <h1>Change PIN</h1>
      <form onSubmit={handleSubmit}>
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
      <ul>
      <li>
          <a href="/Menu">Exit</a>
        </li>
        </ul>
    </div>
  );
}

export default ChangePin;
