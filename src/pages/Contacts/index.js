import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/';
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar/';
import Footer from '../../components/Footer/';

import style from '../../components/Menu/Menu.module.sass'
import carouselConstants from '../../carouselConstants';
import styles from './Contacts.module.sass'
/*
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
*/


const Contacts = (props) => {

    return (
        <>
            <Header/>
            <div className={style.greyContainer}>
                <SlideBar images={carouselConstants.mainSliderImages}
                          carouselType={carouselConstants.MAIN_SLIDER}/>
            </div>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.blockName}>
                        <h1>Адрес</h1>
                    </div>
                    <div className={styles.infoMarginLeft}>
                        <h2>International House 38 Thistle Street Edinburgh <br/> Scotland, EH2 1EN, UK
                            <br/><br/>
                            contact@burnaby-trading.com</h2>
                    </div>
                </div>
                <div className={styles.mapInputsDirectionRow}>
                    <div className={styles.mapBlockWidth}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.669879857995!2d35.06936491560478!3d47.88471837920415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc642171a97625%3A0xe5644cc410ea721c!2zMTlBLCDQkdC-0YDQvtC00LjQvdGB0LrQsNGPINGD0LsuLCAxOdCQLCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY5MDAw!5e0!3m2!1sru!2sua!4v1613500940049!5m2!1sru!2sua"
                            width="600" height="450" frameBorder="0" style={{border: '0'}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"/>
                    </div>
                    <div className={styles.inputBlockWidth}>
                        <div><label htmlFor="fName">Name *</label></div>
                        <div>
                           <input type="text" required='required'/>
                        </div>
                        <div>
                            <label htmlFor="Email">Email *</label>
                        </div>
                        <div>
                            <input type="email" required='required'/>
                        </div>
                        <div>
                            <label htmlFor="Subject">Subject *</label>
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                        <div>
                            <label htmlFor="Message">Message *</label>
                        </div>
                        <div>
                            <input type="text"/>
                        </div>

                        <input className={styles.inputMarginTop} type="submit"/>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
};


export default Contacts;