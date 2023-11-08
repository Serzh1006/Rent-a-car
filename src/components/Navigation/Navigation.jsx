import { Link } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  return (
    <>
      <Link className={css.linkPage} to="/">
        Home
      </Link>
      <Link className={css.linkPage} to="/catalog">
        Catalog
      </Link>
      <Link className={css.linkPage} to="/favorite">
        Favorites
      </Link>
    </>
  );
};

export default Navigation;
