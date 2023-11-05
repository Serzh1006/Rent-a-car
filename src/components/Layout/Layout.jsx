import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import css from './layout.module.css';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
