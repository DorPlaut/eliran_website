import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePostsContext } from '@/context/posts';
import ShortPost from '@/components/ShortPost';

function Articles() {
  const [posts, setPosts] = usePostsContext();
  return (
    <main className="main">
      <header className="header" id="top">
        <Header />
      </header>
      <section>
        {posts &&
          posts.map((post, index) => {
            return (
              <section key={index}>
                <ShortPost
                  flipped={index % 2 == 0 ? true : false}
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
  );
}

export default Articles;
