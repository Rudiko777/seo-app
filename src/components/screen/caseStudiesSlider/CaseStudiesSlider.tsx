'use client'
// @ts-ignore
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import React, {JSX} from "react";
import '@splidejs/react-splide/css';
import cn from "classnames";
import styles from './CaseStudiesSlider.module.css'
import ArrowLeft from './prev-btn.svg'
import ArrowRight from './Right.svg'
import CaseStudiesItem from "@/components/screen/caseStudies/CaseStudiesItem";
import clientLogo1 from '../../../images/clients/client-logo-item-1.png'
import clientLogo2 from '../../../images/clients/client-logo-item-2.png'
import clientLogo3 from '../../../images/clients/client-logo-item-3.png'
import imageBackground from '../../../images/slider/image.jpg'

const CaseStudiesSlider = (): JSX.Element => {
    return (
        <Splide hasTrack={false} aria-label="My Favorite Images" options={{
            rewind: true,
            pagination: false,
            speed: 1000,

        }}>
            <div className={styles.customWrapper}>
                <SplideTrack>
                    <SplideSlide className={styles.slideContainer}>
                        <CaseStudiesItem
                            title={'Charity organisation'}
                            theme={'light'}
                            image={clientLogo1}
                            background={imageBackground}
                        />
                        <CaseStudiesItem
                            title={'Charity organisation'}
                            theme={'dark'}
                            image={clientLogo2}
                            background={imageBackground}
                        />
                        <CaseStudiesItem
                            title={'Charity organisation'}
                            theme={'light'}
                            image={clientLogo3}
                            background={imageBackground}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <span>Slider2</span>
                    </SplideSlide>
                    <SplideSlide>
                        <span>Slider3</span>
                    </SplideSlide>
                </SplideTrack>
                <div className={cn("splide__arrows", styles.navigation)}>
                    <button className={cn("splide__arrow splide__arrow--prev", styles.prev)}>
                        <span className={styles.prevImage}>
                            <ArrowLeft />
                        </span>
                    </button>
                    <button className={cn("splide__arrow splide__arrow--next", styles.next)}>
                        <span className={styles.nextImage}>
                            <ArrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </Splide>
    );
};

export default CaseStudiesSlider;

