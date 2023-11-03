import css from './modal.module.css';

const Modal = ({ showModal, value, items }) => {
  const car = items.find(item => item.id === Number(value));

  return (
    <div id="backdrop" className={css.backdrop}>
      <div className={css.modal}>
        <div>
          <div>
            <div>
              <p>
                {car.make} <span>{car.model}</span>
              </p>
              <span>{car.year}</span>
            </div>
            <span>{car.rentalPrice}</span>
          </div>
        </div>
        <button type="button" onClick={() => showModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
