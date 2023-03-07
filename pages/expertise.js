import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import FullPost from '@/components/FullPost';
import ServicesIcons from '@/components/ServicesIcons';
import { usePostsContext } from '@/context/posts';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function ExpertisePage() {
  // States
  const [posts, setPosts] = usePostsContext();
  const [expertisePost, setExpertisePost] = useState();

  // Localization
  const { locale = 'he', locales, push } = useRouter();
  const { t: translate } = useTranslation('home');

  // Filter posts to get the post with type 'תחומי_התמחות'
  useEffect(() => {
    if (posts) {
      const expertise = posts.find((post) => post.type === 'תחומי_התמחות');
      setExpertisePost(expertise);
    }
  }, [posts]);

  return (
    <main className="main">
      <header className="header" id="top">
        <Header translate={translate} locales={locales} />
      </header>

      <ServicesIcons />

      {expertisePost && <FullPost post={expertisePost} />}

      <footer aria-label="Footer">
        <Footer translate={translate} />
      </footer>
    </main>
  );
}

// Server-side translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
