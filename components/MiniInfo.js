import React from 'react';
import SocialLinks from './SocialLinks';
import { BiTimeFive, BiPhone, BiMap, BiEnvelope } from 'react-icons/bi';
import { useUserContext } from '@/context/user';
// localization
import { useTranslation } from 'next-i18next';

// style
import styles from '@/styles/Hero.module.css';

import { usePostsContext } from '@/context/posts';

import { useEffect, useState } from 'react';

function MiniInfo({ img }) {
  // localization
  const { t: translate } = useTranslation('home');
  const [user, setUser] = useUserContext();
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
      {user && (
        <ul>
          <li>
            <BiPhone /> {user.phone}
          </li>
          <li>
            <BiMap /> {translate(user.address)}
          </li>
          <li>
            <BiEnvelope /> {user.email}
          </li>
        </ul>
      )}
    </div>
  );
}

export default MiniInfo;
