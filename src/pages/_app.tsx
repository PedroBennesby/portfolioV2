import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Technologies from "../components/Technologies";
import type { AppProps } from "next/app";
import { api } from "../services/api";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "../styles/app.module.scss";
import Projects from "../components/Projects";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Component {...pageProps} />
      <About />
      <Technologies />
      <Projects />
    </div>
  );
}
export default MyApp;
