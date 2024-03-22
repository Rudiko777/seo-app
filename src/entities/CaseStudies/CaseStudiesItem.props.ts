import {DetailedHTMLProps, HTMLAttributes, JSX} from "react";
import {StaticImageData} from "next/image";

export interface CaseStudiesItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title: string,
    theme: 'light' | 'dark',
    image: StaticImageData,
    Achieve1?: JSX.Element,
    Achieve2?: JSX.Element,
    background?: StaticImageData
}