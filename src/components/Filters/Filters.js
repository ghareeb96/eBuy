import React from 'react';
import "./Filters.scss";
import RangeSlider from './RangeSlider';
import  Rating  from './Rating';

const Filters = ({ colors }) => {
    return (
        <div className="filters">
            <div className="filter price-range">
                <div className="filter-heading">
                    <h5>Price Range</h5>
                </div>
                <div className="filter-action">
                    <RangeSlider />
                </div>
            </div>
            <div className="filter color">
                <div className="filter-heading">
                    <h5>Color</h5>
                </div>
                <div className="filter-action">
                    <div className="color-menu">
                        {
                            colors.map(color => (
                                <h4 className="color-select" id={color} >{color}</h4>
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
                    <Rating rate={5}/>
                    <Rating rate={4}/>
                    <Rating rate={3}/>
                    <Rating rate={2}/>
                    <Rating rate={1}/>
                </div>
            </div>
        </div>
    )
}

export default Filters;
