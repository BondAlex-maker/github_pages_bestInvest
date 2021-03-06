import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
/*import {Link} from "react-router-dom";*/
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar';
import Footer from '../../components/Footer';

import style from '../../components/Menu/Menu.module.sass'
import styles from './DisposalOfHazardousSlag.module.sass'
import carouselConstants from '../../carouselConstants';
/*
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
*/


const DisposalOfHazardousSlag = (props) => {

    return (
        <>
            <Header/>
            <div className={style.greyContainer}>
                <SlideBar images={carouselConstants.disposalOfHazardousSlagSliderImages}
                          carouselType={carouselConstants.MAIN_SLIDER}/>
            </div>
            <div className={styles.infoContainerColumn}>
                <div>Our company offers services for the complete disposal of hazardous waste, which are classified ( *
                    )
                </div>
                <div>The problem of complete disposal of hazardous waste from the metallurgical, chemical, nitrogen
                    industry is a big problem for the environment.

                </div>
                <div>For example.</div>
                <div>
                    Companies operating in the recovery of non-ferrous metals (especially the lead, zinc and copper
                    producers) generate solid waste in the form of the metallurgical slags as a by-product of their
                    processes. About 240,000 t of the waste slags from lead and zinc industry are produced each year
                    just in Poland, and in Europe, this kind of waste is produced in the amount of several million tons.

                    Those slags are mostly hazardous for

                    the natural environment and require storage in the properly secured landfills.

                    The slag producers bear the costs

                    of building the landfills as well as the environmental fees for the waste storage.

                    The non-ferrous metals producers are looking for an efficient

                    method to eliminate the metallurgical waste slags from the process cycle according to the
                    “zero-waste” strategy.
                </div>
                <div>Industrial wastes generated by non-ferrous metallurgy enterprises pose a great danger - they are
                    the most toxic. They contain a huge amount of heavy metals that can accumulate in the human body and
                    can be harmful to health.
                </div>
                <div>In the classification of heavy metals according to the degree of threat to human health,

                    three groups are distinguished:
                </div>
                <div>- Arsenic, zinc, mercury, lead (the most toxic compounds); <br/>

                    - Cobalt, chromium, nickel, molybdenum;<br/>

                    - Vanadium, manganese. <br/>

                </div>
                <div>Salt slag is a waste product produced by the recycling of aluminum. In most European countries
                    (e.g. Austria, Germany) the landfill disposal of this waste is forbidden because the slag contains
                    soluble salts and these represent a potential source of pollution to the surface and groundwater.
                    Additionally, consisting metal and some compounds in the salt slag can react with water and
                    resulting from this, noxious gases are generated.
                </div>
                <div></div>
            </div>
            <Footer/>
        </>
    )
};


export default DisposalOfHazardousSlag;