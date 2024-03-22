import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    appearance: 'primary' | 'ghost' | 'secondary' | 'dark' | 'white'
    size: 'big' | 'medium' | 'small',
    isArrow?: boolean,
    outline?: boolean
}