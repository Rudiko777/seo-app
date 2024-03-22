import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface PlayButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    size: 'large' | 'small'
}