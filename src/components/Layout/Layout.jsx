import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
