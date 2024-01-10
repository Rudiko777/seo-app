import React, {JSX} from 'react';
import styles from './Award.module.css'
import {AwardProps} from "@/components/screen/award/Award.props";
import cn from 'classnames'
import Ptag from "@/components/ui/Ptag/Ptag";
import Image from "next/image";

const Award = ({imageLink, className, children, ...props}: AwardProps): JSX.Element => {
    return (
        <div className={cn(styles.award, className)} {...props}>
            <Image src={imageLink} alt={'award1'} width={75} height={75}/>
            <Ptag type={'award'} className={styles.pBox}>
                {children}
            </Ptag>
        </div>
    );
};

export default Award;