import CarsList from '../../components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorites, visibleFavorites } from '../../redux/selectors';
import Cars from '../../components/Cars/Cars';
import css from './favorite.module.css';

const Favorite = () => {
  const favItems = useSelector(selectFavorites);
  const visibleFavItems = useSelector(visibleFavorites);

  return (
    <>
      <CarsList />
      {favItems.length === 0 ? (
        <h2 className={css.title}>You're collection is empty</h2>
      ) : (
        <Cars items={visibleFavItems} />
      )}
    </>
  );
};

export default Favorite;
