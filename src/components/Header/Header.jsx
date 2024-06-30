import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../context/DarkmodeContext";
import styles from "./Header.module.css";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header({ filters, selectedFilter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {darkMode && <FontAwesomeIcon icon={faSun} />}
        {!darkMode && <FontAwesomeIcon icon={faMoon} />}
      </button>
      <ul className={styles.filters}>
        {filters.map((filter, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === selectedFilter && styles.selected
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
