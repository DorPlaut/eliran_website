import React, { useEffect } from 'react';
import LinesSvg from '@/public/lines.svg';
import Logo from '@/public/logo.svg';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
// states
import { useMobileContext } from '@/context/mobile';

// style
import styles from '@/styles/Header.module.css';

function Header() {
  // states
  const [isMobile, serIsMobile] = useMobileContext();

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
          ''
        ) : (
          <div className={styles.navbar}>
            <Navbar />
          </div>
        )}

        <Logo className={styles.logo} />
        <div className={styles.filler_right}></div>
        <LinesSvg className={`${styles.right} ${styles.svg}`} />
      </div>
    </div>
  );
}

export default Header;
