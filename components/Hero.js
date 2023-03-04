import React, { useState, useEffect } from 'react';
import Blob from '@/public/blob.svg';
import Image from 'next/image';
import profilePic from '../public/profile-blob.png';
import parse from 'html-react-parser';
import Link from 'next/link';
import MiniInfo from './MiniInfo';

// style
import styles from '@/styles/Hero.module.css';

function Hero({ ...props }) {
  const { _id, title, desc, content, img } = props.aboutPage[0];
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
          <h1>{title}</h1>
          <h2>{desc}</h2>
          {props.full ? parse(content) : parse(limited)}
          {!props.full && (
            <div className={styles.btn_container}>
              <Link href="/about" passHref legacyBehavior>
                <button className="btn-color btn">קרא עוד</button>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <button className="btn-color btn">צור קשר</button>
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
