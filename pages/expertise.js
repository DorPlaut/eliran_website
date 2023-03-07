import React, { useState, useEffect } from 'react';
import Head from 'next/head';
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
  const { t } = useTranslation('home');

  // Filter posts to get the post with type 'תחומי_התמחות'
  useEffect(() => {
    if (posts) {
      const expertise = posts.find((post) => post.type === 'תחומי_התמחות');
      setExpertisePost(expertise);
    }
  }, [posts]);

  return (
    <>
      <Head>
        <title>{t('עורך דין אלירן בללי')}</title>
        <meta
          name="description"
          content={t(
            ' עורך דין אלירן בללי . עו"ד העוסק במעמד ושהייה בארץ, ייצוג בכל הערכאות ומול כל הגופים הרלוונטים'
          )}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <header className="header" id="top">
          <Header locales={locales} />
        </header>

        <ServicesIcons text={t('תחומי התמחות')} />

        {expertisePost && <FullPost post={expertisePost} />}

        <footer aria-label="Footer">
          <Footer />
        </footer>
      </main>
    </>
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
