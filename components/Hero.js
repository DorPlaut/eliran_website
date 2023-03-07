import React, { useState, useEffect } from 'react';
import Blob from '@/public/blob.svg';
import Image from 'next/image';
import profilePic from '../public/profile-blob.png';
import parse from 'html-react-parser';
import Link from 'next/link';
import MiniInfo from './MiniInfo';

// style
import styles from '@/styles/Hero.module.css';
// localization
import { useTranslation } from 'next-i18next';

function Hero({ ...props }) {
  // localization
  const { t } = useTranslation('home');
  const { _id, title, desc, content, img } = props.aboutPage;
  const limited = content.substring(0, 800) + '...';
  return (
    <div
      className={
        props.full
          ? `${styles.hero} section ${styles.full}`
          : `${styles.hero} section `
      }
      dir="rtl"
    >
      <>
        <div className={styles.about}>
          <h1 id="about-heading">{t(title)}</h1>
          <h2>{t(desc)}</h2>
          {props.full ? parse(content) : parse(limited)}
          {!props.full && (
            <div className={styles.btn_container}>
              <Link href="/about" passHref legacyBehavior>
                <button className="btn-color btn">{t('קרא עוד')}</button>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <button className="btn-color btn">{t('צור קשר')}</button>
              </Link>
            </div>
          )}
        </div>
        {props.full ? (
          <MiniInfo img={img[0]} />
        ) : (
          <div className={styles.blob_container}>
            <img src={img[0]} alt="Profile" className={styles.blob} />
          </div>
        )}
      </>
    </div>
  );
}

export default Hero;
