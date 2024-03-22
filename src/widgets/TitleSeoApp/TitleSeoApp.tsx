import React, {JSX} from 'react';
import {TitleSeoAppProps} from "@/widgets/TitleSeoApp/TitleSeoApp.props";
import cn from 'classnames'
import styles from './TitleSeoApp.module.css'
import Header from "@/widgets/Header/Header";
import HTitle from "@/shared/UIKit/HTitle/HTitle";
import PlayButton from "@/shared/UIKit/PlayButton/PlayButton";
import Button from "@/shared/UIKit/Button/Button";
import Chart from '../../../public/images/svg/featureItem1.svg';
import Speaker from '../../../public/images/svg/featureItem2.svg'
import Computer from '../../../public/images/svg/featureItem1.svg'
import FeatureItem from "@/entities/FeatureItem/FeatureItem";

const TitleSeoApp = ({className, ...props}: TitleSeoAppProps): JSX.Element => {
    return (
        <div className={cn(styles.titleComponent, className)} {...props}>
            <Header className={styles.header}/>
            <div className={styles.body}>
                <div className={styles.titleContainer}>
                    <HTitle/>
                </div>
                <div className={styles.analysBox}>
                    <Button appearance={'white'} size={'big'} outline>
                        Get a free analysis
                    </Button>
                    <div className={styles.playVideo}>
                        <PlayButton size={'small'}/>
                        <p className={styles.playVideoText}>
                            Play video
                        </p>
                    </div>
                </div>
                <div className={styles.features}>
                    <FeatureItem svg={<Chart/>}>
                        SEO Content Strategy
                    </FeatureItem>
                    <span className={styles.gradientBranch}></span>
                    <FeatureItem svg={<Speaker/>}>
                        Content Marketing
                    </FeatureItem>
                    <span className={styles.gradientBranch}></span>
                    <FeatureItem svg={<Computer/>}>
                        Website & Social Media Marketing
                    </FeatureItem>
                </div>
            </div>
        </div>
    );
};

export default TitleSeoApp;