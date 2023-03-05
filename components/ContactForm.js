import React from 'react';
// style
import styles from '@/styles/Contact.module.css';

import { AiOutlineMessage } from 'react-icons/ai';

function ContactForm({ translate }) {
  return (
    <>
      <form action="" className={styles.form}>
        <ul>
          <li>
            <span>{translate('שם')}</span>
            <input type="text" name="" id="" />
          </li>
          <li>
            <span>{translate('טלפון')}</span>
            <input type="text" name="" id="" />
          </li>
          <li>
            <span>{translate('אימייל')}</span>
            <input type="text" name="" id="" />
          </li>
          <li>
            <span>{translate('איך אוכל לעזור לך')}</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </li>
          <li>
            <button className="btn btn-color">{translate('שלח')}</button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default ContactForm;
