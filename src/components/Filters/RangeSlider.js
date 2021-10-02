import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function RangeSlider() {
    const [value, setValue] = React.useState([100, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="price-range-values">
                <h4>{value[0]}</h4>
                <h4>{value[1]}</h4>
            </div>

            <Box sx={{ width: 180 }}>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min = {100}
                    max = {1000}
                />
            </Box>
        </>
    );
}
