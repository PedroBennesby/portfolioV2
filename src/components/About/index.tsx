import styles from './styles.module.scss';

export default function About() {
  return (
    <section id='about' className={styles.sectionContainer}>
      <div className={styles.sectionName}>
        <h1>Sobre</h1> <span />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dolores
        eligendi totam non officia, fuga libero eos, sit ducimus odio fugit
        soluta sapiente officiis delectus explicabo? Explicabo atque deserunt
        dolorum.
      </p>
      <ul>
        <h3>O que eu ando fazendo:</h3>
        <li>
          <div /> <p>Desenvolvendo projetos pessoais</p>
        </li>
        <li>
          <div /> <p>Estudando React/Next.js</p>
        </li>
        <li>
          <div /> <p>Aprendendo sobre Back-end</p>
        </li>
      </ul>
    </section>
  );
}
