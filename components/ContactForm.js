import React, { useState, useRef } from 'react';
// style
import styles from '@/styles/Contact.module.css';

import { AiOutlineMessage } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

// localization
import { useTranslation } from 'next-i18next';

function ContactForm() {
  const form = useRef();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // localization
  const { t: translate } = useTranslation('home');
  // send email
  const sendEmail = (e) => {
    console.log(form.current);
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
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          // alert('Message sent successfully');
        },
        (error) => {
          console.log(error.text);
          // alert('Error. please go back');
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <span>{translate('שם')}</span>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <span>{translate('טלפון')}</span>
        <input
          type="phone"
          name="user_phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
        <span>{translate('אימייל')}</span>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <span>{translate('איך אוכל לעזור לך')}</span>
        <textarea
          name="massage"
          rows="7"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button className="btn btn-color" type="submit">
          {translate('שלח')}
        </button>
      </form>
    </>
  );
}

export default ContactForm;
