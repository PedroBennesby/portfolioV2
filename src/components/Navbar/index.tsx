import styles from "./styles.module.scss";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <header className={styles.headerContainer}>
      <a href="#">
        <Image width={64} height={64} src="/logopng.png" alt="Pedro Bennesby" />
      </a>
      <nav>
        <ul>
          <li>
            <a className={styles.hvrUnderlineFromLeft} href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a className={styles.hvrUnderlineFromLeft} href="#technologies">
              Tecnologias
            </a>
          </li>
          <li>
            <a className={styles.hvrUnderlineFromLeft} href="#projects">
              Projetos
            </a>
          </li>
          <li>
            <a className={styles.hvrUnderlineFromLeft} href="#contact">
              Contato
            </a>
          </li>
        </ul>

        {/* <div className={styles.menuHamburguer}>
          <i onClick={this.burgerToggle}>
            <FontAwesomeIcon icon={faBars} />
          </i>
          <div className="narrowLinks">
            <a href="#about" onClick={this.burgerToggle}>
              Sobre
            </a>
            <a href="#technologies" onClick={this.burgerToggle}>
              Tecnologias
            </a>
            <a href="#projects" onClick={this.burgerToggle}>
              Projetos
            </a>
            <a href="#contact" onClick={this.burgerToggle}>
              Contato
            </a>
          </div>
        </div> */}
      </nav>
    </header>
  );
}
