import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
  <nav>
     <NavLink 
     exact
     to="/"
     className={styles.link}
     activeClassName={styles.activeLink}
     >
        Главная
    </NavLink>

     <NavLink
     exact
      to="/authors"
      className={styles.link}
      activeClassName={styles.activeLink}
      >
        Авторы
      </NavLink>

     <NavLink 
     exact
      to="/books"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Книги
    </NavLink>

    </nav>
  )
} 

export default Navigation;
