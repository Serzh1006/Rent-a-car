import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/selectors';
import CarsItem from '../CarsItem/CarsItem';

const Cars = ({ showModal, cardID }) => {
  const items = useSelector(selectItems);

  return (
    <>
      <ul>
        {items.map(obj => {
          return (
            <CarsItem
              key={obj.id}
              id={obj.id}
              img={obj.img}
              description={obj.description}
              make={obj.make}
              model={obj.model}
              year={obj.year}
              rentalPrice={obj.rentalPrice}
              address={obj.address}
              rentalCompany={obj.rentalCompany}
              type={obj.type}
              mileage={obj.mileage}
              functionalities={obj.functionalities}
              showModal={showModal}
              cardID={cardID}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Cars;
