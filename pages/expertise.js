import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { usePostsContext } from '@/context/posts';
import FullPost from '@/components/FullPost';
import ServicesIcons from '@/components/ServicesIcons';
// localezation
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Expertise() {
  const [posts, setPosts] = usePostsContext();
  const [post, setPost] = useState();
  // localezation
  const { locale = 'he', locales, push } = useRouter();
  const { t: translate } = useTranslation('home');

  // flitersd unwonted posts
  useEffect(() => {
    if (posts) {
      posts.map((i) => {
        if (i.type == 'תחומי_התמחות') {
          setPost(i);
        }
      });
    }
  }, [posts]);
  return (
    <main className="main">
      <header className="header" id="top">
        <Header translate={translate} locales={locales} />
      </header>
      <ServicesIcons />
      {post && <FullPost post={post} />}

      <footer>
        <Footer translate={translate} />
      </footer>
    </main>
  );
}

export default Expertise;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}
