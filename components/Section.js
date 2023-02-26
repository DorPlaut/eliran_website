import React from 'react';
import styles from '@/styles/Section.module.css';
import LinesSvg from '@/public/Lines.svg';

function Section(props) {
  console.log(props.flipped);
  return (
    <div className={styles.container}>
      <div
        className={
          props.flipped
            ? `${styles.inner} ${styles.inner_flip} `
            : `${styles.inner}`
        }
      >
        <div className={styles.extra}>
          <img src={props.img} alt="Profile" className={styles.img} />
        </div>
        <div className={styles.content}>
          <h1>כותרת</h1>
          <h2>תיאור קצר</h2>
          <p>
            וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר
            בריקנה סטום, לפריקך תצטריק לרטי. קונסקטורר אדיפיסינג אלית. סת
            אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט
          </p>

          <button className="btn-color btn">...קרא עוד</button>
        </div>
      </div>
      <LinesSvg className={props.flipped ? styles.lines_flip : styles.lines} />
    </div>
  );
}

export default Section;
