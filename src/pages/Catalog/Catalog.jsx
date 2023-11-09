import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cars from '../../components/Cars/Cars';
import CarsList from '../../components/CarsList/CarsList';
import { selectItems, selectCount, visibleItems } from '../../redux/selectors';
import { fetchCars } from '../../services/fetchCarsAPI';
import { fetchNextPage } from '../../services/fetchMoreAPI';
import { getDataLength } from '../../services/getDataLength';
import css from './catalog.module.css';

const Catalog = () => {
  let [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const filterItems = useSelector(visibleItems);
  const countData = useSelector(selectCount);

  useEffect(() => {
    dispatch(getDataLength());
    return;
  }, [dispatch]);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchCars(page));
      return;
    }
    dispatch(fetchNextPage(page));
  }, [dispatch, page]);

  return (
    <>
      <CarsList />
      {items.length !== 0 && <Cars items={filterItems} />}
      {items.length !== countData && (
        <button
          className={css.btnLoadMore}
          type="button"
          onClick={() => setPage(prevState => prevState + 1)}
        >
          Load More
        </button>
      )}
    </>
  );
};

export default Catalog;
