import React from "react";
import style from "./SlideBar.module.sass";
import Flickity from 'react-flickity-component'
import carouselConstants from '../../carouselConstants';
import './flickity.css';


const SliderBar = props => {
    const options = {
        draggable: true,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: true,
        pauseAutoPlayOnHover: false,
        groupCells: false,
    };

    const getStyleName = () => {
        const {carouselType} = props;
        switch (carouselType) {
            case carouselConstants.MAIN_SLIDER:
                return style.mainCarousel;

        }
    };


    const renderSlides = () => {
        const {carouselType} = props;
        switch (carouselType) {
            case carouselConstants.MAIN_SLIDER: {
                return Object.keys(props.images).map((key, index) => {
                    return (
                        <img src={props.images[key]}
                             alt={"slide"}
                             key={index}
                             className={style["carousel-cell"]}
                        />
                    )
                })
            }

        }
    };
    return (
        <Flickity className={getStyleName()}
                  elementType={'div'}
                  options={options}>
            {
                renderSlides()
            }
        </Flickity>
    );

};

export default SliderBar;
