import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
/*import {Link} from "react-router-dom";*/
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar';
import Footer from '../../components/Footer';
import styles from './SocialResponsibility.module.sass'
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
                <SlideBar images={carouselConstants.socialResponsibilitySliderImages}
                          carouselType={carouselConstants.MAIN_SLIDER}/>
            </div>
            <div className={styles.center}>
                <div>The company BURNABY TRADING LLP is confident that the preservation of the ecological balance is a
                    main component of a successful business.
                </div>
                <div>We pay great attention to one of the priorities of every modern company - care of the future of our
                    society.
                </div>
                <div>The undoubted factor in improving the environmental situation in the industrial area of the world
                    is a complex of processing of technogenic slag disposals .
                </div>
                <div>Scientific and technical approach to the solution of this problem is a fundamental factor of
                    development of this direction of our company.
                </div>
                <div>Every day we invest in social corporate responsibility of business by means of the simplest but
                    actions so necessary for modern society which gradually,<br/> step by step, helps to create
                    professional culture.
                </div>
                <div>Thus we enjoy of the work sincerely trusting in what we do.</div>
                <div>Developing social responsibility of company, we rely on our main corporate values:</div>
                <div>
                    <ul style={{listStyleType: 'square'}}>
                        <li>■ to be a company with which it is pleasant to clients to work and with which it is possible
                            to build mutually advantageous partnership.
                        </li>
                        <li>■ provide services that meet customer needs and facilitate their business communications</li>
                        <li>■ taking an active position in modern society</li>
                        <li>■ to invest in the future of the country and its new generation</li>
                    </ul>
                </div>
                <div>We combine our efforts for you ,paying great attention to the main priorities social responsibility
                    of the company: establishing strong business <br/> relationships, regular training and
                    professionalism of our employees.
                </div>
            </div>
            <Footer/>
        </>
    )
};


export default SocialResponsibility;