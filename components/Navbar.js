import React from 'react';

function Navbar() {
  // handle click
  const handleClick = (url) => {
    location.href = url;
  };
  return (
    <ul>
      <li>
        <button
          className="text-btn btn"
          onClick={() => {
            handleClick('./contact');
          }}
        >
          צור קשר
        </button>
      </li>
      <li>
        <button
          className="text-btn btn"
          onClick={() => {
            handleClick('./recommendations');
          }}
        >
          המלצות
        </button>
      </li>
      <li>
        <button
          className="text-btn btn"
          onClick={() => {
            handleClick('./articles');
          }}
        >
          כתבות
        </button>
      </li>
      <li>
        <button
          className="text-btn btn"
          onClick={() => {
            handleClick('./expertise');
          }}
        >
          תחומי התמחות
        </button>
      </li>
      <li>
        <button
          className="text-btn btn"
          onClick={() => {
            handleClick('./about');
          }}
        >
          אודות
        </button>
      </li>
      <li>
        <button
          className="text-btn btn"
          onClick={() => {
            handleClick('./');
          }}
        >
          ראשי
        </button>
      </li>
    </ul>
  );
}

export default Navbar;
