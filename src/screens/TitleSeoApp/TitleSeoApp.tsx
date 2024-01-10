import React, {JSX} from 'react';
import {TitleSeoAppProps} from "@/screens/TitleSeoApp/TitleSeoApp.props";
import cn from 'classnames'
import styles from './TitleSeoApp.module.css'
import Header from "@/components/semantic/Header/Header";
import HTitle from "@/components/ui/HTitle/HTitle";
import PlayButton from "@/components/ui/PlayButton/PlayButton";
import Button from "@/components/ui/Button/Button";
import Chart from '../../images/svg/featureItem1.svg';
import Speaker from '../../images/svg/featureItem2.svg'
import Computer from '../../images/svg/featureItem1.svg'
import FeatureItem from "@/components/screen/featureItem/FeatureItem";

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