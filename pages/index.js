import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Accecability from '@/components/Accecability';

// components
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServicesIcons from '@/components/ServicesIcons';
import ShortPost from '@/components/ShortPost';

// states
import { useMobileContext } from '@/context/mobile';
import { usePostsContext } from '@/context/posts';

export default function Home() {
  // start

  // end

  // states
  const [isMobile, setIsMobile] = useMobileContext();
  const [posts, setPosts] = usePostsContext();
  const [selectedPosts, setSelected] = useState();
  const [aboutPage, setAboutPage] = useState();

  // localization
  const { locale = 'he', locales, push } = useRouter();
  const { t } = useTranslation('home');

  // flitersd unwonted posts
  useEffect(() => {
    // use optional chaining to access posts safely
    setAboutPage(posts?.filter((i) => i.type === 'אודות'));
    setSelected(posts?.filter((i) => i.type === 'כתבה'));
  }, [posts]);

  // use array destructuring to extract translate and locales from t
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
        {selectedPosts && aboutPage ? (
          <>
            <Hero aboutPage={aboutPage[0]} />

            {/* use array destructuring to extract the first post */}
            <ShortPost flipped post={selectedPosts[0]} />
            <ServicesIcons />
            <ShortPost flipped post={selectedPosts[0]} />
          </>
        ) : (
          <section>
            <Loader />
          </section>
        )}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});
