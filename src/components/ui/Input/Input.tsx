'use client'
import React, {JSX, useEffect, useState} from 'react';
import styles from './Input.module.css'
import {InputProps} from "@/components/ui/Input/Input.props";
import cn from 'classnames'
import PasswordIcon from './password.svg'
import SearchIcon from './search.svg'
import LargeChooseIcon from './LargeArrowDown.svg'
import SmallChooseIcon from './SmallArrowDown.svg'

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((
        {value,
        className,
        inputSize,
        placeholder,
        state,
        label,
        theme,
        type,
        hint,
        ...props}
        : InputProps, ref: React.ForwardedRef<any>): JSX.Element => {

    const[inputValue, setInputValue] = useState<string>(value || '')
    const[isFilled, setIsFilled] = useState<boolean>(!!value);
    const[isFocused, setIsFocused] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleBlur = () => {
        setIsFilled(inputValue !== "");
        setIsFocused(false);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    // useEffect(()=>{
    //
    // }, [isFocused])

    const isDisabledFilled: boolean = state === 'disabledFilled'
    const isDisabledEmpty: boolean = state === 'disabledEmpty'

    useEffect(() => {
        setInputValue(value || "");
        setIsFilled(!!value);
    }, [value]);

    return (
        <div className={styles.inputWrapper}>
            {!label || label === '' || label === undefined ? (<></>) :
                (<label className={cn(styles.label, {
                    [styles.darkLabel]: theme === 'dark',
                    [styles.lightLabel]: theme === 'light',
                    [styles.focusLabel]: isFocused,
                    [styles.largeLabel]: inputSize === 'large',
                    [styles.mediumLabel]: inputSize === 'medium',
                    [styles.smallLabel]: inputSize === 'small',
                    [styles.disabledLabel]: (state === 'disabledEmpty' || state === 'disabledFilled')
                })}>
                    {label}
                </label>)
            }
            <div className={styles.inputContainer}>
                <input
                    type={showPassword || type === 'choose' ? "text" : type}
                    className={cn(styles.input, {
                        [styles.focusInput]: isFocused,
                        [styles.disabledFilled]: isDisabledFilled,
                        [styles.disabledEmpty]: isDisabledEmpty,
                        [styles.errorFilled]: state === 'errorFilled',
                        [styles.inputLarge]: inputSize === 'large',
                        [styles.inputMedium]: inputSize === 'medium',
                        [styles.inputSmall]: inputSize === 'small'
                    })}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    readOnly={isDisabledFilled || isDisabledEmpty}
                    ref={ref}
                    {...props}
                />
                {
                    type === 'password' ? (
                        <PasswordIcon className={cn(styles.eyeIcon)} onClick={togglePasswordVisibility}/>
                    ) : null
                }
                {
                    type === 'search' ? (
                        <SearchIcon className={cn(styles.searchIcon)}/>
                    ) : null
                }
                {
                    type === 'choose' && (inputSize === 'large' || inputSize === 'medium') ? (
                        <LargeChooseIcon className={cn(styles.largeChooseIcon)}/>
                    ) : null
                }
                {
                    type === 'choose' && inputSize === 'small' ? (
                        <SmallChooseIcon className={cn(styles.smallChooseIcon)}/>
                    ) : null
                }
            </div>
            {
                !hint || hint === '' || hint === undefined ? null : (
                    <p className={cn(styles.p, {
                        [styles.successFilled]: state === 'successFilled',
                        [styles.errorFilled]: state === 'errorFilled'
                    })}>
                        {hint}
                    </p>
                )
            }
        </div>
    );
});

export default Input;