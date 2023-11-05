import { useEffect } from 'react';
import css from './modal.module.css';

const Modal = ({ showModal, value, items }) => {
  const car = items.find(item => item.id === Number(value));

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
        <div>
          <div>
            <p>
              {car.make} <span>{car.model}</span>
            </p>
            <span>{car.year}</span>
          </div>
          <span>{car.rentalPrice}</span>
        </div>

        <button type="button" onClick={() => showModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
