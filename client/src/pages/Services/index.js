import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
/*import {Link} from "react-router-dom";*/
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar';
import Footer from '../../components/Footer';

import style from '../../components/Menu/Menu.module.sass'
import carouselConstants from '../../carouselConstants';
import styles from './Services.module.sass';
/*
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
*/


const Services = (props) => {

    return (
        <>
            <Header/>
            <div className={style.greyContainer}>

                <SlideBar images={carouselConstants.servicesSliderImages}
                          carouselType={carouselConstants.MAIN_SLIDER}/>
            </div>
            <div className={styles.center}>
                <div className={styles.marginBottom1}>
                    <div className={styles.marginBottom2}>Our company provides customers with services for the transportation</div>
                    <div className={styles.marginBottom2}>of both hazardous and non-hazardouz waste from any country.</div>
                    <div className={styles.marginBottom2}>Buying or disposing of any waste, our company always takes care of its customers.</div>
                </div>
                <div className={styles.marginBottom1}>We will always offer you the best conditions.</div>
                <div className={styles.marginBottom3}>
                    contact@burnaby-trading.com
                </div>
            </div>

            <Footer/>
        </>
    )
};


export default Services;