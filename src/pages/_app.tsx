import '../styles/globals.scss';
import Navbar from '../components/Navbar';
import About from '../components/About';
import type { AppProps } from 'next/app';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <About />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
