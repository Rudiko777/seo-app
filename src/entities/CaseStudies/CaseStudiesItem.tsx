import React, {JSX} from 'react';
import styles from './CaseStudiesItem.module.css'
import {CaseStudiesItemProps} from "@/entities/CaseStudies/CaseStudiesItem.props";
import cn from "classnames";
import Image from "next/image";
import Ptag from "@/shared/UIKit/Ptag/Ptag";
import FeatureFigure from "@/shared/UIKit/achives/FeatureFigure";

const CaseStudiesItem = ({title, background, theme, image, Achieve1, Achieve2, className, ...props}: CaseStudiesItemProps): JSX.Element => {
    return (
        <div className={cn(styles.itemContainer, className, {
            [styles.lightTheme]: theme === 'light',
            [styles.darkTheme]: theme === 'dark'
        })} {...props}>
            <Image src={image} alt={'clientLogo'}/>
            <span className={styles.title}>
                {title}
            </span>
            <Ptag type={'medium'} className={styles.pTag}>
                Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.
            </Ptag>
            <div className={styles.achivesContainer}>
                <FeatureFigure percent={90} title={'Engagement'} color={'orange'}/>
                <FeatureFigure percent={100} title={'Deliverability'} color={'green'}/>
            </div>
            {/*{*/}
            {/*    background ? <Image src={background} alt={'backgroundImage'} className={styles.backgroundImage}/> : null*/}
            {/*}*/}
        </div>
    );
};

export default CaseStudiesItem;