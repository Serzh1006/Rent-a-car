import Select from 'react-select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByName } from '../../redux/filterSlice';
import css from './select.module.css';
import { useEffect } from 'react';

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
  { value: 'mercedes-benz', label: 'Mercedes-Benz' },
  { value: 'aston martin', label: 'Aston Martin' },
  { value: 'pontiac', label: 'Pontiac' },
  { value: 'lamborghini', label: 'Lamborghini' },
  { value: 'audi', label: 'Audi' },
  { value: 'bmw', label: 'BMW' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'chrysler', label: 'Chrysler' },
  { value: 'kia', label: 'Kia' },
  { value: 'land rover', label: 'Land Rover' },
];

const CarsList = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const getValueFromList = () => {
    dispatch(filterByName(selectedOption.value));
  };

  useEffect(() => {
    dispatch(filterByName(''));
  }, [dispatch]);

  return (
    <>
      <div className={css.app}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder={'Enter the text'}
        />
      </div>
      <button
        className={css.btnSearch}
        type="button"
        onClick={() => getValueFromList()}
      >
        Search
      </button>
    </>
  );
};
export default CarsList;
