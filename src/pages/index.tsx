import styles from './home.module.scss';
import Typical from 'react-typical';
export default function Home() {
  return (
    <section className={styles.sectionContainer}>
      <h3>Olá, me chamo</h3>
      <h1>Pedro Bennesby</h1>
      <h2>
        <Typical
          loop={Infinity}
          wrapper='b'
          steps={[
            'Desenvolvedor Front-End 💻',
            1000,
            'Amante de café ☕',
            1000,
            'Fã de Oasis 🇬🇧',
            1000,
            'Músico frustrado 🎸',
            1000,
            'Mestre Pokémon 👾 ',
            1000,
          ]}
        />
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem
        atque natus ipsam repellat repellendus, quia aperiam sit, eum vitae vero
        recusandae, voluptatem accusamus ea pariatur eligendi et saepe quis.
      </p>

      <div>
        <a href='#contact'>Fale comigo</a>
      </div>
    </section>
  );
}
