import React, {JSX} from 'react';
import {PtagProps} from "@/shared/UIKit/Ptag/Ptag.props";
import cn from 'classnames'
import styles from './Ptag.module.css'

const Ptag = ({children, className, type, ...props}: PtagProps): JSX.Element => {
    return (
        <p className={cn(className, {
            [styles.direction]: type === 'direction',
            [styles.large]: type === 'large',
            [styles.quotation]: type === 'quotation',
            [styles.testimonials]: type === 'testimonials',
            [styles.medium]: type === 'medium',
            [styles.small]: type === 'small',
            [styles.general]: type === 'general',
            [styles.award]: type === 'Award',
            [styles.muchSmall]: type === 'muchSmall'
        })} {...props}>
            {children}
        </p>
    );
};

//'direction' | 'large' | 'quotation' | 'testimonials' | 'medium' | 'small' | 'general'

export default Ptag;