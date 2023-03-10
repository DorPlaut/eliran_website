import React, { useState, useRef } from 'react';
// style
import styles from '@/styles/Contact.module.css';

import { AiOutlineMessage } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

// localization
import { useTranslation } from 'next-i18next';

function ContactForm() {
  // handle alerts
  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => {
      setAlert();
    }, 2000);
  };

  const form = useRef();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState();

  // localization
  const { t: translate } = useTranslation('home');
  // send email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_4gteh89',
        'template_4r0w2d1',
        form.current,
        'NeOnsSDZoqOO_Y6za'
      )
      .then(
        (result) => {
          showAlert('הודעה נשלחה בהצלחה');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label htmlFor="from_name">{translate('שם')}</label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="user_phone">{translate('טלפון')}</label>
        <input
          type="phone"
          name="user_phone"
          id="user_phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
        <label htmlFor="user_email">{translate('אימייל')}</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="message">{translate('איך אוכל לעזור לך')}</label>
        <textarea
          name="message"
          id="message"
          rows="7"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button className="btn btn-color" type="submit">
          {translate('שלח')}
        </button>
        {alert && <h3 className={styles.alert}>{alert}</h3>}
      </form>
    </>
  );
}

export default ContactForm;
