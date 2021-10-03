import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const RangeSlider = ({filtering, setFiltering}) => {

    const handleChange = (event, newValue) => {
        setFiltering({...filtering, priceRange : newValue});
    };

    return (
        <>
            <div className="price-range-values">
                <h4>{filtering.priceRange[0]}</h4>
                <h4>{filtering.priceRange[1]}</h4>
            </div>

            <Box sx={{ width: 180 }}>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={filtering.priceRange}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min = {1}
                    max = {2000}
                />
            </Box>
        </>
    );
}

export default RangeSlider;