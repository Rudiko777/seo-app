import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    type: 'h1' | 'h1-Description' | 'h2-main' | 'h2-freeSeo' | 'h2-services' | 'h3-main' | 'h3-services' | 'h3Footer'
    children: ReactNode,
}