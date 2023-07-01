import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img alt="" /> My App
      </div>
      <ul className={styles.navigation}>
        <li>
          <Link className={styles.navElement} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/characters">
            Personajes
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/episodes">
            Episodios
          </Link>
        </li>
        <li>
          <Link className={styles.navElement} to="/places">
            Ubicaciones
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
