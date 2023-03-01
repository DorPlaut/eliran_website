import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePostsContext } from '@/context/posts';
import FullPost from '@/components/FullPost';

function ShowFullPost() {
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
  console.log(post);

  return (
    <main className="main">
      <header className="header" id="top">
        <Header />
      </header>
      <section>{post && <FullPost flipped post={post} />}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default ShowFullPost;
