import {DetailedHTMLProps, HTMLAttributes, JSX, ReactComponentElement, ReactNode} from "react";
import {StaticImageData} from "next/image";

export interface AwardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    imageLink: any,
    children: ReactNode
}