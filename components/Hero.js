import React, { useState, useEffect } from 'react';
import Blob from '@/public/blob.svg';
import Image from 'next/image';
import profilePic from '../public/profile-blob.png';
import { usePostsContext } from '@/context/posts';

// style
import styles from '@/styles/Hero.module.css';

function Hero() {
  const [posts, setPosts] = usePostsContext();

  // flitersd unwonted posts
  useEffect(() => {}, [posts]);
  return (
    <div className={`${styles.hero} section`}>
      <div className={styles.blob_container}>
        <Image
          src={profilePic}
          alt="Profile"
          className={styles.blob}
          priority
        />
      </div>
      <div className={styles.about}>
        <h1>אלרין בללי</h1>
        <h2>עורך דין</h2>
        <p>
          וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר
          בריקנה סטום, לפריקך תצטריק לרטי. קונסקטורר אדיפיסינג אלית. סת אלמנקום
          ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת
          לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס
          בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי. קוואזי במר
          מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי
          בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו
          בלוקריה שיצמה ברורק. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.
          קלאצי נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
          אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף
          קינץ תתיח לרעח. לת צשחמי לורם איפסום דולור סיט אמט, קונסקטורר
          אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
          וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום
          בעליק. ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך
          וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
        </p>

        <button className="btn-color btn">צור קשר</button>
      </div>
    </div>
  );
}

export default Hero;
