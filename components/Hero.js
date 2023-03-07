import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';

// Localization
import { useTranslation } from 'next-i18next';

// Styles
import styles from '@/styles/Hero.module.css';

function Hero({ aboutPage, full }) {
  const { t } = useTranslation('home');
  const { _id, title, desc, content, img } = aboutPage;

  const limited = content.substring(0, 800) + '...';

  return (
    <div
      className={
        full
          ? `${styles.hero} section ${styles.full}`
          : `${styles.hero} section`
      }
      dir="rtl"
    >
      <>
        <div className={styles.about}>
          <h1 id="about-heading">{t(title)}</h1>
          <h2>{t(desc)}</h2>
          {full ? parse(content) : parse(limited)}
          {!full && (
            <div className={styles.btn_container}>
              <Link href="/about" passHref>
                <button className="btn-color btn">{t('קרא עוד')}</button>
              </Link>
              <Link href="/contact" passHref>
                <button className="btn-color btn">{t('צור קשר')}</button>
              </Link>
            </div>
          )}
        </div>
        {full ? (
          <div className={styles.mini_info_container}>
            <Image
              src={img[0]}
              alt="Profile"
              width={400}
              height={370}
              className={styles.mini_info_image}
            />
          </div>
        ) : (
          <div className={styles.blob_container}>
            <Image
              src={img[0]}
              alt="Profile"
              width={400}
              height={370}
              className={styles.blob}
            />
          </div>
        )}
      </>
    </div>
  );
}

export default Hero;
