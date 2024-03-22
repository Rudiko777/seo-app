import React, {JSX} from 'react';
import styles from './Award.module.css'
import {AwardProps} from "@/entities/Award/Award.props";
import cn from 'classnames'
import Ptag from "@/shared/UIKit/Ptag/Ptag";
import Image from "next/image";

const Award = ({imageLink, className, children, ...props}: AwardProps): JSX.Element => {
    return (
        <div className={cn(styles.award, className)} {...props}>
            <Image src={imageLink} alt={'award1'} width={75} height={75}/>
            <Ptag type={'Award'} className={styles.pBox}>
                {children}
            </Ptag>
        </div>
    );
};

export default Award;