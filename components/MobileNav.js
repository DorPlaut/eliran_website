import React, { useState } from 'react';
import Navbar from './Navbar';
import { CgMenuRound } from 'react-icons/cg';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <button
        className="btn btn-icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <CgMenuRound />
      </button>
      {isOpen ? <Navbar /> : ''}
    </div>
  );
}

export default MobileNav;
