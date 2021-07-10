import styles from './styles.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className={styles.sectionContainer}>
      <div className={styles.sectionName}>
        <h1>Sobre</h1> <span />
      </div>
      <p>
        Curso Análise e desenvolvimento de sistemas na Universidade do Vale do
        Itajaí (Univali), tenho 22 anos e atualmente estou morando em Itapema -
        SC. Possuo mais afinidade com a área de Front-end mas estou sempre
        disposto a aprender novas tecnologias, linguagens, bibliotecas e
        frameworks, afinal, conhecimento nunca é demais.
      </p>
      <div className={styles.aboutBox}>
        <ul>
          <h3>O que eu ando fazendo:</h3>
          <li>
            <div /> <p>Desenvolvendo projetos pessoais</p>
          </li>
          <li>
            <div /> <p>Aprendendo mais sobre Back-end</p>
          </li>
          <li>
            <div /> <p>Estudando React/Next.js</p>
          </li>
          <li>
            <div /> <p>Estudando Node.js </p>
          </li>
          <li>
            <div /> <p>Estudando criação de APIs com Express e MySQL </p>
          </li>
          <li>
            <div /> <p>Estudando UX/UI e Acessibilidade </p>
          </li>
        </ul>
        <Image width={350} height={400} src='/me.jpg'></Image>
      </div>
    </section>
  );
}
