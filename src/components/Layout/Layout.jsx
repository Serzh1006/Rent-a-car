import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import { Watch } from 'react-loader-spinner';
import css from './layout.module.css';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <div className={css.container}>
          <Suspense
            fallback={
              <div className={css.loading}>
                <Watch
                  height="80"
                  width="80"
                  radius="48"
                  color="#0b44cd"
                  ariaLabel="watch-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
