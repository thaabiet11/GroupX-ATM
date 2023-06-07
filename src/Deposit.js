import React, { useState } from 'react';

function Deposit() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleDeposit(event) {
    event.preventDefault();
    // Perform deposit logic here
    // You can update the balance and display success/failure messages
    if (amount > 0) {
      setMessage(`Successfully deposited $${amount}`);
      // Perform the deposit logic and update the balance
    } else {
      setMessage('Invalid amount');
    }
    setAmount('');
  }

  return (
    <div className="deposit">
      <h1>Deposit Money</h1>
      <form onSubmit={handleDeposit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter the amount to deposit"
          required
        />
        <button type="submit">Deposit</button>
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

export default Deposit;
