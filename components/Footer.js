import React from 'react';
import SocialLinks from './SocialLinks';
import styles from '@/styles/Footer.module.css';
import Navbar from './Navbar';
import { BiTimeFive, BiPhone, BiMap, BiEnvelope } from 'react-icons/bi';
import Link from 'next/link';
import { useUserContext } from '@/context/user';

function Footer() {
  const [user, setUser] = useUserContext();

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.menu}>
          <h3>צור קשר</h3>
          <div className={styles.underline}></div>
          {user && (
            <ul>
              <li>
                {user.phone}
                <BiPhone />
              </li>
              <li>
                {user.address}
                <BiMap />
              </li>
              <li>
                {user.email} <BiEnvelope />
              </li>
              <li>
                <SocialLinks />
              </li>
            </ul>
          )}
        </div>
        <div className={styles.menu}>
          <h3>שעות פעילות</h3>
          <div className={styles.underline}></div>
          <ul>
            <li>
              ראשון עד חמישי : 08:00 - 17:00 <BiTimeFive />
            </li>
            <li>
              שישי : 08:00 - 12:00 <BiTimeFive />
            </li>
            <li>
              שבת : סגור <BiTimeFive />
            </li>
          </ul>
        </div>

        <div className={styles.menu}>
          <h3>ניווט</h3>
          <div className={styles.underline}></div>
          <ul className={styles.footer_nav}>
            <Navbar />
            <li>
              <Link href="/accessibility" passHref legacyBehavior>
                <button className="text-btn btn">הצהרת נגישות</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <span>build by Dor Plaut. all right reserved to Eliran Balely ©</span>
    </div>
  );
}

export default Footer;
