import '../styles/globals.scss';
import Navbar from '../components/Navbar';
import About from '../components/About';
import type { AppProps } from 'next/app';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Component {...pageProps} />
      <About />
    </div>
  );
}
export default MyApp;
