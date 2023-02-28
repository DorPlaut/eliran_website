import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Hero from '@/components/Hero';

function About() {
  return (
    <main className="main">
      <header className="header" id="top">
        <Header />
      </header>
      <section>
        <Hero />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default About;
