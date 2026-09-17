import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register/index.tsx';
import ProductsPage from './pages/products/index.tsx';
import ProfilePage from './pages/profile/index.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/profile' element={<ProfilePage /> } /> 
    </Routes>
  </BrowserRouter>,
);

/*
  document.getElementById('root')
*/
