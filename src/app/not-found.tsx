import React from 'react';
import styles from "./not-found.module.css";
import Link from "next/link";
const NotFound = () => {
    return (
        <div className={styles.containerNotFound}>
            <div content={styles.container}>
                <h1 className={styles.Htag}>404 Page is not found</h1>
                <Link href={'/'} className={styles.link}>
                    Back to main page
                </Link>
            </div>
        </div>
    );
};


export default NotFound;