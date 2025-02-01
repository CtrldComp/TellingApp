import React from 'react';

const BottomNavigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
      <ul className="flex justify-around">
        <li><a href="/home">Home</a></li>
        <li><a href="/cards">Cards</a></li>
        <li><a href="/banking">Banking</a></li>
        <li><a href="/transfer">Transfer</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
