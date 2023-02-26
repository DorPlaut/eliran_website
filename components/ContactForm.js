import React from 'react';
// style
import styles from '@/styles/Contact.module.css';

import { AiOutlineMessage } from 'react-icons/ai';

function ContactForm() {
  return (
    <div className={styles.form_container}>
      <h2>צור קשר</h2>
      <AiOutlineMessage className={styles.page_icon} />
      <p>צריך עורך דין? צור קשר עכשיו</p>
      <form action="" className={styles.form}>
        <ul>
          <li>
            <span>שם</span>
            <input type="text" name="" id="" />
          </li>
          <li>
            <span>טלפון</span>
            <input type="text" name="" id="" />
          </li>
          <li>
            <span>אימייל</span>
            <input type="text" name="" id="" />
          </li>
          <li>
            <span>?איך אוכל לעזור לך</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </li>
          <li>
            <button className="btn btn-color">שלח</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ContactForm;
