import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePostsContext } from '@/context/posts';
import ShortPost from '@/components/ShortPost';
// localization
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Articles() {
  const [posts, setPosts] = usePostsContext();
  const [selectedPosts, setSelectedPosts] = useState();
  // localization
  const { locale = 'he', locales, push } = useRouter();
  const { t: translate } = useTranslation('home');

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
    <main className="main">
      <header className="header" id="top">
        <Header translate={translate} locales={locales} />
      </header>

      <section aria-labelledby="articles-heading">
        <h1 id="articles-heading">{translate('articles')}</h1>
        {selectedPosts &&
          selectedPosts.map((post, index) => {
            return (
              <section key={index}>
                <ShortPost
                  flipped={index % 2 === 0 ? true : false}
                  post={post}
                  translate={translate}
                />
              </section>
            );
          })}
      </section>

      <footer>
        <Footer translate={translate} />
      </footer>
    </main>
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
