import React, { useState, useEffect } from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products'

function App() {
  const initialFilters = {
    categoryId: 0,
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
      if (filtering.categoryId !== 0) {
        finalProducts = finalProducts.filter(product =>  product.categoryId === parseInt(filtering.categoryId))
      }

      if (filtering.color !== 'all') {
        finalProducts = finalProducts.filter(product => product.color === filtering.color)
      }


    }


  }, [filtering, products])

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
                  <Filters colors={colors} />
                </div>
                <div className="products-side">
                  <div className="categories">
                    <div className="category active-category" id="all">
                      <h4>All</h4>
                    </div>
                    {
                      categories ?

                        categories.map(category => (
                          <div className="category" id={category.id} onClick={changeCategory}>
                            <h4>{category.name}</h4>
                          </div>
                        ))
                        :
                        <> </>
                    }
                  </div>
                  <div className="products">
                    <Products products={products} />
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
