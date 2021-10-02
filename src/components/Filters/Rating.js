import React from 'react';
import { ReactComponent as StarSolid } from "./StarSolid.svg";
import { ReactComponent as StarOutline } from "./StarOutline.svg";

const Rating = ({ rate }) => {
    let stars = Array(5).fill(1);

    return (
        <div className="rating-option product-rating" id={`rating${rate}`}>
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