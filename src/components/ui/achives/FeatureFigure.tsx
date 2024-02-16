import React, {JSX} from 'react';
import styles from './FeatureFigure.module.css'
import {FeatureFigureProps} from "@/components/ui/achives/FeatureFigure.props";
import cn from 'classnames'

const FeatureFigure = ({percent, title, color, ...props}:FeatureFigureProps): JSX.Element => {
    let colorPath: string;

    switch (color){
        case "orange":
            colorPath = '#F89828'
            break;
        case "blue":
            colorPath = '#5A87FC';
            break;
        case "green":
            colorPath = '#03CEA4';
            break;
        case "pink":
            colorPath = '#F52F6E';
            break;
        default:
            throw new Error('Wrong color')
    }

    return (
        <div className={styles.achiveContainer} {...props}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <g clip-path="url(#clip0_9081_3015)">
                    <circle opacity={percent >= 100 ? '1' : '0.3'} cx="20" cy="20" r="18" className={cn({
                        [styles.pink]: color === 'pink',
                        [styles.orange]: color === 'orange',
                        [styles.green]: color === 'green',
                        [styles.blue]: color === 'blue'
                    })} stroke-width="4" />
                    {
                        percent >= 100 ? null : <path d="M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4V0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 14.2928 2.39055 9.14386 6.22496 5.5L8.72317 8.64953C5.80608 11.5478 4 15.563 4 20C4 28.8366 11.1634 36 20 36Z" fill={colorPath} />
                    }
                </g>
                <defs>
                    <clipPath id="clip0_9081_3015">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className={styles.info}>
                <span className={styles.percent}>{percent}%</span>
                <span className={styles.title}>{title}</span>
            </div>
        </div>
    );
};

export default FeatureFigure;