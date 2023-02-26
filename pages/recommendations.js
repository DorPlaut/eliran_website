import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

function recommendations() {
  return (
    <main className="main">
      <header className="header" id="top">
        <Header />
      </header>
      <section>
        <Section
          flipped={true}
          img="https://images.pexels.com/photos/618158/pexels-photo-618158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default recommendations;
