import React, { useState } from 'react';
import axios from 'axios';

function Withdrawal() {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [message, setMessage] = useState('');
  const [balance, setBalance] = useState(0);

  function handleAmountChange(event) {
    setWithdrawalAmount(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (withdrawalAmount === '') {
      alert('Please enter an amount');
      return;
    }

    try {
      const withdrawalData = { withdrawal: parseFloat(withdrawalAmount) };
      await axios.post('https://localhost:7161/api/ATM/transactions/withdrawal', withdrawalData);
      alert(`Withdrawn $${withdrawalAmount}`);
      setWithdrawalAmount('');

      // Fetch the updated balance
      const response = await axios.get('https://localhost:7161/api/ATM/transactions/withdrawal');
      const transactions = response.data;
      if (transactions.length > 0) {
        const latestTransaction = transactions[transactions.length - 1];
        setBalance(latestTransaction.Balance);
      }
    } catch (error) {
      alert('Error occurred during withdrawal');
    }
  };

  return (
    <div className="withdrawal">
      <h1>Withdrawal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={withdrawalAmount}
          onChange={handleAmountChange}
          placeholder="Enter amount to withdraw"
        />
        <button type="submit">Withdraw</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p>Your current balance is: ${balance}</p>
      <ul>
        <li>
          <a href="/Menu">Exit</a>
        </li>
      </ul>
    </div>
  );
}

export default Withdrawal;
