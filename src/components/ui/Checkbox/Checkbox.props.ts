import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react";

export interface CheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    type: 'checked' | 'unchecked' | 'disabled'
    children: ReactNode,
    id: string
}