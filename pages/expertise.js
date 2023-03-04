import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { usePostsContext } from '@/context/posts';
import FullPost from '@/components/FullPost';
import ServicesIcons from '@/components/ServicesIcons';

function Expertise() {
  const [posts, setPosts] = usePostsContext();
  const [post, setPost] = useState();
  console.log(post);

  // flitersd unwonted posts
  useEffect(() => {
    if (posts) {
      posts.map((i) => {
        if (i.type == 'תחומי_התמחות') {
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
      <ServicesIcons />
      {post && <FullPost post={post} />}

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Expertise;
