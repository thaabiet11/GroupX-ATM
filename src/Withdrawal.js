import React, { useState } from 'react';

function Withdrawal() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (amount === '') {
      setMessage('Please enter an amount');
    } else {
      // Perform withdrawal logic here
      setMessage(`Withdrawn $${amount}`);
      setAmount('');
    }
  }

  return (
 
    <div className="withdrawal">
      <h1>Withdrawal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount to withdraw"
        />
        <button type="submit">Withdraw</button>
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

export default Withdrawal;
