import React, {JSX} from 'react';
import styles from './Htag.module.css'
import {HtagProps} from "@/components/ui/HTag/Htag.props";

const Htag = ({type, children, ...props}: HtagProps): JSX.Element => {
    switch (type) {
        case "h1":
            return <h1 className={styles.h1} {...props}>{children}</h1>;
        case "h1-Description":
            return <h1 className={styles.h1Description} {...props}>{children}</h1>;
        case "h2-main":
            return <h2 className={styles.h2Main} {...props}>{children}</h2>;
        case 'h3-main':
            return <h3 className={styles.h3Main} {...props}>{children}</h3>;
        case 'h2-freeSeo':
            return <h2 className={styles.h2FreeSeo} {...props}>{children}</h2>;
        case 'h2-services':
            return <h2 className={styles.h2Services} {...props}>{children}</h2>;
        case 'h3Footer':
            return <h3 className={styles.h3Footer} {...props}>{children}</h3>;
        default:
            return <></>
    }
};

export default Htag;