import React, { useState, useEffect } from 'react';
import './app.scss';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import Slider from './components/Slider/Slider';

function App() {
  const [products, setProducts] = useState(null)
  const [categories, setCategories] = useState(null)


  const getProducts = () => {
    fetch("http://test-api.edfa3ly.io/product")
      .then(res => res.json())
      .then(data => setProducts(data))
  }

  const getCategories = () => {
    fetch("http://test-api.edfa3ly.io/category")
      .then(res => res.json())
      .then(data => setCategories(data))
  }


  useEffect(() => {
    getProducts();
    getCategories();
  }, [])

  return (
    <>
      {
        products !== null ?
          <div className="App">
            <Header />

            <div className="new-arrivals-section">
              <h2 className="section-heading">New Arrivals</h2>
              <div className="container">
                <div className="slider-container">
                  <Slider items={products.slice(20, 30)} />
                </div>
              </div>
            </div>

            <div className="products-section">
              <h2 className="section-heading">Browse Products</h2>
              <div className="container">
                <div className="filters-side"></div>
                <div className="products-side">
                  <div className="categories"></div>
                  <div className="products"></div>
                </div>
              </div>
            </div>


          </div>


          :
          <>
          </>
      }

    </>
  );
}

export default App;
