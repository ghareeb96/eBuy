import React from 'react';
import "./Filters.scss";
import RangeSlider from './RangeSlider';
import Rating from './Rating';

const Filters = ({ colors, filtering, setFiltering }) => {

    const changeColor = (e) => {
        setFiltering({ ...filtering, color: e.target.id })
    }
    const changeRate = (e) => {
        setFiltering({ ...filtering, minRating: e.target.id })
    }


    return (
        <div className="filters">
            <div className="filter price-range">
                <div className="filter-heading">
                    <h5>Price Range</h5>
                </div>
                <div className="filter-action">
                    <RangeSlider
                        filtering={filtering}
                        setFiltering={setFiltering}
                    />
                </div>
            </div>
            <div className="filter color">
                <div className="filter-heading">
                    <h5>Color</h5>
                </div>
                <div className="filter-action">
                    <div className="color-menu">
                    <h4 className={filtering.color === "all"? "color-select active-color" : "color-select"} id= "all" onClick={changeColor}>All</h4>

                        {
                            colors.map(color => (
                                <h4 className={filtering.color === color ? "color-select active-color" : "color-select"} id={color} onClick={changeColor}>{color}</h4>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className="filter rating">
                <div className="filter-heading">
                    <h5>Minimum Average Rating</h5>
                </div>
                <div className="filter-action">
                    <Rating rate={5} changeRate={changeRate} filtering={filtering}/>
                    <Rating rate={4} changeRate={changeRate} filtering={filtering}/>
                    <Rating rate={3} changeRate={changeRate} filtering={filtering}/>
                    <Rating rate={2} changeRate={changeRate} filtering={filtering}/>
                    <Rating rate={1} changeRate={changeRate} filtering={filtering}/>
                </div>
            </div>
        </div>
    )
}

export default Filters;
