import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import NoPage from './pages/404/NoPage';

const App: React.FC  = ()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>  );
}

export default App;
