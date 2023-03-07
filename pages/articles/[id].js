import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePostsContext } from '@/context/posts';
import FullPost from '@/components/FullPost';
// localization
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

function ShowFullPost() {
  // localization
  const { locale = 'he', locales, push } = useRouter();
  const { t: translate } = useTranslation('home');

  const router = useRouter();
  const postId = router.query.id;
  const [posts, setPosts] = usePostsContext();
  const [post, setPost] = useState();

  // Find selected post
  useEffect(() => {
    if (posts) {
      const selectedPost = posts.find((i) => i._id === postId);
      if (selectedPost) {
        setPost(selectedPost);
      }
    }
  }, [postId, posts]);

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
  // Define paths for dynamic routes
  // Replace hard-coded post IDs with actual IDs from your data source
  const paths = [
    { params: { id: 'post-1' } },
    { params: { id: 'post-2' } },
    { params: { id: 'post-3' } },
  ];
  return {
    paths,
    fallback: true,
  };
}
