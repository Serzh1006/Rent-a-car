import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchCars } from '../services/fetchCarsAPI';
import { fetchNextPage } from '../services/fetchMoreAPI';
import Cars from '../components/Cars/Cars';
import { selectPage } from '../redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  let page = useSelector(selectPage);
  page = 1;

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  return (
    <div>
      {items.length !== 0 && <Cars />}
      <button type="button" onClick={() => dispatch(fetchNextPage())}>
        Load More
      </button>
    </div>
  );
};

export default Catalog;
