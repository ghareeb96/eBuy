import React, { useState, useEffect } from 'react';
import './app.scss';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import Slider from './components/Slider/Slider';
import Filters from './components/Filters/Filters';

function App() {
  const [products, setProducts] = useState(null)
  const [categories, setCategories] = useState(null)
  const [colors, setColors] = useState([])




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

  useEffect(() => {
    if (products !== null && colors.length === 0) {
      const allColors = [];
      products.forEach(product => {
        if (!allColors.includes(product.color)) {
          allColors.push(product.color)
        }
      })
      setColors(allColors)
    }
  }, [products])

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
                <div className="filters-side">
                  <Filters colors={colors}/>
                </div>
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
