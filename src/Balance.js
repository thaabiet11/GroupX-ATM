import React, { useState } from 'react';

function Balance() {
  const [balance, setBalance] = useState(5000);

  return (
    <div className="check-balance">
      <h1>Check Balance</h1>
      <p>Your current balance is: R{balance}</p>
      <ul>
      <li>
          <a href="/Menu">Exit</a>
        </li>
        </ul>
    </div>
  );
}

export default Balance;
