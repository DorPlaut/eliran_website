import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Assistant } from '@next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import HomeContact from '@/components/HomeContact';
// states
import { useMobileContext } from '@/context/mobile';
import { usePostsContext } from '@/context/posts';

export default function Home() {
  // states
  const [isMobile, setIsMobile] = useMobileContext();
  const [posts, setPosts] = usePostsContext();
  console.log(posts);
  return (
    <>
      <Head>
        <title>עורך דין אלירן בללי</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <header className="header" id="top">
          <Header />
        </header>
        <section>
          <Hero />
        </section>
        {posts &&
          posts.map((post, index) => {
            return (
              <section key={index}>
                <Section flipped={index % 2 == 0 ? true : false} post={post} />
              </section>
            );
          })}
        <section>
          <HomeContact />
        </section>
        {/* <section>
          <Section posts={posts} />
        </section> */}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
