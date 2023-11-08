import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems, selectFavorites } from '../../redux/selectors';
import { addFavCard, removeFavCard } from '../../redux/favoriteSlice';
import Modal from '../Modal/Modal';
import css from './carsItem.module.css';

const CarsItem = ({ objCar }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const favItems = useSelector(selectFavorites);

  const {
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
    functionalities,
    id,
  } = objCar;

  useEffect(() => {
    const isAddedToCollections = favItems.find(car => car.id === id);
    if (isAddedToCollections) {
      setFavorite(true);
    }
  }, [favItems, id]);

  const newAccessories = [...accessories, ...functionalities]
    .sort((a, b) => {
      return a.length - b.length;
    })
    .slice(0, 1);

  const createArray = address.split(' ').slice(-2);
  const city = createArray.slice(0, 1).join('').replace(',', ' ').trim();
  const country = createArray.slice(-1).join('');

  const addToFavorites = idCard => {
    if (!isFavorite) {
      const oneCar = items.find(obj => obj.id === idCard);
      setFavorite(true);
      dispatch(addFavCard(oneCar));
    }
    if (isFavorite) {
      setFavorite(false);
      dispatch(removeFavCard(idCard));
    }
  };

  return (
    <li id={id} className={css.cardItem}>
      {showModal &&
        createPortal(
          <Modal showModal={setShowModal} item={objCar} />,
          document.querySelector('#root')
        )}
      <div className={css.cardContainer}>
        <div className={css.cardImgWrapper}>
          <img src={img} alt={description} width="401px" />
          <button
            onClick={() => addToFavorites(id)}
            className={css.btnFavorite}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill={isFavorite ? '#3470FF' : 'none'}
            >
              <path
                d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
                stroke={isFavorite ? '#3470FF' : 'white'}
                strokeOpacity={isFavorite ? '1' : '0.8'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={css.cardName}>
          <div className={css.modelWrap}>
            <p className={css.markaCar}>
              {`${make} `}
              <span className={css.model}>
                {model.length <= 7 ? model : ''},
              </span>
              <span className={css.yearCar}>{year}</span>
            </p>
          </div>
          <span className={css.priceCar}>{rentalPrice}</span>
        </div>
      </div>

      <div className={css.infoCar}>
        {city}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="16"
          viewBox="0 0 2 16"
          fill="none"
        >
          <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
        </svg>
        {country}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="16"
          viewBox="0 0 2 16"
          fill="none"
        >
          <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
        </svg>
        {rentalCompany}
      </div>
      <div className={css.infoCarSecond}>
        {type}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="16"
          viewBox="0 0 2 16"
          fill="none"
        >
          <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
        </svg>
        {model}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="16"
          viewBox="0 0 2 16"
          fill="none"
        >
          <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
        </svg>
        {mileage}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="16"
          viewBox="0 0 2 16"
          fill="none"
        >
          <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
        </svg>
        {newAccessories}
      </div>
      <button
        className={css.learMoreBtn}
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Learn More
      </button>
    </li>
  );
};

export default CarsItem;

CarsItem.propTypes = {
  objCar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }),
};
