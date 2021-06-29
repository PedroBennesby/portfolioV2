import styles from './styles.module.scss';
import {
  FaAngular,
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
} from 'react-icons/fa';
import { SiNextDotJs, SiTypescript, SiJavascript, SiPhp } from 'react-icons/si';

export default function Technologies() {
  return (
    <section id='technologies' className={styles.sectionContainer}>
      <div className={styles.sectionName}>
        <h1>Tecnologias</h1> <span />
      </div>
      <div className={styles.iconBoxContainer}>
        <div className={styles.iconBox}>
          <FaHtml5 className={styles.html} /> <FaCss3 className={styles.css} />
          <FaSass className={styles.sass} />
          <FaBootstrap className={styles.bootstrap} />
          <SiPhp className={styles.php} />
        </div>
        <div className={styles.iconBox}>
          <SiJavascript className={styles.javascript} />
          <SiTypescript className={styles.typescript} />
          <SiNextDotJs className={styles.next} />
          <FaReact className={styles.react} />
          <FaAngular className={styles.angular} />
        </div>
      </div>
    </section>
  );
}
