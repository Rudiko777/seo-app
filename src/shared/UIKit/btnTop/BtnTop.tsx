'use client'
import React from 'react';
import styles from './BtnTop.module.css'
import Upper from '../../../../public/images/svg/Up-chevron.svg'

const Btn = () => {
    const goTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return(
        <button className={styles.btn} onClick={goTop}>
            <Upper className={styles.btnImage}/>
        </button>
    )
}

const BtnTopContainer = () => {
    return (
        <div className={styles.container}>
            <span className={styles.upText}>GO TO TOP</span>
            <Btn/>
        </div>
    );
};

export default BtnTopContainer;