import React from 'react';
// css
import styles from '@/styles/Section.module.css';
// components
import LinesSvg from '@/public/lines.svg';
// libreries
import parse from 'html-react-parser';
import Link from 'next/link';

function ShortPost(props) {
  // phrase props
  const { flipped } = props;
  const { translate } = props;
  const { _id, title, desc, content, img } = props.post;
  const limited = content.substring(0, 400) + '...';
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
          {parse(limited)}
          <div className={styles.btn}>
            <Link href={`/articles/${_id}`} passHref legacyBehavior>
              <button className="btn-color btn">{translate('קרא עוד')}</button>
            </Link>
          </div>
        </div>
      </div>
      <LinesSvg className={flipped ? styles.lines_flip : styles.lines} />
    </div>
  );
}

export default ShortPost;
