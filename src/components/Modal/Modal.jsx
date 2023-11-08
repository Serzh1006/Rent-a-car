import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './modal.module.css';
import cssCar from '../CarsItem/carsItem.module.css';

const Modal = ({ showModal, item }) => {
  const {
    img,
    make,
    model,
    address,
    id,
    year,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    rentalPrice,
    mileage,
  } = item;

  const createArray = address.split(' ').slice(-2);
  const city = createArray.slice(0, 1).join('').replace(',', ' ').trim();
  const country = createArray.slice(-1).join('');
  const formattedConditions = rentalConditions
    .replace('\n', ' ')
    .replace('\n', ' ')
    .split(' ');

  let deposit = '';
  const license = formattedConditions.slice(3, 6);

  const isInclude = formattedConditions.includes('license');
  if (isInclude) {
    const getIndex = formattedConditions.indexOf('license');
    deposit = formattedConditions.slice(getIndex + 1);
  }

  const closeModal = e => {
    if (e.target.id === 'backdrop') {
      showModal(false);
    }
  };

  const closeByKeyPress = e => {
    if (e.code === 'Escape') {
      showModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeByKeyPress);
  });

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', closeByKeyPress);
    };
  });

  return (
    <div onClick={e => closeModal(e)} id="backdrop" className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.containerModal}>
          <button
            className={css.btnCloseModal}
            type="button"
            onClick={() => showModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18"
                stroke="#121417"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#121417"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={css.boxImg}>
            <img src={img} alt={description} width="469px" />
          </div>
          <div>
            <p className={css.marka}>
              {`${make} `}
              <span className={cssCar.model}>
                {model.length <= 7 ? model : ''},
              </span>
              <span className={cssCar.yearCar}>{year}</span>
            </p>
          </div>
          <div className={css.infoModal}>
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
            {`Id:${id}`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
            >
              <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
            </svg>
            {`Year:${year}`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
            >
              <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
            </svg>
            {`Type:${type}`}
          </div>
          <div className={css.infoModalSecond}>
            {`Fuel Consumption:${fuelConsumption}`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
            >
              <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
            </svg>
            {`Engine Size:${engineSize}`}
          </div>
          <p className={css.description}>{description}</p>
          <h2 className={css.titleFuctions}>
            Accessories and functionalities:
          </h2>
          <p className={css.accessoriesText}>
            {[...accessories, ...functionalities].join(' | ')}
          </p>
          <h2 className={css.titleFuctions}>Rental Conditions:</h2>
          <div className={css.importantInfo}>
            <p>
              Minimum age:
              <span className={css.age}>{formattedConditions[2]}</span>
            </p>
            <p>{license.join(' ')}</p>
          </div>

          <div className={css.payInfo}>
            <p>{deposit.join(' ')}</p>
            <p>
              Mileage:
              <span className={css.mileage}>
                {(mileage / 1000).toString().replace('.', ',')}
              </span>
            </p>
            <p>
              Price:<span className={css.price}>{rentalPrice}</span>
            </p>
          </div>

          <a className={css.rentalLink} href="tel:+380730000000">
            Rental Car
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalConditions: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }),
};
