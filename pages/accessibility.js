import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { usePostsContext } from '@/context/posts';
import FullPost from '@/components/FullPost';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/HomeContact.module.css';

function Accessibility() {
  const [posts, setPosts] = usePostsContext();
  const [post, setPost] = useState(null);
  const { locale = 'he', locales, push } = useRouter();
  const { t } = useTranslation('home');

  useEffect(() => {
    if (posts) {
      const accessibilityPost = posts.find((p) => p.type === 'הצהרת_נגישות');
      setPost(accessibilityPost);
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
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="main">
        <header className="header" id="top">
          <Header locales={locales} />
        </header>
        <div className={styles.container}>
          <h1 id="accessibility-heading">{t('הצהרת נגישות')}</h1>
        </div>

        {post && <FullPost post={post} />}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
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
