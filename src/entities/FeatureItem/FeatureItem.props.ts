import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface FeatureItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode,
    svg: any,
}