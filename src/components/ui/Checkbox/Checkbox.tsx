import React, {JSX} from 'react';
import {CheckboxProps} from "@/components/ui/Checkbox/Checkbox.props";
import styles from './Checkbox.module.css'
import cn from 'classnames'

// eslint-disable-next-line react/display-name
const Checkbox = React.forwardRef(({type, id, children, className, ...props}: CheckboxProps, ref: React.ForwardedRef<any>): JSX.Element => {
    return (
        <>
            <input
                type={'checkbox'}
                ref={ref}
                className={cn(
                styles.checkbox, className, {

                }
            )} disabled={type === 'disabled'}
               id={id}
               {...props}
            />
            <label className={cn(styles.label, {
                [styles.disabled]: type === 'disabled'
            })} htmlFor={id}>
                {children}
            </label>
        </>
    );
});

export default Checkbox;