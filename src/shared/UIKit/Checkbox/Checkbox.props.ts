import {DetailedHTMLProps, LabelHTMLAttributes, ReactNode} from "react";

export interface CheckboxProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>{
    type: 'checked' | 'unchecked' | 'disabled'
    children: ReactNode,
    id: string
}