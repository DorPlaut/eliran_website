import React, { useEffect, useState } from 'react';
import LinesSvg from '@/public/lines.svg';
import Logo from '@/public/logo.svg';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import MobileNav from './MobileNav';
import { RxDoubleArrowUp } from 'react-icons/rx';
import Link from 'next/link';
import LangNav from './LangNav';

// states
import { useMobileContext } from '@/context/mobile';
import { usePostsContext } from '@/context/posts';

// style
import styles from '@/styles/Header.module.css';

// localization
import { useTranslation } from 'next-i18next';

function Header({ locales }) {
  // localization
  const { t } = useTranslation('home');
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
      if (menu && isMobile === true) {
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
    <>
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
          {/* Render the mobile navigation menu or the regular navigation menu based on the screen size */}
          {isMobile ? (
            <div id="mobile-nav" className={styles.mobile_navbar}>
              <MobileNav locales={locales} />
            </div>
          ) : (
            <div id="nav" className={styles.navbar}>
              <Navbar />
            </div>
          )}

          <Link href="/" className={styles.link}>
            <Logo className={styles.logo} alt={t('logo')} />
          </Link>

          <div className={styles.filler_right}></div>
          <LinesSvg className={`${styles.right} ${styles.svg}`} />
        </div>

        {/* Render a backup button when the user scrolls past a certain point on the page */}
        {isVisible ? (
          <>
            {isMobile ? (
              ''
            ) : (
              <div
                id="scroll-nav"
                className={`${styles.mobile_navbar} ${styles.scroll_navbar}`}
              >
                <MobileNav locales={locales} />
              </div>
            )}
            <a
              className={styles.backup_btn + ' ' + 'btn btn-icon'}
              href="#top"
              aria-label={t('back to top')}
            >
              <RxDoubleArrowUp />
            </a>
          </>
        ) : (
          ''
        )}
      </div>

      {/* Render a language switcher */}
      <div className={styles.lang}>
        <LangNav locales={locales} />
      </div>
    </>
  );
}

export default Header;
