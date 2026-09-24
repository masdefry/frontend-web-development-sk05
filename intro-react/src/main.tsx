import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register/index.tsx';
import ProductsPage from './pages/products/index.tsx';
import ProfilePage from './pages/profile/index.tsx';
import TodosPages from './pages/todos/index.tsx';
import ProductsManagementPage from './pages/products-management/index.tsx';
import CreateProduct from './pages/products-management/create/index.tsx';
import NewTodosPages from './pages/new-todos/index.tsx';
import GlobalStateManagementPage from './pages/global-state-management/index.tsx';
import Layout from './layout.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<Layout />}>
        <Route index element={<App />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/todos' element={<TodosPages />} />
        <Route
          path='/products-management'
          element={<ProductsManagementPage />}
        />
        <Route path='/products-management/create' element={<CreateProduct />} />
        <Route path='/new-todos' element={<NewTodosPages />} />
        <Route
          path='/global-state-management'
          element={<GlobalStateManagementPage />}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);

/*
  document.getElementById('root')
*/
