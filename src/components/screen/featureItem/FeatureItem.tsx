import React, {JSX} from 'react';
import {FeatureItemProps} from "@/components/screen/featureItem/FeatureItem.props";
import styles from './FeatureItem.module.css'
import cn from 'classnames'
import Image from "next/image";

const FeatureItem = ({children, svg, className, ...props}: FeatureItemProps): JSX.Element => {
    return (
        <div className={cn(styles.featureItemBox, className)} {...props}>
            {svg}
            <p className={styles.featureItemText}>
                {children}
            </p>
        </div>
    );
};

export default FeatureItem;