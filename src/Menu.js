import React from 'react';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='welcometext'>Welcome to ATMX</h1>
      <h1>Main Menu</h1>
      <ul>
        <li>
          <a href="/Balance">Check Balance</a>
        </li>
        <li>
          <a href="/Withdrawal">Withdraw Money</a>
        </li>
        <li>
          <a href="/Deposit">Deposit Money</a>
        </li>
        <li>
          <a href="/Transfer">Transfer Funds</a>
        </li>
        <li>
          <a href="/ChangePin">Change PIN</a>
        </li>
        <li>
          <a href="/">Exit</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
