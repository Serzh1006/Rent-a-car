import { useEffect } from 'react';
import css from './modal.module.css';
import cssCar from '../CarsItem/carsItem.module.css';

const Modal = ({ showModal, value, items }) => {
  const car = items.find(item => item.id === Number(value));
  const {
    make,
    model,
    address,
    id,
    year,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    description,
  } = car;

  const createArray = address.split(' ').slice(-2);
  const city = createArray.slice(0, 1).join('').replace(',', ' ').trim();
  const country = createArray.slice(-1).join('');

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
        <div className={css.boxImg}>
          <img src={car.img} alt={description} width="469px" />
        </div>
        <div className={cssCar.modelWrap}>
          <p className={cssCar.markaCar}>
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
        <h2 className={css.titleFuctions}>Accessories and functionalities:</h2>
        <p className={css.infoModal}>{[...accessories, ...functionalities]}</p>
        <h2 className={css.titleFuctions}>Rental Conditions:</h2>
        <p>{rentalConditions}</p>
        <button type="button" onClick={() => showModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
