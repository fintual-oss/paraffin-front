import Head from 'next/head';
import styles from '@styles/Index.module.scss';

import Header from '@components/landing/header/Header';
import Problem from '@components/landing/problem/Problem';
import Solution from '@components/landing/solution/Solution';
import Faqs from '@components/landing/faqs/Faqs';
import Footer from '@components/landing/footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>ser.dev</title>
        <meta name="ser.dev" content="Plataforma educativa de FIN." />
        <link rel="shortcut icon" href="/src/public/vercel.svg" />
      </Head>

      <div className={`grid ${styles.landing}`}>
        <Header />
        <Problem />
        <Solution />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}
