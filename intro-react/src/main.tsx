import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ProfilePage from './pages/profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailProductPage from './pages/detail-product/index.tsx';
import NotFoundPage from './pages/not-found/index.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/detail-product/:productName' element={<DetailProductPage />} />
      <Route path='*' element={<NotFoundPage /> } />
    </Routes>
  </BrowserRouter>,
);

/*
  document.getElementById('root')
*/
