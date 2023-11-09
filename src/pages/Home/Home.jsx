import img from '../../img/slider-bg.png';
import css from './home.module.css';

const Home = () => {
  return (
    <div className={css.wrapTitle}>
      <img src={img} alt="backgroundImg" />
      <h1 className={css.titlePrimary}>Company Rental Car</h1>
    </div>
  );
};

export default Home;
