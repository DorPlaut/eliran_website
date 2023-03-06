import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiWorld } from 'react-icons/bi';

// style
import styles from '@/styles/Header.module.css';

function LangNav({ locales }) {
  const [menuPosition, setMenuPosition] = useState(2);
  const [menuOpacity, setMenuOpacity] = useState(0);
  const path = useRouter().asPath;

  function getLanguageName(code) {
    const languageName = new Intl.DisplayNames([code], { type: 'language' });
    return languageName.of(code);
  }

  return (
    <div>
      <ul className={styles.lang_manu}>
        <li className={styles.first_btn}>
          <button
            className="btn btn-color"
            onClick={() => {
              if (menuPosition == 2) setMenuPosition(-0.2), setMenuOpacity(3);
              if (menuPosition == -0.2) setMenuPosition(2), setMenuOpacity(0);
            }}
          >
            <BiWorld className={styles.icon} /> Languege
          </button>
        </li>
        {locales.map((l, i) => {
          return (
            <li
              key={l}
              className={styles.lang_link}
              style={{
                transform: `translateY(${-i * menuPosition}rem)`,
                opacity: menuOpacity,
              }}
            >
              <Link
                href={path}
                locale={l}
                className="btn btn-color"
                onClick={() => {
                  setMenuPosition(2), setMenuOpacity(0);
                }}
              >
                {getLanguageName(l)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LangNav;
