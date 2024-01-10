import React, {JSX} from 'react';
import styles from './Htag.module.css'
import {HtagProps} from "@/components/ui/HTag/Htag.props";

const Htag = ({type, children, id, ...props}: HtagProps): JSX.Element => {
    switch (type) {
        case "h1":
            return <h1 className={styles.h1} id={id} {...props}>{children}</h1>;
        case "h1-Description":
            return <h1 className={styles.h1Description} id={id} {...props}>{children}</h1>;
        case "h2-main":
            return <h2 className={styles.h2Main} id={id} {...props}>{children}</h2>;
        case 'h3-main':
            return <h3 className={styles.h3Main} id={id} {...props}>{children}</h3>;
        case 'h2-freeSeo':
            return <h2 className={styles.h2FreeSeo} id={id} {...props}>{children}</h2>;
        case 'h2-services':
            return <h2 className={styles.h2Services} id={id} {...props}>{children}</h2>;
        default:
            return <></>
    }
};

export default Htag;