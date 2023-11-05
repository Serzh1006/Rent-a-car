import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import Favorite from '../pages/Favorite/Favorite';
import Layout from '../components/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

export default App;
