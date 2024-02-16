import {ReactNode} from "react";

export interface SwitchProps{
    children: ReactNode,
    type: 'active' | 'inActive' | 'disabled'
}