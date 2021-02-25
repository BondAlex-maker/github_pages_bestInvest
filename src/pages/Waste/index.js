import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/';
/*import {Link} from "react-router-dom";*/
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar/';
import Footer from '../../components/Footer/';
import styles from './Waste.module.sass';
import style from '../../components/Menu/Menu.module.sass'
import carouselConstants from '../../carouselConstants';
/*
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
*/


const Waste = (props) => {

    return (
        <>
            <Header/>
            <div className={style.greyContainer}>
                <SlideBar images={carouselConstants.mainSliderImages}
                          carouselType={carouselConstants.MAIN_SLIDER}/>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.wasteInfo}>
                    Our company constantly buys the following waste for further processing and metal recovery ;
                </div>
                <ul className={style.ulDisplayBlock}>
                    <li>• Aluminium dross / skimming</li>
                    <li>• Zinc dross /skimming, slag, dust</li>
                    <li>•Copper sludge

                    </li>
                    <li>•Copper - nickel sludge

                    </li>
                    <li>• Nickel sludge

                    </li>
                    <li>• Nickel-tungsten sludge

                    </li>
                    <li>• Sludge containing tungsten

                    </li>
                    <li>• Sludge containing molybdenum

                    </li>
                    <li>• Sludge containing cobalt

                    </li>
                    <li>• Sludge, dust from chemical industries

                    </li>
                    <li>• Tails after beneficiation

                    </li>
                    <li>• Waste of any chemical composition with a minimum content : <br/>

                        Rhodium, palladium, platinum, iridium, gold, silver
                    </li>
                </ul>
                <div style={{marginBottom:'30px'}}>


                <div className={styles.wasteImgContainer}>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>

                </div>
                <div className={styles.wasteImgContainer}>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>
                    <div><img src="https://static.wixstatic.com/media/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.jpg/v1/fill/w_163,h_223,al_c,q_80,usm_0.66_1.00_0.01/173ee1_d39a689df5ed424996202ac9b342f48f~mv2.webp" alt="waste"/></div>

                </div>
            </div>
            </div>


            <Footer/>
        </>
    )
};


export default Waste;