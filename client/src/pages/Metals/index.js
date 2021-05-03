import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
/*import {Link} from "react-router-dom";*/
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar';
import Footer from '../../components/Footer';
import styles from './Metals.module.sass'
import style from '../../components/Menu/Menu.module.sass'
import carouselConstants from '../../carouselConstants';
/*
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
*/


const Metals = (props) => {

    return (
        <>
            <Header/>
            <div className={style.greyContainer}>
                <SlideBar images={carouselConstants.metalsSliderImages}
                          carouselType={carouselConstants.MAIN_SLIDER}/>
            </div>
            <div className={styles.center}>
                <div className={styles.theme}>
                    <p>Our company specializes in the processing of complex metallurgical and chemical waste with
                    further
                    extraction of the following metals:</p>
                </div>

                <div className={styles.metalsImgContainer}>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                </div>
                <div className={styles.metalsImgContainer}>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                </div>
                <ul>
                    <li>- BURNABY TRADING LLP is always interested in long term contracts and reliable suppliers.</li>
                    <li>- We will answer all your question and provide information that interests you.</li>
                    <li>- contact@burnaby-trading.com</li>
                </ul>
            </div>


            <Footer/>
        </>
    )
};


export default Metals;