import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorite">Favorite</Link>
    </>
  );
};

export default Navigation;
