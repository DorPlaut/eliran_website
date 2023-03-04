import React from 'react';
import SocialLinks from './SocialLinks';
import { BiTimeFive, BiPhone, BiMap, BiEnvelope } from 'react-icons/bi';

// style
import styles from '@/styles/Hero.module.css';

import { usePostsContext } from '@/context/posts';

import { useEffect, useState } from 'react';

function MiniInfo({ img }) {
  const [posts, setPosts] = usePostsContext();

  const [aboutPage, setAboutPage] = useState();

  // flitersd unwonted posts
  useEffect(() => {
    if (posts) {
      setAboutPage(
        posts.filter((i) => {
          return i.type == 'אודות';
        })
      );
    }
  }, [posts]);

  return (
    <div className={styles.info}>
      <div className={styles.blob_container}>
        {aboutPage && (
          <img src={aboutPage[0].img} alt="Profile" className={styles.blob} />
        )}
      </div>
      <SocialLinks />
      <ul>
        <li>
          <BiPhone /> 054-1111111
        </li>
        <li>
          <BiMap /> כתובת 1, פתח תקווה
        </li>
        <li>
          <BiEnvelope /> EmailAdress@gmail.com
        </li>
      </ul>
    </div>
  );
}

export default MiniInfo;
