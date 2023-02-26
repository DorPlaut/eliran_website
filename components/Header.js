import React, { useEffect, useState } from 'react';
import LinesSvg from '@/public/lines.svg';
import Logo from '@/public/logo.svg';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import MobileNav from './MobileNav';
import { RxDoubleArrowUp } from 'react-icons/rx';

// states
import { useMobileContext } from '@/context/mobile';

// style
import styles from '@/styles/Header.module.css';

function Header() {
  // states
  const [isMobile, setIsMobile] = useMobileContext();
  const [isVisible, setIsVisible] = useState(false);
  // handle menu position
  function handleScroll() {
    const menu = document.getElementById('mobile-nav');
    const scrollPosition = window.scrollY;
    // Change the position of the menu based on the scroll position
    if (scrollPosition > 80) {
      setIsVisible(true);
      if (menu) {
        menu.style.top = '0rem';
      }
    } else {
      setIsVisible(false);
      if (menu && isMobile == true) {
        menu.style.top = '10.2rem';
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={styles.lines}>
      <div className={styles.container}>
        <div className={styles.filler_left}>
          <div className={styles.social}>
            <SocialLinks />
          </div>
        </div>
        <LinesSvg className={`${styles.left} ${styles.svg}`} />
      </div>
      <div className={styles.container}>
        {isMobile ? (
          <div id="mobile-nav" className={styles.mobile_navbar}>
            <MobileNav />
          </div>
        ) : (
          <div id="nav" className={styles.navbar}>
            <Navbar />
          </div>
        )}

        <Logo className={styles.logo} />
        <div className={styles.filler_right}></div>
        <LinesSvg className={`${styles.right} ${styles.svg}`} />
      </div>
      {isVisible ? (
        <>
          {isMobile ? (
            ''
          ) : (
            <div
              id="scroll-nav"
              className={`${styles.mobile_navbar} ${styles.scroll_navbar}`}
            >
              <MobileNav />
            </div>
          )}
          <a className={styles.backup_btn + ' ' + 'btn btn-icon'} href="#top">
            <RxDoubleArrowUp />
          </a>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default Header;
