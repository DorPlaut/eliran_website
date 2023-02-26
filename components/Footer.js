import React from 'react';
import SocialLinks from './SocialLinks';
import styles from '@/styles/Footer.module.css';
import Navbar from './Navbar';
import { BiTimeFive, BiPhone, BiMap, BiEnvelope } from 'react-icons/bi';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.menu}>
          <h3>צור קשר</h3>
          <div className={styles.underline}></div>
          <ul>
            <li>
              054-1111111 <BiPhone />
            </li>
            <li>
              כתובת 1, פתח תקווה <BiMap />
            </li>
            <li>
              EmailAdress@gmail.com <BiEnvelope />
            </li>
            <li>
              <SocialLinks />
            </li>
          </ul>
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
          <Navbar />
        </div>
      </div>
      <span>build by Dor Plaut. all right reserved to Eliran Balely ©</span>
    </div>
  );
}

export default Footer;
