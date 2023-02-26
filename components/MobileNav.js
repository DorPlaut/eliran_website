import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { CgMenuRound } from 'react-icons/cg';
// style
import styles from '@/styles/Header.module.css';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="" className={isOpen ? styles.nav_container : ''}>
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
