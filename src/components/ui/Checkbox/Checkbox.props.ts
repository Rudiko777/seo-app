import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface CheckboxeProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    type: 'checked' | 'unchecked' | 'disabled'
}