import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { CgMenuRound } from 'react-icons/cg';
// style
import styles from '@/styles/Header.module.css';

function MobileNav() {
  // handle menu position
  function handleScroll() {
    const menu = document.getElementById('mobile-nav');
    console.log(menu);
    const scrollPosition = window.scrollY;

    // Change the position of the menu based on the scroll position
    if (scrollPosition > 80) {
      menu.style.position = 'fixed';
      menu.style.top = '0.2rem';
    } else {
      menu.style.position = 'fixed';
      menu.style.top = '10.2rem';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
