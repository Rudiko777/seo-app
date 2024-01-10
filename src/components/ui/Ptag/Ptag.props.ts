import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode,
    type: 'direction' | 'large' | 'quotation' | 'testimonials' | 'medium' | 'small' | 'general' | 'award'
}