import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {number} from "prop-types";

export interface TabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: any,
}

export interface TabProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    title: string,
    key: number
}

export interface ITabsContext {
    activeTab: string;
    switchTab: any
}