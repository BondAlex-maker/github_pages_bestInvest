import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/';
/*import {Link} from "react-router-dom";*/
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar/';
import Footer from '../../components/Footer/';
import style from '../../components/Menu/Menu.module.sass'

import styles from './Home.module.sass';
import carouselConstants from '../../carouselConstants';
/*
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
*/


const Home = (props) => {

    return (
        <>
            <Header/>
            <div className={style.greyContainer}>
                <SlideBar images={carouselConstants.mainSliderImages}
                          carouselType={carouselConstants.MAIN_SLIDER}/>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoContainerColumn}>
                    <div className={styles.infoHeader}>
                        About us
                    </div>
                    <div className={styles.divMargin}>The company BURNABY TRADING LLP was founded on December 7, 2011.</div>
                    <div className={styles.divMargin}>The main mission of the company is the purchase, sale, processing of metallurgical and chemical
                        waste containing non-ferrous and precious metals.
                    </div>
                    <div className={styles.divMargin}>Our company has many years of long-term relationships with manufacturers and consumers in the following areas of the production cycle and process.</div>
                    <ul>
                        <li>• Production and consumption of aluminum.</li>
                        <li>• Production and consumption of zinc.</li>
                    </ul>
                </div>

                <div className={styles.infoContainerColumn}>
                    <div>
                        <div className={styles.infoHeader}>
                            Recycling waste
                        </div>
                        <ul>
                            <li>• Aluminium dross / skimming</li>
                            <li>• Zinc dross /skimming, slag, dust</li>
                            <li>• Copper sludge</li>
                            <li>• Copper nickel sludge</li>
                            <li>• Nickel sludge</li>
                            <li>• Nickel-tungsten sludge</li>
                            <li>• Sludge containing tungsten</li>
                            <li>• Sludge containing molybdenum</li>
                            <li>• Sludge containing cobalt</li>
                            <li>• Sludge, dust from chemical industries</li>
                        </ul>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
};


export default Home;