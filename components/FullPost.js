import React from 'react';
// css
import styles from '@/styles/Section.module.css';
// components
import LinesSvg from '@/public/lines.svg';
// libreries
import parse from 'html-react-parser';

function FullPost(props) {
  const { flipped } = props;
  const { _id, title, desc, content, img } = props.post;
  return (
    <div className={styles.container}>
      <div
        className={
          flipped ? `${styles.inner} ${styles.inner_flip} ` : `${styles.inner}`
        }
      >
        <div className={styles.content} dir="rtl">
          <div className={styles.title}>
            <h1>{title}</h1>
            <h2>{desc}</h2>
          </div>
          {parse(content)}
          <div className={styles.btn}></div>
          <div className={styles.images}>
            {img.length > 0 &&
              img.map((img, index) => {
                return (
                  <img src={img} alt="" className={styles.img} key={index} />
                );
              })}
          </div>
        </div>
      </div>
      <LinesSvg className={flipped ? styles.lines_flip : styles.lines} />
    </div>
  );
}

export default FullPost;
