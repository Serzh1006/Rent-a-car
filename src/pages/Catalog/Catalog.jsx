import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Cars from '../../components/Cars/Cars';
import Modal from '../../components/Modal/Modal';
import { selectItems, selectCount } from '../../redux/selectors';
import { fetchCars } from '../../services/fetchCarsAPI';
import { fetchNextPage } from '../../services/fetchMoreAPI';
import { getDataLength } from '../../services/getDataLength';
import css from './catalog.module.css';

const Catalog = () => {
  let [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [idCard, setIdCard] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

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

  const options = [
    { value: 'buick', label: 'Buick' },
    { value: 'volvo', label: 'Volvo' },
    { value: 'hummer', label: 'HUMMER' },
    { value: 'subaru', label: 'Subaru' },
    { value: 'mitsubishi', label: 'Mitsubishi' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'lincoln', label: 'Lincoln' },
    { value: 'gmc', label: 'GMC' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'mini', label: 'MINI' },
    { value: 'bentley', label: 'Bentley' },
    { value: 'mercedesbenz', label: 'Mercedes-Benz' },
    { value: 'astonmartin', label: 'Aston Martin' },
    { value: 'pontiac', label: 'Pontiac' },
    { value: 'lamborghini', label: 'Lamborghini' },
    { value: 'audi', label: 'Audi' },
    { value: 'bmw', label: 'BMW' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'chrysler', label: 'Chrysler' },
    { value: 'kia', label: 'Kia' },
    { value: 'land', label: 'Land' },
  ];

  return (
    <>
      {showModal &&
        createPortal(
          <Modal showModal={setShowModal} value={idCard} items={items} />,
          document.querySelector('#root')
        )}
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder={'Enter the text'}
        />
      </div>
      {items.length !== 0 && (
        <Cars cardID={setIdCard} showModal={setShowModal} />
      )}
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
