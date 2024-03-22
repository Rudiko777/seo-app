'use client'
import React, {JSX, useState} from 'react';
import styles from './Switch.module.css'
import {SwitchProps} from "@/shared/UIKit/Switch/Switch.props";
import cn from 'classnames'

const Switch = ({children, type, ...props}: SwitchProps): JSX.Element => {
    const[active, setActive] = useState<boolean>(
        type === 'active'
    )

    return (
        <div className={styles.switchContainer}>
            <input type="checkbox" defaultChecked={active} id="checkbox" className={styles.checkbox} disabled={type === 'disabled'}/>
            <label
                htmlFor="checkbox"
                className={cn(styles.checkboxLabel, {
                [styles.disabledSwitchLabel]: type === 'disabled'
            })} {...props}
                onClick={() => setActive(prevState => !prevState)}/>
            <span className={cn(styles.span, {
                [styles.disabledSwitchSpan]: type === 'disabled'
            })}>
                {children}
            </span>
        </div>
    );
};

export default Switch;