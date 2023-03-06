import React from 'react';
import Link from 'next/link';

// localization
import { useTranslation } from 'next-i18next';

function Navbar() {
  // localization
  const { t: translate } = useTranslation('home');
  // handle click
  const handleClick = (url) => {
    location.href = url;
  };
  return (
    <ul>
      <li>
        <Link href="/contact" passHref legacyBehavior>
          <button className="text-btn btn">{translate('צור קשר')}</button>
        </Link>
      </li>
      {/* <li>
        <Link href="/recommendations" passHref legacyBehavior>
          <button className="text-btn btn">המלצות</button>
        </Link>
      </li> */}
      <li>
        <Link href="/articles" passHref legacyBehavior>
          <button className="text-btn btn">{translate('כתבות')}</button>
        </Link>
      </li>
      <li>
        <Link href="/expertise" passHref legacyBehavior>
          <button className="text-btn btn">{translate('תחומי התמחות')}</button>
        </Link>
      </li>
      <li>
        <Link href="/about" passHref legacyBehavior>
          <button className="text-btn btn">{translate('אודות')}</button>
        </Link>
      </li>
      <li>
        <Link href="/" passHref legacyBehavior>
          <button className="text-btn btn">{translate('ראשי')}</button>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
