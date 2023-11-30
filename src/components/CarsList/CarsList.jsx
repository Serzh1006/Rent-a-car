// import Select from 'react-select';
import { Select } from '@chakra-ui/react';
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
    // <>
    //   <div className={css.app}>
    //     <Select
    //       defaultValue={selectedOption}
    //       onChange={setSelectedOption}
    //       options={options}
    //       placeholder={'Enter the text'}
    //     />
    //   </div>
    //   <button
    //     className={css.btnSearch}
    //     type="button"
    //     onClick={() => getValueFromList()}
    //   >
    //     Search
    //   </button>
    // </>

    <>
      <Select name="carslist" placeholder="Select All">
        <option value="buick">Buick</option>
        <option value="volvo">Volvo</option>
        <option value="hummer">HUMMER</option>
        <option value="subaru">Subaru</option>
        <option value="mitsubishi">Mitsubishi</option>
        <option value="nissan">Nissan</option>
        <option value="lincoln">Lincoln</option>
        <option value="gmc">GMC</option>
        <option value="hyundai">Hyundai</option>
        <option value="mini">MINI</option>
        <option value="bentley">Bentley</option>
        <option value="'mercedes-benz">Mercedes-Benz</option>
        <option value="aston martin">Aston Martin</option>
        <option value="lamborghini">Lamborghini</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="chevrolet">Chevrolet</option>
        <option value="chrysler">Chrysler</option>
        <option value="kia">Kia</option>
        <option value="land rover">Land Rover</option>
        <option value="pontiac">Pontiac</option>
      </Select>
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
