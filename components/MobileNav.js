import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { CgMenuRound } from 'react-icons/cg';
import LangNav from './LangNav';
// style
import styles from '@/styles/Header.module.css';

// localization
import { useTranslation } from 'next-i18next';

function MobileNav({ locales }) {
  // localization
  const { t: translate } = useTranslation('home');

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
      {isOpen ? (
        <>
          <Navbar translate={translate} />
          <br />
          <br />
          <LangNav locales={locales} />
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default MobileNav;
