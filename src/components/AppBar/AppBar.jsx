import Navigation from '../Navigation/Navigation';
import css from './header.module.css';

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
