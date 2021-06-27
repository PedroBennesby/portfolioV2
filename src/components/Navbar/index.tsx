import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <h1>Pedro Bennesby</h1>
        <ul>
          <li>
            <a data-page='about' href='#'>
              Sobre
            </a>
          </li>
          <li>
            <a data-page='technologies' href='#'>
              Tecnologias
            </a>
          </li>
          <li>
            <a data-page='projects' href='#'>
              Projetos
            </a>
          </li>
          <li>
            <a data-page='contact' href='#'>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
