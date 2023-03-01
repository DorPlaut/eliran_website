import React from 'react';
import styles from '@/styles/Section.module.css';
import LinesSvg from '@/public/lines.svg';
import parse from 'html-react-parser';
import Image from 'next/image';

function Section(props) {
  // console.log(props);
  const { flipped } = props;

  const { title, desc, content, img } = props.post;

  // console.log(title);

  let readMoreLink;
  return (
    <div className={styles.container}>
      <div
        className={
          flipped ? `${styles.inner} ${styles.inner_flip} ` : `${styles.inner}`
        }
      >
        <div className={styles.extra}>
          {img.length > 0 && (
            <img src={img[0]} alt={img} className={styles.img} />
          )}
        </div>
        <div className={styles.content} dir="rtl">
          <div className={styles.title}>
            <h1>{title}</h1>
            <h2>{desc}</h2>
          </div>
          {parse(content)}
          <div className={styles.btn}>
            <button className="btn-color btn">...קרא עוד</button>
          </div>
        </div>
      </div>
      <LinesSvg className={flipped ? styles.lines_flip : styles.lines} />
    </div>
  );
}

export default Section;
