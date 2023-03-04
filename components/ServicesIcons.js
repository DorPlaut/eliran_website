import React from 'react';
import styles from '@/styles/HomeContact.module.css';
import { FaRegIdCard, FaBalanceScale, FaPeopleArrows } from 'react-icons/fa';

function ServicesIcons() {
  return (
    <div className={styles.container}>
      {/* Email Form. */}
      {/* <div className={styles.form_container}>
        <h4>ליעוץ ראשוני אנא מלאו פרטים ונחזור אליכם במהרה</h4>
        <form action="">
          <ul>
            <li>
              <span>שם</span>
              <input type="text" />
            </li>
            <li>
              <span>טלפון</span>
              <input type="phone" />
            </li>
            <li>
              <span>דואר אלקטרוני</span>
              <input type="email" />
            </li>
            <li className={styles.btn}>
              <button className="btn btn-color">שלח</button>
            </li>
          </ul>
        </form>
      </div> */}
      <div className={styles.servics}>
        <ul>
          <li>
            <FaRegIdCard className={styles.icon} />
            <h5>שירות</h5>
            <p>תיאור השירות</p>
          </li>
          <li>
            <FaBalanceScale className={styles.icon} />
            <h5>שירות</h5>
            <p>תיאור השירות</p>
          </li>
          <li>
            <FaPeopleArrows className={styles.icon} />
            <h5>שירות</h5>
            <p>תיאור השירות</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesIcons;
