import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
  <nav>
     <NavLink to="/"
      className={styles.link}> Главная</NavLink>
     <NavLink to="/authors" className={styles.link}>Авторы</NavLink>
     <NavLink to="/books" className={styles.link}>Книги</NavLink>
    </nav>
  )
} 

export default Navigation;
