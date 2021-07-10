import styles from './styles.module.scss';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className={styles.headerContainer}>
      <a href='#'>
        <Image width={64} height={64} src={'/logo.svg'} alt='Pedro Bennesby' />
      </a>
      <nav>
        <ul>
          <li>
            <a className={styles.hvrUnderlineFromLeft} href='#about'>
              Sobre
            </a>
          </li>
          <li>
            <a className={styles.hvrUnderlineFromLeft} href='#technologies'>
              Tecnologias
            </a>
          </li>
          <li>
            <a className={styles.hvrUnderlineFromLeft} href='#projects'>
              Projetos
            </a>
          </li>
          <li>
            <a className={styles.hvrUnderlineFromLeft} href='#contact'>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
