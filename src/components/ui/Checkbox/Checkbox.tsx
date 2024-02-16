'use client'
import React, {JSX, useState} from 'react';
import {CheckboxProps} from "@/components/ui/Checkbox/Checkbox.props";
import styles from './Checkbox.module.css'
import Accept from '../../../images/svg/check.svg'
import cn from 'classnames'


// eslint-disable-next-line react/display-name
const Checkbox = React.forwardRef(({type, id, children, className, ...props}: CheckboxProps, ref: React.ForwardedRef<any>): JSX.Element => {
    const[active, setActive] = useState<boolean>(
        type === "checked"
    )
    return (
        <label htmlFor={id} className={cn(styles.checkboxLabel, className, {
            [styles.disabledLabel]: type === 'disabled'
        })} {...props}>
            <input
                type="checkbox"
                id={id} className={styles.checkbox}
                defaultChecked={active}
                onClick={() => setActive(prevState => !prevState)}
                disabled={type === 'disabled'}
            />
            <span className={styles.checkboxView}>
                <Accept/>
            </span>
                Подписаться на рассылку
        </label>
    );
});

export default Checkbox;