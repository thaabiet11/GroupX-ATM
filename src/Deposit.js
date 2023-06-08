import React, { useState } from 'react';
import axios from "axios";

function Deposit() {
  const [Deposit, setDeposit] = useState('');
  const [message, setMessage] = useState('');

  function handleAmountChange(event) {
    setDeposit(event.target.value);
  }

  const handleDeposit = async (e) =>  {
    e.preventDefault();
  const newUser = {Deposit}
  const response = await axios.post('https://localhost:7161/api/ATM/transactions/deposit',newUser)
    if (Deposit > 0) {
      alert(`Successfully deposited R${Deposit}`);
      // Perform the deposit logic and update the balance
    } else {
      alert('Invalid amount');
    }
    setDeposit('');
  }

  return (
    <div className="deposit">
      <h1>Deposit Money</h1>
      <form onSubmit={handleDeposit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="DepositAmount"
          value={Deposit}
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
