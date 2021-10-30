import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
// import Container from './components/Container/Container';
// import HomeView from './views/HomeView';
// import AuthorsView from './views/AuthorsView';
// import BooksView from './views/BooksView';
// import BookDetailsView from './views/BookDetailsView';
// import NotFoundView from './views/NotFoundView';

import Navigation from './components/Navigation/Navigation';
import styles from './components/Navigation/Navigation.module.css';

export default function App() {
  return (

    <header className={styles.header}>
      <Navigation />
    </header>

       //  <Container>
    //   <AppBar />

    //    <Switch>
    //     <Route path="/" exact>
    //       <HomeView />
    //     </Route>

    //     <Route path="/authors">
    //       <AuthorsView />
    //     </Route>

    //     <Route path="/books" exact>
    //       <BooksView />
    //     </Route>

    //     <Route path="/books/:bookId">
    //       <BookDetailsView />
    //     </Route>

    //     <Route>
    //       <NotFoundView />
    //     </Route>
    //   </Switch> 
    //  </Container>
  )
}
