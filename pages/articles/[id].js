import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePostsContext } from '@/context/posts';
import FullPost from '@/components/FullPost';
// localezation
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

function ShowFullPost() {
  // localezation
  const { locale = 'he', locales, push } = useRouter();
  const { t: translate } = useTranslation('home');
  //
  const router = useRouter();
  const postId = router.query.id;
  const [posts, setPosts] = usePostsContext();
  const [post, setPost] = useState();
  // find tto selected post
  useEffect(() => {
    if (posts) {
      posts.map((i) => {
        if (i._id == postId) {
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
      <section>{post && <FullPost flipped post={post} />}</section>
      <footer>
        <Footer translate={translate} />
      </footer>
    </main>
  );
}

export default ShowFullPost;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/articles/64002446583bd642073dce8b',
      // Object variant:
      { params: { id: '64002446583bd642073dce8b' } },
    ],
    fallback: true,
  };
}
