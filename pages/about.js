import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import { usePostsContext } from '@/context/posts';
// localization
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

function About() {
  const { locale = 'he', locales, push } = useRouter();
  const { t } = useTranslation('home');
  const [posts, setPosts] = usePostsContext();
  const [aboutPage, setAboutPage] = useState();

  // Filter unwanted posts
  useEffect(() => {
    if (posts) {
      const aboutPost = posts.find((p) => p.type === 'אודות');
      setAboutPage(aboutPost);
    }
  }, [posts]);

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <header className="header" id="top">
          <Header locales={locales} />
        </header>
        {aboutPage && <Hero full aboutPage={aboutPage} />}
        <section>
          <iframe
            title="Google Maps"
            width="100%"
            height="450"
            style={{}}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBzEEu5KAmag8OVPGS90mEjlH-m4yxe4Ec
    &q=https://www.google.com/maps/place/%D7%A2%D7%95%22%D7%93+%D7%90%D7%9C%D7%99%D7%A8%D7%9F+%D7%91%D7%9C%D7%9C%D7%99%E2%80%AD/@32.0866359,34.8799206,17z/data=!3m1!4b1!4m6!3m5!1s0x151d379bff703f5b:0x430e7cd54d42733d!8m2!3d32.0866359!4d34.8821093!16s%2Fg%2F11jp0tf6_3"
          ></iframe>
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
