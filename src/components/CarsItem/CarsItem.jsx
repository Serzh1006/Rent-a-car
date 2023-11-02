import PropTypes from 'prop-types';

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
  functionalities,
}) => {
  return (
    <li>
      <div>
        <img src={img} alt={description} width="274px" />
      </div>
      <div>
        <div>
          <p>
            {make} <span>{model}</span>
          </p>
          <span>{year}</span>
        </div>
        <span>{rentalPrice}</span>
      </div>
      <div>
        <p>
          {address}|{rentalCompany}|{type}|{model}|{mileage}|{functionalities}
        </p>
      </div>
      <button type="button">Learn More</button>
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
  functionalities: PropTypes.array.isRequired,
};
