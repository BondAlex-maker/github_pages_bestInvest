import React from 'react';
import styles from './Header.module.sass';
import Menu from "../Menu";


class Header extends React.Component{



    render() {

        if (this.props.isFetching) {
            return null;
        }
        return (
            <div className={styles.headerContainer} >

                <div className={styles.upLogo}>
                        <img src={`logo.png`} alt='logo'/>
                </div>
                <Menu></Menu>

            </div>
        )
    }
}

export default Header;