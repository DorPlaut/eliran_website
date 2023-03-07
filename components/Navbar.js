import React from 'react';
import Link from 'next/link';

// localization
import { useTranslation } from 'next-i18next';

function Navbar() {
  // localization
  const { t } = useTranslation('home');

  // handle click
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <nav aria-label="Main Navigation">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/contact" passHref>
            <button className="navbar-link text-btn btn">{t('צור קשר')}</button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/articles" passHref>
            <button className="navbar-link text-btn btn">{t('כתבות')}</button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/expertise" passHref>
            <button className="navbar-link text-btn btn">
              {t('תחומי התמחות')}
            </button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/about" passHref>
            <button className="navbar-link text-btn btn">{t('אודות')}</button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/" passHref>
            <button className="navbar-link text-btn btn">{t('ראשי')}</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
