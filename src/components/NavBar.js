import React from 'react';
import styles from './NavBar.module.css';
import singlePersonLogo from './singlePerson.png';
import storeLogo from './storeLogo.jpg';
const NavBar = () => {

    return (
        <div className={styles["navbar_container"]}>
        <div className={styles["navbar_div"]}>
            <h3 className={styles["navbar_heading"]}>Company Logo</h3>
            <ul className={styles["navbar_ul"]}>
                <li>for individuals</li>
                <li>for businesses</li>
                <li>outreach</li>
                <li>store</li>
                <li>blog</li>
                <li>about</li>
            </ul>
            <img className={styles["navbar_img"]} src={singlePersonLogo} />
            <img className={styles["navbar_img"]} src={storeLogo} />
        </div>
        </div>
    );

};
export default NavBar;