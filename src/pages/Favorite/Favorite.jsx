import CarsList from '../../components/Select/Select';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import Cars from '../../components/Cars/Cars';
import css from './favorite.module.css';

const Favorite = () => {
  const favItems = useSelector(selectFavorites);

  return (
    <>
      <CarsList />
      {favItems.length === 0 ? (
        <h2 className={css.title}>You're collection is empty</h2>
      ) : (
        <Cars items={favItems} />
      )}
    </>
  );
};

export default Favorite;
