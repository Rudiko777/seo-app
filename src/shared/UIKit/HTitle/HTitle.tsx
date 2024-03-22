import React, {JSX} from 'react';
import styles from './HTitle.module.css'

const HTitle = (): JSX.Element => {
    return (
        <h1 className={styles.title}>
            Best <span className={styles.filled}>SEO & Marketing</span> Solutions for You
        </h1>
    );
};

export default HTitle;