import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    placeholder: string
    inputSize: 'large' | 'medium' | 'small'
    value?: string
    state: 'default' | 'errorFilled' | 'successFilled' | 'disabledFilled' | 'disabledEmpty'
    label: string
    type: 'password' | 'search' | 'choose' | 'email' | 'tel' | 'text'
    theme: 'dark' | 'light'
    hint: string
}