import PropTypes from 'prop-types';
import CarsItem from '../CarsItem/CarsItem';
import css from './cars.module.css';

const Cars = ({ items }) => {
  return (
    <>
      <ul className={css.cardList}>
        {items.map(obj => {
          return <CarsItem key={obj.id} objCar={obj} />;
        })}
      </ul>
    </>
  );
};

export default Cars;

Cars.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
