import React, { useState } from 'react';

function TransferFunds() {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  function handleAccountNumberChange(event) {
    setAccountNumber(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Perform transfer funds logic here
    // Replace the code below with your actual implementation
    if (accountNumber && amount) {
      setMessage(`Transferred $${amount} to account ${accountNumber}`);
      setAccountNumber('');
      setAmount('');
    } else {
      setMessage('Please enter both account number and amount');
    }
  }

  return (
    <div className="transfer-funds">
      <h1>Transfer Funds</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={handleAccountNumberChange}
          placeholder="Enter account number"
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
        <button type="submit">Transfer</button>
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

export default TransferFunds;
