import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { usePostsContext } from '@/context/posts';

function Expertise() {
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
                <Section flipped={index % 2 == 0 ? true : false} post={post} />
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

export default Expertise;
