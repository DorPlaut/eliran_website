import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePostsContext } from '@/context/posts';
import ShortPost from '@/components/ShortPost';
// localization
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Articles.module.css';

function Articles() {
  const [posts, setPosts] = usePostsContext();
  const [selectedPosts, setSelectedPosts] = useState();
  // localization
  const { locale = 'he', locales, push } = useRouter();
  const { t } = useTranslation('home');

  // filter unwanted posts
  useEffect(() => {
    if (posts) {
      setSelectedPosts(
        posts.filter((post) => {
          return post.type === 'כתבה';
        })
      );
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

        <section aria-labelledby="articles-heading">
          <div className={styles.heading}>
            <h1 id="articles-heading">{t('כתבות')}</h1>
          </div>
          {selectedPosts &&
            selectedPosts.map((post, index) => {
              return (
                <section key={index}>
                  <ShortPost
                    flipped={index % 2 === 0 ? true : false}
                    post={post}
                  />
                </section>
              );
            })}
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default Articles;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}
