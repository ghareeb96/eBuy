import React from 'react';
import { ReactComponent as StarSolid } from "./StarSolid.svg";
import { ReactComponent as StarOutline } from "./StarOutline.svg";

const Rating = ({ rate,changeRate, filtering }) => {
    let stars = Array(5).fill(1);

    return (
        <div className={parseInt(filtering.minRating) === rate ? "rating-option product-rating active-rating" : "rating-option product-rating"} id={rate} onClick={changeRate}>
            {
                stars.map((star, index) => (
                    <>
                        {index < rate ? <StarSolid className="icon stared" key={index} /> : <StarOutline className="icon star-outline" key={index} />}
                    </>

                ))

            }

        </div>
    )
}

export default Rating;