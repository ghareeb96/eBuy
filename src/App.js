import React, { useState, useEffect } from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products'

function App() {
  const initialFilters = {
    categoryId: 1,
    color: 'all',
    priceRange: [1, 2000],
    minRating: 1
  }

  const [products, setProducts] = useState(null)
  const [categories, setCategories] = useState(null)
  const [colors, setColors] = useState([])
  const [filtering, setFiltering] = useState(initialFilters);
  const [filteredProducts, setFilteredProducts] = useState(products);


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

  const changeCategory = (e) => {
    setFiltering({ ...filtering, categoryId: e.target.id })
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

  useEffect(() => {
    let finalProducts = products;

    if (products !== null) {
      if (parseInt(filtering.categoryId) !== 0) {
        finalProducts = finalProducts.filter(product => product.categoryId === parseInt(filtering.categoryId))
      }else{
        finalProducts = products
      }
      
      if (filtering.color !== 'all') {
        finalProducts = finalProducts.filter(product => product.color === filtering.color)
      }else{
        finalProducts = products
        if (parseInt(filtering.categoryId) !== 0) {
          finalProducts = finalProducts.filter(product => product.categoryId === parseInt(filtering.categoryId))
        }
      }

      if (filtering.minRating !== 1) {
        finalProducts = finalProducts.filter(product => product.rating >= filtering.minRating)
      }

      finalProducts = finalProducts.filter(product => product.price >= filtering.priceRange[0] && product.price <= filtering.priceRange[1])

      setFilteredProducts(finalProducts);


    }


  }, [filtering, products])

  return (
    <>
      {
        filteredProducts !== null ?
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
                  <Filters
                    colors={colors}
                    filtering={filtering}
                    setFiltering={setFiltering}
                  />
                </div>
                <div className="products-side">
                  <div className="categories">
                    <div className={parseInt(filtering.categoryId) === 0 ?"category active-category" : "category"} id={0} onClick={changeCategory}>
                      <h4>All</h4>
                    </div>
                    {
                      categories ?

                        categories.map(category => (
                          <div className={parseInt(filtering.categoryId) === category.id ? "category active-category" : "category"} id={category.id} onClick={changeCategory}>
                            <h4>{category.name}</h4>
                          </div>
                        ))
                        :
                        <> </>
                    }
                  </div>
                  <div className="products">
                    <Products products={filteredProducts} />
                  </div>
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
