import React from 'react';
// style
import styles from '@/styles/Contact.module.css';

import { AiOutlineMessage } from 'react-icons/ai';

function ContactForm() {
  return (
    <>
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
    </>
  );
}

export default ContactForm;
