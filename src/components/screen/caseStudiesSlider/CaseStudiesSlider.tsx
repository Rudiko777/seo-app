'use client'
import {Splide, SplideSlide} from "@splidejs/react-splide";
import React from "react";


const CaseStudiesSlider = () => {
    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <span>Slider1</span>
            </SplideSlide>
            <SplideSlide>
                <span>Slider2</span>
            </SplideSlide>
        </Splide>
    );
};

export default CaseStudiesSlider;

