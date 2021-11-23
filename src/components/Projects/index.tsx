import styles from './styles.module.scss';
import { FaAngular, FaReact, FaSass, FaBootstrap } from 'react-icons/fa';
import {
  SiNextDotJs,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiReact,
} from 'react-icons/si';

export default function Projects() {
  return (
    <section id='projects' className={styles.sectionContainer}>
      <div className={styles.sectionName}>
        <h1>Projetos</h1> <span />
      </div>

      <div className={styles.projectsBox}>
        <div className={styles.projectContainer}>
          <div className={styles.projectTitle}>
            <h1>Mana, vai! Podcast</h1>
          </div>
          <div className={styles.projectBody}>
            <h1>Mana, vai! Podcast</h1>
            <p>
              Projeto de um WebApp para agregar todos os episódios de um Podcast
              feito por mim, sobre Magic: The gathering. Projeto feito em
              Next.js, Typescript e consumindo uma Api Rest fake.
            </p>
            <div className={styles.techs}>
              <SiReact className={styles.react} />
              <SiNextDotJs className={styles.next} />
              <SiTypescript className={styles.typescript} />
              <FaSass className={styles.sass} />
            </div>
            <div className={styles.buttons}>
              <a
                href='https://manavaipodcast.vercel.app/'
                target='_blank'
                rel='noreferrer'
                className={styles.liveProject}
              >
                Visite o site
              </a>
              <a
                href='https://github.com/PedroBennesby/ManaVaiPodcast'
                target='_blank'
                rel='noreferrer'
                className={styles.codeProject}
              >
                Veja o código
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectContainer}>
          <div className={styles.projectTitle}>
            <h1>Pokédex</h1>
          </div>
          <div className={styles.projectBody}>
            <h1>Pokédex</h1>
            <p>
              Projeto de uma Pokédex criada para estudar Angular e consumo de
              APIs rest, ainda está em fase de melhorias, pretendo criar páginas
              individuais para cada pokémon e mostrar seus stats.
            </p>
            <div className={styles.techs}>
              <FaAngular className={styles.angular} />
              <SiTypescript className={styles.typescript} />
              <FaSass className={styles.sass} />
            </div>
            <div className={styles.buttons}>
              <a
                href='https://pokedex-pedrobennesby.vercel.app/'
                target='_blank'
                rel='noreferrer'
                className={styles.liveProject}
              >
                Visite o site
              </a>
              <a
                href='https://github.com/PedroBennesby/Pokedex'
                target='_blank'
                rel='noreferrer'
                className={styles.codeProject}
              >
                Veja o código
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.otherProjects}>
        <a
          href='https://github.com/PedroBennesby'
          target='_blank'
          rel='noreferrer'
        >
          Outros projetos{' '}
        </a>
      </div>
    </section>
  );
}
