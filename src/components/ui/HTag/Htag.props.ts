import {ReactNode} from "react";

export interface HtagProps {
    type: 'h1' | 'h1-Description' | 'h2-main' | 'h2-freeSeo' | 'h2-services' | 'h3-main' | 'h3-services',
    children: ReactNode,
    id: string,
}