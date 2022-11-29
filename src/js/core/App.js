import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import ProductsPage from './components/ProductsPage';
import DataPreview from './DataPreview';
import {Link} from 'react-router-dom';

const HomePage = () => {

  return <div>Forside Nyt</div>

}

const NoResult404 = () => {

  return <div>NoResult404</div>

}

function App() {
  return (
    <div className="app">
      
      <nav>
        <Link to="/">Forside</Link> {' '}
        <Link to="/data">Preview</Link> {' '}
        <Link to="/products">Products</Link> {' '}
      </nav>
      
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<DataPreview />} />
     
        <Route exact path="products" element={<ProductsPage/>} />
        <Route path="products/:id" element={<ProductPage />} />

        <Route
          path="*"
          element={<NoResult404 />}
        />

      </Routes>
    </div>
  );
}

export default App;
