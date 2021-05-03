import React, {Component} from 'react';
import styles from './Footer.module.sass';


class Footer extends Component {



    render() {
        return (
            <div className={styles.footerContainer}>

                <div className={styles.footerBottom}>
                    <div className={styles.container}>
                        <div className={styles.itemsRow}>
                            <div>
                                <h5>
                                    2021 © BestInvest Trading  <br/>
                                    <br/>
                                    All Rights reserved
                                </h5>
                            </div>
                            <div className={styles.flex}>
                                <h6>Ukraine Zaporizhye<br/>
                                Ladojskaya 10 <br/>
                                PSP NLP =)</h6>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer;
