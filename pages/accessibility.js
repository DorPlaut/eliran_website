import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { usePostsContext } from '@/context/posts';
import FullPost from '@/components/FullPost';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Accessibility() {
  const [posts, setPosts] = usePostsContext();
  const [post, setPost] = useState(null);
  const { locale = 'he', locales, push } = useRouter();
  const { t: translate } = useTranslation('home');

  useEffect(() => {
    if (posts) {
      const accessibilityPost = posts.find((p) => p.type === 'הצהרת_נגישות');
      setPost(accessibilityPost);
    }
  }, [posts]);

  return (
    <main className="main">
      <header className="header" id="top">
        <Header translate={translate} locales={locales} />
      </header>
      {post && <FullPost post={post} />}
      <footer>
        <Footer translate={translate} />
      </footer>
    </main>
  );
}

export default Accessibility;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
