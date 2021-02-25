import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/';
/*import {Link} from "react-router-dom";*/
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar/';
import Footer from '../../components/Footer/';

import style from '../../components/Menu/Menu.module.sass'
import carouselConstants from '../../carouselConstants';
/*
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
*/


const SocialResponsibility = (props) => {

    return (
        <>
            <Header/>
            <div className={style.greyContainer}>
                <SlideBar images={carouselConstants.mainSliderImages}
                          carouselType={carouselConstants.MAIN_SLIDER}/>
            </div>

            <Footer/>
        </>
    )
};


export default SocialResponsibility;