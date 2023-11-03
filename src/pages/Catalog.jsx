import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cars from '../components/Cars/Cars';
import Modal from '../components/Modal/Modal';
import { selectItems, selectCount } from '../redux/selectors';
import { fetchCars } from '../services/fetchCarsAPI';
import { fetchNextPage } from '../services/fetchMoreAPI';
import { getDataLength } from '../services/getDataLength';

const Catalog = () => {
  let [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [idCard, setIdCard] = useState(0);

  const dispatch = useDispatch();
  const items = useSelector(selectItems);
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
    <div>
      {showModal &&
        createPortal(
          <Modal showModal={setShowModal} value={idCard} items={items} />,
          document.querySelector('#root')
        )}
      {items.length !== 0 && (
        <Cars cardID={setIdCard} showModal={setShowModal} />
      )}
      {items.length !== countData && (
        <button
          type="button"
          onClick={() => setPage(prevState => prevState + 1)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Catalog;
