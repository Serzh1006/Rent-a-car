import PropTypes from 'prop-types';
import css from './carsItem.module.css';

const CarsItem = ({
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
  showModal,
  id,
  cardID,
}) => {
  const newAccessories = [...accessories, ...functionalities]
    .sort((a, b) => {
      return a.length - b.length;
    })
    .slice(0, 1);

  const createArray = address.split(' ').slice(-2);
  const city = createArray.slice(0, 1).join('').replace(',', ' ').trim();
  const country = createArray.slice(-1).join('');

  return (
    <li id={id} className={css.cardItem}>
      <div className={css.cardContainer}>
        <div className={css.cardImgWrapper}>
          <img src={img} alt={description} width="401px" />
        </div>
        <div className={css.cardName}>
          <div className={css.modelWrap}>
            <p className={css.markaCar}>
              {`${make} `}
              <span className={css.model}>
                {model.length < 7 ? model : ''},
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
        onClick={e => {
          cardID(e.currentTarget.parentNode.id);
          showModal(true);
        }}
      >
        Learn More
      </button>
    </li>
  );
};

export default CarsItem;

CarsItem.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
  showModal: PropTypes.func.isRequired,
};
