import React, { useState, useEffect } from 'react'
import "./Slider.scss";
import Card from "../ProductCard/ProductCard"



const Slider = ({ items }) => {
    const [sliderPos, setSliderPos] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(null)
    const [slider, setSlider] = useState(null)
    const [stopSlide, setStopSlide] = useState(false)
    let sliding
    let previewedCards = () => {
        if (window.screen.availWidth < 400) {
            return 1;
        } else if (window.screen.availWidth < 800) {
            return 2;
        } else if (window.screen.availWidth < 1200) {
            return 3;
        } else if (window.screen.availWidth < 1600) {
            return 4;
        } else {
            return 5;
        }
    }
    const cardWidth = (window.screen.availWidth * 0.90) / previewedCards();
    const slideRight = () => {
        if (Math.abs(sliderPos) + window.innerWidth < sliderWidth) {
            setSliderPos(sliderPos - sliderWidth / slider.children.length)
        } else {
            setSliderPos(0)
        }
    }

    useEffect(() => {
        if (sliderWidth === null) {
            const getWidth = setTimeout(() => {
                setSliderWidth(slider.getBoundingClientRect().width)
            },
                2000)
            return () => clearTimeout(getWidth)
        }
    }, [slider]);


    useEffect(() => {
        if (!stopSlide) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            sliding = setInterval(() => {
                slideRight()
            }, 2000);
            return () => clearInterval(sliding);
        }
    }, [sliderPos, sliderWidth]);

    return (
        <div className="slider">
            <div

                className="slider-content"
                onMouseEnter={() => {
                    setStopSlide(true)
                    clearInterval(sliding)
                }
                }
                onMouseLeave={() => {
                    setStopSlide(false)
                    slideRight()
                }}
            >
                <div
                    className="slider-cards-container"
                    style={{ left: `${sliderPos}px` }}
                    ref={(el) => {
                        setSlider(el)
                    }}
                >
                    {items.map(item => (
                        <div className="card-container" style={{ width: cardWidth }}>
                            <Card item={item}
                                key={`${item.id} ${item.name ? item.name : item.title} `} />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default Slider;