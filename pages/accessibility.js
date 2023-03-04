import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { usePostsContext } from '@/context/posts';
import FullPost from '@/components/FullPost';

function Accessibility() {
  const [posts, setPosts] = usePostsContext();
  const [post, setPost] = useState();

  useEffect(() => {
    if (posts) {
      posts.map((i) => {
        if (i.type == 'הצהרת_נגישות') {
          setPost(i);
        }
      });
    }
  }, [posts]);

  return (
    <main className="main">
      <header className="header" id="top">
        <Header />
      </header>
      {post && <FullPost post={post} />}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Accessibility;
