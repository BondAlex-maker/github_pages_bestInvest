import React from "react";
import styles from "../Header/Header.module.sass";



export default class Menu extends React.Component {


    render() {
        return(
            <div className="container mg-top">

                {
                <div>
                    <>
                        <div className={styles.navContainer}>
                            <div className={styles.leftNav}>
                                <div id="nav" className={styles.nav}>

                                    <ul>
                                        <li>
                                            <a href='/'>Главная</a>
                                        </li>
                                        <li>
                                            <a href='/disposalofhazardousslag'>Утилизация Опасного Шлака</a>
                                        </li>
                                        <li>
                                            <a href='/waste'>Отходы</a>
                                        </li>
                                        <li>
                                            <a href='/Metals'>Металы</a>

                                        </li>
                                        <li>
                                            <a href='/socialresponsibility'>Социальная Ответственность</a>
                                        </li>
                                        <li>
                                            <a href='/services'>Сервисы</a>
                                        </li>
                                        <li>
                                            <a href='/contacts'>Контакты</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                }

            </div>
        );
    }
}
