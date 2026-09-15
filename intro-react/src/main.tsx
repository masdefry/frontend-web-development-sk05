import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register/index.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>,
);

/*
  document.getElementById('root')
*/
